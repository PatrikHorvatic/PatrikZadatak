import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-izmjena-bankomata',
  templateUrl: './izmjena-bankomata.component.html',
  styleUrls: ['./izmjena-bankomata.component.css']
})
export class IzmjenaBankomataComponent implements OnInit {

  public redniBrojBankomata!: number;

  constructor(private route: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute);
    this.activeRoute.snapshot.params['redniBroj'];
  }

}
