import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { BankService } from 'src/app/Services/bank.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private bankService: BankService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }



}
