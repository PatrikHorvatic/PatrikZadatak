import { Component, OnInit } from '@angular/core';
import { ATMType } from 'src/app/Enums/atm';
import { BankService } from 'src/app/Services/bank.service';

@Component({
  selector: 'app-unos-bankomata',
  templateUrl: './unos-bankomata.component.html',
  styleUrls: ['./unos-bankomata.component.css']
})
export class UnosBankomataComponent implements OnInit {


  /**Zastavica služi za prikaz loading spinnera u sučelju */
  public showLoading: boolean = false;

  /**Zastavica služi za prikaz toast komponente */
  public showToast: boolean = false;

  /**Poruka u Toast komponenti */
  public toastMessage!: string;



  /**Zastavica animiranja input komponente*/
  public pulseRedniBroj: boolean = false;

  /**Zastavica animiranja input komponente*/
  public pulseVrstaBankomata: boolean = false;

  /**Zastavica animiranja input komponente*/
  public pulseAdresaBankomata: boolean = false;

  /**Lista sadrži vrste bankomata dobivenih iz enumeracije {@link ATMType} */
  public vrsteBankomata!: Array<string>;



  //PODACI FORME
  public redniBroj!: number | null;
  public odabranaVrstaBankomata!: any;
  public adresaBankomata: string | null = "";
  public lat: number;
  public lng: number;



  constructor(private bank: BankService) { }

  ngOnInit(): void {
    this.vrsteBankomata = Object.values(ATMType);
    this.showLoading = false;
  }


  /**Metoda za debug */
  public pogledajOdabranuVrstu(e: any) {
    console.log(e);
  }


  /**Poziva se kod promjene odabrane vrijednosti u app-form-select komponenti*/
  izmjeniVrstuBankomata(e: any) {
    this.odabranaVrstaBankomata = e;
  }


  /**Poziva se klikom na kartu u sučelju*/
  public azurirajLokaciju(e: { lat: number, lng: number }) {
    this.lat = e.lat;
    this.lng = e.lng;
  }

  /**Poziva se klikom na kartu u sučelju*/
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
