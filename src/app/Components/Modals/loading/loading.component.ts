import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  /**Zastavica za prikaz modala */
  @Input("show") show: boolean = true;

  /**Zastavica za prikaz modala */
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

}
