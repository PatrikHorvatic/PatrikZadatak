import { Directive, ElementRef, Renderer2 } from '@angular/core';


/** Direktiva služi za dodavanja FadeIn animacije. 
 * 
 * Dokumentacija se nalazi na ovoj poveznici: https://animate.style/
 * 
 * Trajanje animacije mijenja se u styles.css
*/
@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective {

  constructor(private renderer: Renderer2, private nativeElement: ElementRef) {
    renderer.addClass(this.nativeElement.nativeElement, 'animate__animated');
    renderer.addClass(this.nativeElement.nativeElement, 'animate__fadeIn');
  }

}
