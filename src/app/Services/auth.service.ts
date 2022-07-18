import { Injectable } from '@angular/core';
import { User } from '../Classes/user';
import { UserType } from '../Enums/user-type';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public prijavljenKorisnik!: User;

  constructor(private users: UsersService) { }

  /**Metoda služi za provjeru unesenih korisničkih podataka prilikom prijave.
   * 
  */
  public provjeriLoginPodatke(korisnickoIme: string, lozinka: string): Promise<User> {
    return new Promise((resolve, reject) => {

      let listaKorisnika = this.users.vratiListuKorisnika();
      console.log(listaKorisnika);


      for (let k = 0; k < listaKorisnika.length; k++) {
        const korisnik = listaKorisnika[k];

        if (korisnik.korisnickoIme === korisnickoIme && korisnik.lozinka === lozinka) {
          console.log("Našao sam korisnika");

          this.prijavljenKorisnik = new User();
          this.prijavljenKorisnik.korisnickoIme = korisnik.korisnickoIme;
          this.prijavljenKorisnik.lozinka = korisnik.lozinka;
          this.prijavljenKorisnik.type = korisnik.type;

          break;
        }

      }

      console.log(this.prijavljenKorisnik);


      // Tu je setTimeout() da simulira API poziv
      setTimeout(() => {
        if (this.prijavljenKorisnik) {
          if (Object.keys(this.prijavljenKorisnik).length) {
            console.log("RESOLVE this.prijavljenKorisnik");

            resolve(this.prijavljenKorisnik);
          }
          else {
            reject(false);
          }
        } else {
          reject(false);
        }

      }, 1000);



    });
  }



  public provjeriAkoJeKorisnikPrijavljen(type: number): Promise<boolean> {

    console.log("ZOVEM provjeriAkoJeKorisnikPrijavljen u AuthService");

    return new Promise((resolve, reject) => {

      if (!this.provjeriPrijavuKorisnika()) {
        console.log("Korisnik nije prijavljen.");
        reject(false);
      }
      else {
        // console.log("PRIMIL SAM TIP " + type);
        if (this.prijavljenKorisnik.type === type) {
          resolve(true);
        }
        else {
          reject(false);
        }
      }




    });
  }


  public provjeriAkoJeAktivanKorisnikAdmin(type: number): Promise<boolean> {
    return new Promise((resolve, reject) => {

      // console.log("PRIMIL SAM TIP " + type);
      if (this.prijavljenKorisnik.type === UserType.ADMIN) {
        resolve(true);
      }
      else {
        reject(false);
      }


    });
  }


  public provjeriAkoJeAktivanKorisnikUser(type: number): Promise<boolean> {
    return new Promise((resolve, reject) => {

      // console.log("PRIMIL SAM TIP " + type);
      if (this.prijavljenKorisnik.type === UserType.USER) {
        resolve(true);
      }
      else {
        reject(false);
      }


    });
  }

  private provjeriPrijavuKorisnika(): boolean {

    if (Object.keys(this.prijavljenKorisnik).length > 0) {
      return true;
    }
    else { return false }

  }



  public odjaviKorisnika(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.prijavljenKorisnik = new User();
      resolve(true);
    });
  }



}
