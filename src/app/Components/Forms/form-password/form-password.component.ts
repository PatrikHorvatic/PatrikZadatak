import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Environment } from 'src/app/Environment/environment';

/**Komponenta za unos lozinke */
@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css']
})
export class FormPasswordComponent implements OnInit, OnChanges {

  @Input() placeholder: string = "";

  // 2-way-binding
  @Input() password: string = "";
  @Output() passwordChange = new EventEmitter<string>();


  // 2-WAY BINDING
  @Input() pulseAnimation: boolean = false;
  @Output() pulseAnimationChange = new EventEmitter<boolean>();


  /**Zastavica */
  public toggleState: boolean = false;

  constructor() { }


  ngOnInit(): void {
    this.toggleState = false;
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


  /**Metoda se poziva kada korisnik u password kontejneru pritisne oko */
  togglePassword() {
    this.toggleState = !this.toggleState;
  }


  passwordChanged(e: string) {
    this.passwordChange.emit(e);
  }

}
