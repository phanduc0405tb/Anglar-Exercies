import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'pipestring'
})
export class PipestringPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value[0].toUpperCase() + value.substr(1);
  }

}
