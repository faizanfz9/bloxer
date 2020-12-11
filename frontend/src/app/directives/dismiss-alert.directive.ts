import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDismissAlert]'
})
export class DismissAlertDirective {

  constructor(private renderer: Renderer2, private element: ElementRef) {
   }

  @HostListener("click") dismissAlert(event: Event) {
    this.element.nativeElement.parentNode.remove();
  }
  
}
