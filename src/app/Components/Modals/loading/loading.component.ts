import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**Komponenta predstavlja Modal prozor za spinnerom u sredini prozora.
 * Koristi se kada se obavlja/simulira API poziv ili neka radnja
 */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  /**Zastavica za prikaz modala */
  @Input("show") show!: boolean;

  /**Zastavica za prikaz modala */
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

}
