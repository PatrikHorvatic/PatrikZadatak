import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css']
})
export class FormPasswordComponent implements OnInit {

  @Input() placeholder: string = "";

  @Input() password: string = "";
  @Output() passwordChange = new EventEmitter<string>();


  /**Zastavica */
  public toggleState: boolean = false;

  constructor() { }



  ngOnInit(): void {
    this.toggleState = false;
  }


  /**Metoda se poziva kada korisnik u password kontejneru pritisne oko */
  togglePassword() {
    this.toggleState = !this.toggleState;
  }



}
