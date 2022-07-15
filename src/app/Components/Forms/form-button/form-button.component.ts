import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {

  @Input() text: string = "";

  constructor() { }


  ngOnInit(): void {
  }


}
