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


  public unesiBankomat(): Promise<ATM> {
    return new Promise((resolve, reject) => {




    });
  }




  public dohvatiVrsteBankomata(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {


    });
  }

}
