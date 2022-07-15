import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeInDownBig]',
  inputs: []
})
export class FadeInDownBigDirective {

  @Input() animate: boolean = true;

  constructor(private renderer: Renderer2, private nativeElement: ElementRef) {
    renderer.addClass(this.nativeElement.nativeElement, 'animate__animated');
    renderer.addClass(this.nativeElement.nativeElement, 'animate__fadeInDownBig');
  }

}
