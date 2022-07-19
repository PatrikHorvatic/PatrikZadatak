import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {


  @Input("message") message: string = "";

  /**Zastavica za prikaz modala */
  @Input("show") show!: boolean;

  /**Zastavica za prikaz modala */
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  @Output() optionClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  emitirajTrue() {
    this.optionClicked.emit(true);
    this.showChange.emit(false);
    this.show = false;
  }
  
  emitirajFalse() {
    this.optionClicked.emit(false);
    this.showChange.emit(false);
    this.show = false;
  }

}
