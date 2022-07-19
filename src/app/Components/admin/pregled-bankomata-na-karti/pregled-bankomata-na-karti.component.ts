import { Component, OnInit } from '@angular/core';
import { ATM } from 'src/app/Interfaces/atm';
import { BankService } from 'src/app/Services/bank.service';

@Component({
  selector: 'app-pregled-bankomata-na-karti',
  templateUrl: './pregled-bankomata-na-karti.component.html',
  styleUrls: ['./pregled-bankomata-na-karti.component.css']
})
export class PregledBankomataNaKartiComponent implements OnInit {

  public pokaziDetaljeBankomata: boolean = false;

  /**Podaci bankomata dobiveni klikom na marker u mapi.*/
  public atmDetails!: ATM;


  /**Zastavica služi za prikaz loading spinnera na stranici kada*/
  public loadingComplete!: boolean;

  /**Popis bankomata */
  public listATM!: Array<ATM>;

  constructor(private bankService: BankService) { }


  ngOnInit(): void {
    this.loadingComplete = false;
    this.listATM = [];

    this.dohvatiPopisBankomata();
  }


  public dohvatiPopisBankomata(): void {

    this.bankService.dohvatiListuBankomata()
      .then(atmList => {
        this.listATM = atmList;
        this.loadingComplete = true;
        console.log(atmList);

      })
      .catch(error => {
        this.loadingComplete = true;
        console.log(error);
      });

  }

  /**Metoda se poziva kada administrator klikne na jedan od markera bankomata.
   * Prosljeđuje se index iz liste, spremaju se podati i otvara komponenta s podatima bankomata.
   */
  public prikaziProzorSDetaljimaBankomata(e: number) {

    this.atmDetails = this.listATM[e];
    this.pokaziDetaljeBankomata = true;

  }

}
