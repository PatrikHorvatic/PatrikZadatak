import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Environment } from 'src/app/Environment/environment';

@Component({
  selector: 'app-form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.css']
})
export class FormNumberComponent implements OnInit, OnChanges {

  // PLACEHOLDER ZA INPUT
  @Input() placeholder: string = "";


  // 2-WAY BINDING
  @Input() number!: number;
  @Output() numberChange = new EventEmitter<number>();

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


  change(e: number) {
    this.numberChange.emit(e);
  }
}
