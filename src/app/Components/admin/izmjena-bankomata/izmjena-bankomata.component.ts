import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ATMState, ATMType } from 'src/app/Enums/atm';
import { CanStringBeWholePositiveNumber } from 'src/app/Functions/functions';
import { BankService } from 'src/app/Services/bank.service';

@Component({
  selector: 'app-izmjena-bankomata',
  templateUrl: './izmjena-bankomata.component.html',
  styleUrls: ['./izmjena-bankomata.component.css']
})
export class IzmjenaBankomataComponent implements OnInit {


  public showLoading: boolean = false;
  public showToast: boolean = false;
  public toastMessage!: string;

  public pulseRedniBroj: boolean = false;
  public pulseVrstaBankomata: boolean = false;
  public pulseAdresaBankomata: boolean = false;

  public vrsteBankomata!: Array<string>;
  public vrsteNapomena!: Array<string>;

  public redniBroj!: number;
  public redniBrojStari!: number;
  public odabranaVrstaBankomata!: any;
  public adresaBankomata: string | null = "";
  public napomena: string | null = "";
  public lat: number;
  public lng: number;

  constructor(private route: Router,
    private bankService: BankService,
    private activeRoute: ActivatedRoute) { }




  ngOnInit(): void {
    this.vrsteBankomata = Object.values(ATMType);
    this.vrsteNapomena = Object.values(ATMState);

    console.log(this.activeRoute);

    if (CanStringBeWholePositiveNumber(this.activeRoute.snapshot.params['redniBroj'])) {
      this.redniBroj = Number(this.activeRoute.snapshot.params['redniBroj']);
      this.dohvatiPodatkeOBankomatu();
    }
    else {
      this.route.navigate(['/admin']);
    }
  }

  private dohvatiPodatkeOBankomatu() {

    this.bankService.dohvatiPodatkeOBankomatu(this.redniBroj)
      .then(atm_data => {

        this.redniBroj = atm_data.redniBroj;
        this.redniBrojStari = atm_data.redniBroj;
        this.adresaBankomata = atm_data.adresa;
        this.napomena = atm_data.napomena;
        this.odabranaVrstaBankomata = atm_data.vrstaBankomata;
        this.lat = atm_data.lokacija.lat;
        this.lng = atm_data.lokacija.lng;

      })
      .catch(error => {
        console.log(error);
        this.route.navigate(['/admin']);
      })
      .finally(() => {

      });

  }

  izmjeniVrstuBankomata(e: any) {
    this.odabranaVrstaBankomata = e;
  }

  izmjeniVrstuNapomene(e: any) {
    this.napomena = e;
  }





  azurirajAdresu(e: any) {

    console.log(e);
    this.adresaBankomata = e["formatted_address"];
  }

  azurirajLokaciju(e: { lat: number, lng: number }) {
    this.lat = e.lat;
    this.lng = e.lng;
  }


  izmjeniBankomat() {
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
    console.log(this.redniBrojStari);
    console.log(this.odabranaVrstaBankomata);
    console.log(this.adresaBankomata);
    console.log(this.napomena);

    // Ako je korisnik mjenjao redni broj, provjeri zauzeće novog
    if (this.redniBroj !== this.redniBrojStari) {

      if (!this.bankService.provjeriJedinstvenostRednogBroja(this.redniBroj)) {
        this.pulseRedniBroj = true;
        this.toastMessage = "Redni broj bankomata je zauzet";
        this.showToast = true;
        return;
      }

      else {
        this.showLoading = true;
        this.bankService.izmjeniBankomat(this.redniBroj, this.odabranaVrstaBankomata, this.adresaBankomata, this.napomena, this.lat, this.lng)
          .then(resp => {
            this.toastMessage = "Podaci bankomata uspješno izmjenjeni";
            this.showToast = true;
          })
          .catch(error => {
            this.toastMessage = "Dogodila se greška prilikom spremanja";
            this.showToast = true;
          })
          .finally(() => {
            this.showLoading = false;
          });
      }

    }
    else {

      this.showLoading = true;
      this.bankService.izmjeniBankomat(this.redniBroj, this.odabranaVrstaBankomata, this.adresaBankomata, this.napomena, this.lat, this.lng)
        .then(resp => {
          this.toastMessage = "Podaci bankomata uspješno izmjenjeni";
          this.showToast = true;
        })
        .catch(error => {
          this.toastMessage = "Dogodila se greška prilikom spremanja";
          this.showToast = true;
        })
        .finally(() => {
          this.showLoading = false;
        });
    }

  }


}
