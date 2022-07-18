import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  /**Lista vrijednost NE smije biti klasa! */
  @Input() listaVrijednosti!: Array<string | number>;

  @Input() odabranaVrijednost!: any;

  @Output() odabranaVrijednostChange = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }


  emitirajOdabrano(e: any) {
    this.odabranaVrijednostChange.emit(e);
  }

}
