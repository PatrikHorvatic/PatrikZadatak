import { Injectable } from '@angular/core';
import { ATMState, ATMType } from '../Enums/atm';
import { Environment } from '../Environment/environment';
import { ATM } from '../Interfaces/atm';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  public atmList: Array<ATM> = [
    {
      redniBroj: 1,
      vrstaBankomata: ATMType.BESKONTAKTNI,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 2,
      vrstaBankomata: ATMType.DNEVNO_NOCNI,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 3,
      vrstaBankomata: ATMType.KOVINOMAT,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 4,
      vrstaBankomata: ATMType.TREZOR,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 5,
      vrstaBankomata: ATMType.UPLATNO_ISPLATNI,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 6,
      vrstaBankomata: ATMType.KOVINOMAT,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 7,
      vrstaBankomata: ATMType.TREZOR,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 8,
      vrstaBankomata: ATMType.BESKONTAKTNI,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 9,
      vrstaBankomata: ATMType.BESKONTAKTNI,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 10,
      vrstaBankomata: ATMType.BESKONTAKTNI,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 11,
      vrstaBankomata: ATMType.BESKONTAKTNI,
      adresa: "",
      napomena: ATMState.IZVAN_FUNKCIJE,
    },

    {
      redniBroj: 12,
      vrstaBankomata: ATMType.UPLATNO_ISPLATNI,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 13,
      vrstaBankomata: ATMType.BESKONTAKTNI,
      adresa: "",
      napomena: null,
    },

    {
      redniBroj: 14,
      vrstaBankomata: ATMType.TREZOR,
      adresa: "",
      napomena: ATMState.IZVAN_FUNKCIJE,
    },

    {
      redniBroj: 15,
      vrstaBankomata: ATMType.DNEVNO_NOCNI,
      adresa: "",
      napomena: null,
    }
  ];

  constructor() { }


  public dohvatiListuBankomata(): Promise<Array<ATM>> {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(this.atmList);
      }, Math.floor(Math.random() * (Environment.delays.max - Environment.delays.min + 1) + Environment.delays.min));

    });
  }


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



  public unesiBankomat(rednibroj: number, odabranaVrstaBankomata: string, adresa: string): Promise<boolean> {
    return new Promise((resolve, reject) => {

      if (this.provjeriJedinstvenostRednogBroja(rednibroj)) {
        this.atmList.push({
          redniBroj: rednibroj,
          vrstaBankomata: odabranaVrstaBankomata,
          adresa: adresa,
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

  public izmjeniBankomat(rednibroj: number, odabranaVrstaBankomata: string, adresa: string, napomena: string | null): Promise<boolean> {
    return new Promise((resolve, reject) => {

      let index = this.atmList.findIndex(atm => atm.redniBroj === rednibroj);

      this.atmList[index].adresa = adresa;
      this.atmList[index].redniBroj = rednibroj;
      this.atmList[index].vrstaBankomata = odabranaVrstaBankomata;
      this.atmList[index].napomena = napomena;

      resolve(true);

    });
  }



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
