import { Component, Input, OnInit } from '@angular/core';


/**Labela
 * Input text
 */

@Component({
  selector: 'app-form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.css']
})
export class FormLabelComponent implements OnInit {

  /**Text labele */
  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
