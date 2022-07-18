import { Component, OnInit } from '@angular/core';
import { ATMType } from 'src/app/Enums/atm';
import { BankService } from 'src/app/Services/bank.service';

@Component({
  selector: 'app-unos-bankomata',
  templateUrl: './unos-bankomata.component.html',
  styleUrls: ['./unos-bankomata.component.css']
})
export class UnosBankomataComponent implements OnInit {

  public showToast: boolean = false;
  public toastMessage!: string;

  public pulseRedniBroj: boolean = false;
  public pulseVrstaBankomata: boolean = false;
  public pulseAdresaBankomata: boolean = false;


  public vrsteBankomata!: Array<string>;

  public redniBroj!: number;
  public odabranaVrstaBankomata!: any;
  public adresaBankomata: string = "";

  constructor(private bank: BankService) { }

  ngOnInit(): void {
    this.vrsteBankomata = Object.values(ATMType);
  }

  public pogledajOdabranuVrstu(e: any) {
    console.log(e);
  }

  izmjeniVrstuBankomata(e: any) {
    this.odabranaVrstaBankomata = e;
  }



  public unesiBankomat() {

    this.showToast = false;

    if (!this.redniBroj) {
      this.pulseRedniBroj = true;
      this.toastMessage = "Morate unijeti redni broj bankomata.";
      this.showToast = true;
      return;
    }

    if (!this.odabranaVrstaBankomata) {
      this.pulseVrstaBankomata = true;
      this.toastMessage = "Morate odabrati vrstu bankomata.";
      this.showToast = true;
      return;
    }

    if (!this.adresaBankomata) {
      this.pulseAdresaBankomata = true;
      this.toastMessage = "Morate unijeti adresu bankomata.";
      this.showToast = true;
      return;
    }


    console.log(this.redniBroj);
    console.log(this.odabranaVrstaBankomata);
    console.log(this.adresaBankomata);

    this.bank.unesiBankomat(this.redniBroj, this.odabranaVrstaBankomata, this.adresaBankomata)
      .then(uspjesnost => {

      })
      .catch(error => {
        console.log(error);
        this.toastMessage = error;
        this.showToast = true;

      })
      .finally(() => {

      });


  }


}
