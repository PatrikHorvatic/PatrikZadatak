import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import { ATM } from 'src/app/Interfaces/atm';


/**Komponenta služi za prikaz detalja o bankomatu. Ulazi s desne strane prozora.*/
@Component({
  selector: 'app-atmdetails',
  templateUrl: './atmdetails.component.html',
  styleUrls: ['./atmdetails.component.css']
})
export class ATMDetailsComponent implements OnInit, OnChanges {


  /**Zastavica za prikaz */
  @Input("menuActive") menuActive: boolean;
  @Output() menuActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**Ulazni podaci o odabranom bankomatu */
  @Input() atmDetails!: ATM;

  constructor(private renderer: Renderer2, private nativeElement: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    if (changes["menuActive"]) {
      if (changes["menuActive"].currentValue === true) {
        this.renderer.setStyle(this.nativeElement.nativeElement, 'width', '500px')
      }
      if (changes["menuActive"].currentValue === false) {
        this.renderer.setStyle(this.nativeElement.nativeElement, 'width', '0px');
      }
    }

  }


  Sakrij() {
    this.menuActive = false;
    this.menuActiveChange.emit(false);
  }

}
