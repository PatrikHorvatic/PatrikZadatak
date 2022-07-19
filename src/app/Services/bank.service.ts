import { Injectable } from '@angular/core';
import { ATMState, ATMType } from '../Enums/atm';
import { Environment } from '../Environment/environment';
import { ATM } from '../Interfaces/atm';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  /**Lista bankomata */
  public atmList: Array<ATM> = [
    {
      redniBroj: 1,
      vrstaBankomata: ATMType.BESKONTAKTNI,
      adresa: "Savska cesta 37",
      lokacija: { lat: 45.800776414906764, lng: 15.963268876637734 },
      napomena: null,
    },

    {
      redniBroj: 2,
      vrstaBankomata: ATMType.DNEVNO_NOCNI,
      adresa: "Ulica grada Vukovara, 41",
      lokacija: { lat: 45.79997449565077, lng: 15.971547754796752 },
      napomena: null,
    }
  ];

  constructor() { }


  /**Metoda 'asinkrono' vraća listu bankomata iz liste bankomata. Dodana metoda setTimeout radi simuliranja API poziva. */
  public dohvatiListuBankomata(): Promise<Array<ATM>> {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(this.atmList);
      }, Math.floor(Math.random() * (Environment.delays.max - Environment.delays.min + 1) + Environment.delays.min));

    });
  }


  /**Metoda služi za dohvaćanje podataka o bankomatu prema njegovom rednom broju.
   * 
   * @param redniBroj - redni broj bankomata
   */
  public dohvatiPodatkeOBankomatu(redniBroj: number): Promise<ATM> {
    return new Promise((resolve, reject) => {

      let trazenBankomat = this.atmList.find(atm => atm.redniBroj === redniBroj);

      if (typeof trazenBankomat === "undefined") {
        reject("Nisam našao bankomat prema rednom broju!");
      }
      else {
        resolve(trazenBankomat);
      }
    });
  }


  /**Metoda služi za unos bankomata. Prvojera podataka vrši ne prije slanja iz stranice.
   * 
   * @param rednibroj - redniBroj bankomata
   * @param odabranaVrstaBankomata - odabrana vrsta bankomata, jedna od vrijedosti iz enumeracije {@link ATMType}
   * @param adresa - adresa bankomata, dobivena iz karte ili ručnim unosom administratora
   * @param lat - zemljopisna širina bankomata na karti
   * @param lng - zemljopisna dužina bankomata na karti
   */
  public unesiBankomat(rednibroj: number, odabranaVrstaBankomata: string, adresa: string, lat: number, lng: number): Promise<boolean> {
    return new Promise((resolve, reject) => {

      if (this.provjeriJedinstvenostRednogBroja(rednibroj)) {
        this.atmList.push({
          redniBroj: rednibroj,
          vrstaBankomata: odabranaVrstaBankomata,
          adresa: adresa,
          lokacija: { lat: lat, lng: lng },
          napomena: null
        });

        setTimeout(() => {
          resolve(true);
        }, Environment.delays.min);
      }
      else {
        reject("Redni broj bankomata je zauzet.")
      }


    });
  }

  /**Metoda služi za izmjenu bankomata. Prvojera podataka i postojanost bankomata vrši ne prije slanja iz stranice.
    * 
    * @param rednibroj - redniBroj bankomata
    * @param odabranaVrstaBankomata - odabrana vrsta bankomata, jedna od vrijedosti iz enumeracije {@link ATMType}
    * @param adresa - adresa bankomata, dobivena iz karte ili ručnim unosom administratora
    * @param napomena - napomena u vezi bankomata, jedna od vrijednosti iz enumeracije {@link ATMState}
   * @param lat - zemljopisna širina bankomata na karti
   * @param lng - zemljopisna dužina bankomata na karti
  */
  public izmjeniBankomat(rednibroj: number, odabranaVrstaBankomata: string, adresa: string, napomena: string | null, lat: number, lng: number): Promise<boolean> {
    return new Promise((resolve, reject) => {

      let index = this.atmList.findIndex(atm => atm.redniBroj === rednibroj);

      this.atmList[index].adresa = adresa;
      this.atmList[index].redniBroj = rednibroj;
      this.atmList[index].vrstaBankomata = odabranaVrstaBankomata;
      this.atmList[index].napomena = napomena;
      this.atmList[index].lokacija.lat = lat;
      this.atmList[index].lokacija.lng = lng;

      resolve(true);

    });
  }


  /**Metoda briše bankomat iz liste bankomata */
  public obrisiBankomat(atmDelete: ATM): Promise<boolean> {
    return new Promise((resolve, reject) => {

      let index = this.atmList.findIndex(atm => atm.redniBroj === atmDelete.redniBroj);
      this.atmList.splice(index, 1);
      resolve(true);

    });
  }



  /**Metoda se poziva prije unosa novog ili izmjene postojećeg bankomata. Pošto redni broj mora biti jedinstven,
   * prije tih operacija potrebno je izvršiti ovu metodu.
   */
  public provjeriJedinstvenostRednogBroja(redniBroj: number): boolean {
    // console.log(Boolean(this.atmList.filter(atm => atm.redniBroj === redniBroj).length));

    if (this.atmList.filter(atm => atm.redniBroj === redniBroj).length === 0) {
      return true;
    }
    else {
      return false;
    }

  }


  /**Metoda služi za provjeru postojanosti bankomata s određenim rednim brojem.
   * 
   * Metoda se poziva u BankGuardu kako bi se provjerila postojanost bankomata
   */
  public provjeriPostojanostRednogBroja(redniBroj: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log(this.atmList.filter(atm => String(atm.redniBroj) === redniBroj).length === 0);

      if (this.atmList.filter(atm => String(atm.redniBroj) === redniBroj).length === 0) {
        reject(false);
      }
      else {
        resolve(true);
      }
    });
  }



}
