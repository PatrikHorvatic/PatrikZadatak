import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { ATM } from 'src/app/Interfaces/atm';
import { BankService } from 'src/app/Services/bank.service';

@Component({
  selector: 'app-admin-pocetna',
  templateUrl: './admin-pocetna.component.html',
  styleUrls: ['./admin-pocetna.component.css']
})
export class AdminPocetnaComponent implements OnInit {


  public loadingComplete!: boolean;

  public listATM!: Array<ATM>;

  constructor(private bankService: BankService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.loadingComplete = false;
    this.listATM = [];
    this.dohvatiPopisBankomata();

  }


  public dohvatiPopisBankomata(): void {

    this.loadingComplete = false;

    this.bankService.dohvatiListuBankomata()
      .then(atmList => {
        this.loadingComplete = true;
        this.listATM = atmList;
        console.log(atmList);

      })
      .catch(error => {
        this.loadingComplete = true;
        console.log(error);

      })
      .finally(() => {

      });

  }


  public potvrdiBrisanjeBankomata(atm: ATM) {

  }
}
