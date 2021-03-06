import { Injectable } from '@angular/core';
import { User } from '../Classes/user';
import { UserType } from '../Enums/user-type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /**Lista korisnika aplikacije */
  public readonly userList: Array<User> = [
    {
      korisnickoIme: "korisnik1",
      lozinka: "lozinka1",
      type: UserType.USER
    },
    {
      korisnickoIme: "korisnik2",
      lozinka: "lozinka2",
      type: UserType.USER
    },
    {
      korisnickoIme: "admin",
      lozinka: "admin",
      type: UserType.ADMIN
    },
    {
      korisnickoIme: "korisnik3",
      lozinka: "lozinka3",
      type: UserType.USER
    },
  ]

  constructor() { }


  /**Metoda vraća listu korisnika */
  public vratiListuKorisnika(): Array<User> {
    return this.userList;
  }


}
