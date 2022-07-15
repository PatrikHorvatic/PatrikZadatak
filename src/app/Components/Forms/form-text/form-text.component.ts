import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css']
})
export class FormTextComponent implements OnInit {

  // PLACEHOLDER ZA INPUT
  @Input() placeholder: string = "";


  // 2-WAY BINDING
  @Input() text: string = "";
  @Output() textChange = new EventEmitter<string>();

  constructor(private nativeElement: ElementRef) { }



  ngOnInit(): void {
    console.log(this.nativeElement.nativeElement);
  }


  change(e: string) {

  }

}
