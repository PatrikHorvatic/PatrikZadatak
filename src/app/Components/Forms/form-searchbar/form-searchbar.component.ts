import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-form-searchbar',
  templateUrl: './form-searchbar.component.html',
  styleUrls: ['./form-searchbar.component.css']
})
export class FormSearchbarComponent implements OnInit {

  @Input() pretraga!: string;
  @Output() pretragaChange = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }


  promjenaTrazilice(e: any) {
    // console.log(e);
    this.pretragaChange.emit(e);
  }

}
