import { Component, Input, OnInit } from '@angular/core';

/**Komponenta za naziv/naslov forme */
@Component({
  selector: 'app-form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.css']
})
export class FormTitleComponent implements OnInit {

  @Input() text: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
