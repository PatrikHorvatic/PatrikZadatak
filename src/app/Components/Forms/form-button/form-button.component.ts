import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**Komponenta predstavlja gumb */
@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {

  /**Text u gumbu */
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
