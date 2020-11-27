import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMenuToggle]'
})
export class MenuToggleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') onClick(event: Event) {
    let dropdown = this.element.nativeElement.nextSibling;
    if(dropdown.classList.value.includes("show")) {
      this.renderer.removeClass(dropdown, "show");
    }else {
      this.renderer.addClass(dropdown, "show");
    }
  }

}
