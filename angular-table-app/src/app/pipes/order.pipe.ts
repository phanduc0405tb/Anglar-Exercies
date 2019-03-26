import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})

export class OrderPipe implements PipeTransform {
  transform(value: any[], filed: string): any {
    function compare(a, b) {
      a = a[filed];
      b = b[filed];
      const type = (typeof(a) === 'string' ||
                  typeof(b) === 'string') ? 'string' : 'number';
      let result;
      if (type === 'string') { result = a.localeCompare(b); } else { result = a - b; }
      return result;
    }
    value = value.sort(compare);
    return value;
  }
}

