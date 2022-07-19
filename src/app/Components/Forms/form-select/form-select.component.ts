import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Environment } from 'src/app/Environment/environment';

/**Komponena za odabir vrijednosti */
@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit, OnChanges {

  /**Lista vrijednost NE smije biti klasa! */
  @Input() listaVrijednosti!: Array<any>;

  @Input() odabranaVrijednost!: any;

  @Output() odabranaVrijednostChange = new EventEmitter<any>();


  @Input() pulseAnimation: boolean = false;
  @Output() pulseAnimationChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);

    if (changes["pulseAnimation"]) {
      if (changes["pulseAnimation"].currentValue === true) {
        setTimeout(() => {
          this.pulseAnimation = false;
          this.pulseAnimationChange.emit(false);
        }, Environment.animacija.pulse);
      }
    }

  }


  emitirajOdabrano(e: any) {
    this.odabranaVrijednostChange.emit(e);
  }

}
