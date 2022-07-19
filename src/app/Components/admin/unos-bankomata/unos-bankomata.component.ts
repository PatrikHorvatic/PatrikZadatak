import { Component, OnInit } from '@angular/core';
import { ATMType } from 'src/app/Enums/atm';
import { BankService } from 'src/app/Services/bank.service';

@Component({
  selector: 'app-unos-bankomata',
  templateUrl: './unos-bankomata.component.html',
  styleUrls: ['./unos-bankomata.component.css']
})
export class UnosBankomataComponent implements OnInit {

  public showLoading: boolean = false;
  public showToast: boolean = false;
  public toastMessage!: string;

  public pulseRedniBroj: boolean = false;
  public pulseVrstaBankomata: boolean = false;
  public pulseAdresaBankomata: boolean = false;


  public vrsteBankomata!: Array<string>;

  public redniBroj!: number | null;
  public odabranaVrstaBankomata!: any;
  public adresaBankomata: string | null = "";
  public lat: number;
  public lng: number;



  constructor(private bank: BankService) { }

  ngOnInit(): void {
    this.vrsteBankomata = Object.values(ATMType);
    this.showLoading = false;

    this.dohvatiPodatkeOBankomatu()
  }

  private dohvatiPodatkeOBankomatu() {

  }



  public pogledajOdabranuVrstu(e: any) {
    console.log(e);
  }

  izmjeniVrstuBankomata(e: any) {
    this.odabranaVrstaBankomata = e;
  }


  public azurirajLokaciju(e: { lat: number, lng: number }) {
    this.lat = e.lat;
    this.lng = e.lng;
  }

  public azurirajAdresu(e: any) {
    console.log(e);
    this.adresaBankomata = e["formatted_address"];
  }



  public unesiBankomat() {

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

    this.showLoading = true;

    this.bank.unesiBankomat(this.redniBroj, this.odabranaVrstaBankomata, this.adresaBankomata, this.lat, this.lng)
      .then(uspjesnost => {
        this.toastMessage = "Bankomat uspješno dodan!";
        this.showToast = true;

        this.redniBroj = null;
        this.odabranaVrstaBankomata = null;
        this.adresaBankomata = null;
        this.lat = null;
        this.lng = null;

      })
      .catch(error => {
        console.log(error);
        this.toastMessage = error;
        this.showToast = true;

      })
      .finally(() => {
        this.showLoading = false;
      });


  }


}
