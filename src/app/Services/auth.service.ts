import { Injectable } from '@angular/core';
import { UserType } from '../Enums/user-type';
import { IUser } from '../Interfaces/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public prijavljenKorisnik!: IUser;

  constructor(private users: UsersService) { }

  public provjeriLoginPodatke(korisnickoIme: string, lozinka: string): Promise<IUser> {
    return new Promise((resolve, reject) => {

      let listaKorisnika = this.users.vratiListuKorisnika();
      console.log(listaKorisnika);


      for (let k = 0; k < listaKorisnika.length; k++) {
        const korisnik = listaKorisnika[k];

        if (korisnik.korisnickoIme === korisnickoIme && korisnik.lozinka === lozinka) {
          console.log("Našel sam korisnika");

          this.prijavljenKorisnik = korisnik;
          break;
        }

      }

      console.log(this.prijavljenKorisnik);


      setTimeout(() => {
        if (this.prijavljenKorisnik) {
          resolve(this.prijavljenKorisnik);
        }
        else {
          reject(false);
        }
      }, 1000);



    });
  }



  public provjeriAkoJeKorisnikPrijavljen(type: number): Promise<boolean> {
    return new Promise((resolve, reject) => {

      if (!this.provjeriPrijavuKorisnika()) {
        console.log("Korisnik nije prijavljen.");
        reject(false);
      }
      else {
        console.log("PRIMIL SAM TIP " + type);
        if (this.prijavljenKorisnik.type === type) {

        }
      }




    });
  }




  private provjeriPrijavuKorisnika() {
    return Boolean(this.prijavljenKorisnik);
  }


}
