import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AttributeDirectiveDirective {

  constructor(private element: ElementRef) { }
  @Input() appHover: string;
  // tslint:disable-next-line:align
  @HostListener('mouseover') onMouseOver() {
    this.hoverElement(this.appHover);
  }

  hoverElement(color: string) {
    this.element.nativeElement.style.color = color;
  }
}
