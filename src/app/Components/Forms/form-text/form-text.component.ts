import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Environment } from 'src/app/Environment/environment';

/**Komponenta za unos teksta */
@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css']
})
export class FormTextComponent implements OnInit, OnChanges {


  // PLACEHOLDER ZA INPUT
  @Input() placeholder: string = "";


  // 2-WAY BINDING
  @Input() text: string = "";
  @Output() textChange = new EventEmitter<string>();

  // 2-WAY BINDING
  @Input() pulseAnimation: boolean = false;
  @Output() pulseAnimationChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);

    if (changes["pulseAnimation"]) {
      if (changes["pulseAnimation"].currentValue === true) {
        setTimeout(() => {
          this.pulseAnimation = false;
          this.pulseAnimationChange.emit(false);
        }, Environment.animacija.pulse);
      }
    }

  }

  change(e: string) {
    this.textChange.emit(e);
  }

}
