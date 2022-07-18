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

  public vrsteBankomata!: Array<string>;

  public odabranaVrstaBankomata!: number;
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

    if (!this.odabranaVrstaBankomata) {
      this.toastMessage = "Morate odabrati vrstu bankomata!";
      this.showToast = true;
      return;
    }

    if (!this.adresaBankomata) {
      this.toastMessage = "Morate unijeti adresu bankomata!";
      this.showToast = true;
      return;
    }





  }


}
