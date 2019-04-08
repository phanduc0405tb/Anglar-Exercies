import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let i: number;
    if (value != null) {
      value = replaceTime(value.substr(2, value.length - 3));
      return value;
    }
    function replaceTime(time: string) {
      for (i = 0; i < time.length; i++ ) {
        if ( 'A'.localeCompare(time[i]) === -1 && 'Z'.localeCompare(time[i]) === 1) {
          time = time.replace(time[i], ':');
        }
      }
      return time;
    }
  }

}
