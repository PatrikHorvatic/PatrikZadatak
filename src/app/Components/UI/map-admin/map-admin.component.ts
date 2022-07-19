import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Environment } from 'src/app/Environment/environment';

@Component({
  selector: 'app-map-admin',
  templateUrl: './map-admin.component.html',
  styleUrls: ['./map-admin.component.css']
})
export class MapAdminComponent implements OnInit {

  /**Zemljopisna širina. Nije obavezan unos. Ako nije unešena, mapa će se centrirati po zadanoj vrijednosti*/
  @Input() lat: number;
  /**Zemljopisna dužina. Nije obavezan unos. Ako nije unešena, mapa će se centrirati po zadanoj vrijednosti*/
  @Input() lng: number;

  /**Event kada korisnik klikne na */
  @Output() mapaKliknuta = new EventEmitter<object>();
  @Output() promjenaMarkera = new EventEmitter<{ lat: number, lng: number }>();

  /**Mapa */
  private map: google.maps.Map;

  /**Geokoder služi za dohvaćanje adrese prema zemljopisnim koordinatama */
  private geocoder: google.maps.Geocoder;

  /**Marker služi kao indikator pozicije bankomata */
  public marker: google.maps.Marker;

  constructor() { }

  ngOnInit(): void {

    let loader = new Loader({
      apiKey: Environment.MAPS_API_KEY,
      libraries: ['places', 'geometry']
    });

    loader.load()
      .then(succ => {

        this.map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: this.lat ? this.lat : 45.815399, lng: this.lng ? this.lng : 15.966568 },
          zoom: 12,
          disableDefaultUI: true,
          disableDoubleClickZoom: true
        });

        this.geocoder = new google.maps.Geocoder();

        this.marker = new google.maps.Marker({
          clickable: false,
          map: this.map,
          position: { lat: this.lat ? this.lat : 45.815399, lng: this.lng ? this.lng : 15.966568 }
        })

        this.pripremiEvente();

      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {

      });

  }


  private pripremiEvente() {

    //Klikom na mapu promjeni poziciju markera i dohvati adresu na temelju koordinata
    google.maps.event.addListener(this.map, 'click', (event: any) => {
      this.promjenaMarkera.emit({ lat: event.latLng.lat(), lng: event.latLng.lng() });

      this.marker.setMap(null);
      this.marker = new google.maps.Marker({
        clickable: false,
        map: this.map,
        position: { lat: event.latLng.lat(), lng: event.latLng.lng() }
      });

      this.geocoder.geocode({
        location: { lat: event.latLng.lat(), lng: event.latLng.lng() }
      })
        .then(response => {
          console.log(response);
          this.mapaKliknuta.emit(response["results"][0]);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {

        });
    });

  }


}
