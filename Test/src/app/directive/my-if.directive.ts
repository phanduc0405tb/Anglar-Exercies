import { Directive, Input, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myIf]'
})
export class MyIfDirective {

  constructor(
    private element: ElementRef,
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input()
  set myIf(isbool) {
    if (isbool) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
