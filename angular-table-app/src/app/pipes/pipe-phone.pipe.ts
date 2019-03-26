import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePhone'
})
export class PipePhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    // tslint:disable-next-line:prefer-for-of
    // for ( let i = 0; i < value.length; i++) {
    //   if (value[i] === '-') {
    //   }
    //   value = '(+84)' + value;
    // }
    value = '(+84)' + value.replace(/-/g, '');
    return value;
  }

}
