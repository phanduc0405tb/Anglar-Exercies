import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class ChangecolorDirective {

  constructor(element: ElementRef) {
    console.log(element);
    element.nativeElement.style.color = 'red';
  }

}
