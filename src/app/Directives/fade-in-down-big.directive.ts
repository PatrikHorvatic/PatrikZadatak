import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';


/** Direktiva služi za dodavanja FadeInDownBig animacije. 
 * 
 * Dokumentacija se nalazi na ovoj poveznici: https://animate.style/
 * 
 * Trajanje animacije mijenja se u styles.css
*/
@Directive({
  selector: '[appFadeInDownBig]'
})
export class FadeInDownBigDirective {

  @Input() animate: boolean = true;

  constructor(private renderer: Renderer2, private nativeElement: ElementRef) {
    renderer.addClass(this.nativeElement.nativeElement, 'animate__animated');
    renderer.addClass(this.nativeElement.nativeElement, 'animate__fadeInDownBig');
  }

}
