import { Component, Input, OnInit } from '@angular/core';


/**
 * Input text
 */

@Component({
  selector: 'app-form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.css']
})
export class FormLabelComponent implements OnInit {

  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
