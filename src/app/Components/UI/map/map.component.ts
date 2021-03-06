import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Environment } from 'src/app/Environment/environment';
import { ATM } from 'src/app/Interfaces/atm';

/**Komponenta sadrži mapu bankomata. Koristi ju običan korisnik i administrator prilikom PREGLEDA bankomata*/
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  /**Lista bankomata koja se prikazuje na mapi. */
  @Input() listaBankomata!: Array<ATM>;

  /**Event koji se emitira kada je jedan od markera/bankomata kliknut */
  @Output() markerKliknut = new EventEmitter<number>();

  /**Mapa */
  private map: google.maps.Map;

  constructor() { }

  ngOnInit(): void {

    let loader = new Loader({
      apiKey: Environment.MAPS_API_KEY,
      libraries: ['places', 'geometry']
    });

    loader.load()
      .then(succ => {

        this.map = new google.maps.Map(document.getElementById('map'),
          {
            center: { lat: 45.815399, lng: 15.966568 },
            zoom: 12
          });

        this.pripremiListuMarkeraBankomata();

      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {

      });

  }



  private pripremiListuMarkeraBankomata() {

    
    if (!this.listaBankomata) {
      return;
    }
    if (this.listaBankomata.length < 1) {
      return;
    }

    for (let i = 0; i < this.listaBankomata.length; i++) {
      const bankomat = this.listaBankomata[i];

      const marker = new google.maps.Marker({
        position: bankomat.lokacija,
        clickable: true,
        map: this.map,
        draggable: false,
        animation: google.maps.Animation.DROP
      });

      marker.addListener('click', () => {
        this.markerKliknut.emit(i);
      })
    }

  }



}
