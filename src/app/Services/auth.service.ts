import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public prijavljenKorisnik!: IUser;

  constructor(private users: UsersService) { }

  /**Metoda služi za provjeru unesenih korisničkih podataka prilikom prijave.
   * 
  */
  public provjeriLoginPodatke(korisnickoIme: string, lozinka: string): Promise<IUser> {
    return new Promise((resolve, reject) => {

      let listaKorisnika = this.users.vratiListuKorisnika();
      console.log(listaKorisnika);


      for (let k = 0; k < listaKorisnika.length; k++) {
        const korisnik = listaKorisnika[k];

        if (korisnik.korisnickoIme === korisnickoIme && korisnik.lozinka === lozinka) {
          console.log("Našao sam korisnika");

          this.prijavljenKorisnik = korisnik;
          break;
        }

      }

      console.log(this.prijavljenKorisnik);


      // Tu je setTimeout() da simulira API poziv
      setTimeout(() => {
        if (this.prijavljenKorisnik) {
          resolve(this.prijavljenKorisnik);
        }
        else {
          resolve(this.prijavljenKorisnik);
          // reject(false);
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
        console.log("PRIMIL SAM TIP " + type);
        if (this.prijavljenKorisnik.type === type) {
          resolve(true);
        }
        else {
          reject(false);
        }
      }




    });
  }




  private provjeriPrijavuKorisnika(): boolean {
    console.log(this.prijavljenKorisnik !== null);
    console.log(this.prijavljenKorisnik !== undefined);

    return this.prijavljenKorisnik !== null || this.prijavljenKorisnik !== undefined;
  }


}
