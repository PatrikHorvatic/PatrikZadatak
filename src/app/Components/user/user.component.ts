import { Component, OnInit } from '@angular/core';
import { ATM } from 'src/app/Interfaces/atm';
import { BankService } from 'src/app/Services/bank.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public loadingComplete!: boolean;

  public listATM!: Array<ATM>;

  constructor(private backService: BankService) { }

  ngOnInit(): void {
    this.loadingComplete = false;
    this.listATM = [];

    this.dohvatiPopisBankomata();
  }


  public dohvatiPopisBankomata(): void {

    this.backService.dohvatiListuBankomata()
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

}
