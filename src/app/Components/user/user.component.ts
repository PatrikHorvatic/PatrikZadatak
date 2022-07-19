import { Component, OnInit } from '@angular/core';
import { ATM } from 'src/app/Interfaces/atm';
import { BankService } from 'src/app/Services/bank.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public pokaziDetaljeBankomata: boolean = false;
  public atmDetails!: ATM;

  /**Zastavica služi za prikaz loading spinnera na stranici kada*/
  public loadingComplete!: boolean;

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
      })
      .finally(() => {

      });

  }

  public prikaziProzorSDetaljimaBankomata(e: number) {

    this.atmDetails = this.listATM[e];
    this.pokaziDetaljeBankomata = true;

  }

}
