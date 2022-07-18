import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminSearchOptions } from 'src/app/Enums/search-options';
import { ATM } from 'src/app/Interfaces/atm';
import { BankService } from 'src/app/Services/bank.service';

@Component({
  selector: 'app-pretraga-bankomata',
  templateUrl: './pretraga-bankomata.component.html',
  styleUrls: ['./pretraga-bankomata.component.css']
})
export class PretragaBankomataComponent implements OnInit {

  public searchTerm!: any;
  public loadingComplete!: boolean;


  public searchOptions: Array<any> = Object.values(AdminSearchOptions);
  public chosenSearchOption = Object.values(AdminSearchOptions)[0];


  public searchListATM!: Array<ATM>;
  public listATM!: Array<ATM>;


  constructor(private bankService: BankService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    console.log(this.searchOptions);
    console.log(this.chosenSearchOption);

    // console.log(AdminSearchOptions);

    // this.searchTerm = AdminSearchOptions.

    this.loadingComplete = true;
    this.listATM = [];
    this.searchListATM = [];
    this.dohvatiPopisBankomata();
  }



  public dohvatiPopisBankomata(): void {

    this.loadingComplete = false;

    this.bankService.dohvatiListuBankomata()
      .then(atmList => {
        this.loadingComplete = true;
        this.listATM = atmList;
        // this.searchListATM = atmList;
        // console.log(atmList);

      })
      .catch(error => {
        this.loadingComplete = true;
        console.log(error);

      })
      .finally(() => {

      });

  }


  public promjeniOpcijuFiltra(e: any) {
    console.log(e);
    this.chosenSearchOption = e;

  }

  public filtriraj(e: string) {
    this.searchTerm = e;

    // AKO JE TRAŽILICA PRAZNA, NEMOJ OBAVITI PRETRAGU
    if (!e) {
      this.searchListATM = [];
    } else {
      this.loadingComplete = false;

      this.searchListATM = this.listATM;

      if (this.chosenSearchOption === AdminSearchOptions.ADRESA_BANKOMATA) {
        console.log("Filtriram po adresi");

        this.searchListATM = this.searchListATM.filter(function adresa(trenutna_vrijednost) {
          return trenutna_vrijednost.adresa.toLocaleLowerCase().includes(e.trim().toLocaleLowerCase());
        });
      }

      else if (this.chosenSearchOption === AdminSearchOptions.REDNI_BROJ) {
        this.searchListATM = this.searchListATM.filter(function adresa(trenutna_vrijednost) {
          return trenutna_vrijednost.redniBroj.toString().includes(e.trim());
        });
      }

      else if (this.chosenSearchOption === AdminSearchOptions.VRSTA_BANKOMATA) {
        this.searchListATM = this.searchListATM.filter(function adresa(trenutna_vrijednost) {
          return trenutna_vrijednost.vrstaBankomata.toLocaleLowerCase().includes(e.trim().toLocaleLowerCase());
        });
      }
      else {

      }
      setTimeout(() => {

        this.loadingComplete = true;
      }, 200);
    }



  }












  public potvrdiBrisanjeBankomata(atm: ATM) {

  }

}
