import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {

  @Input() text: string = "";

  /**Emitira se na button click. Emitira void, stoga $event nije potreban */
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() { }


  ngOnInit(): void {
  }

  onButtonClick() {
    this.buttonClicked.emit();
  }

}
