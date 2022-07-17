import { Injectable } from '@angular/core';
import { UserType } from '../Enums/user-type';
import { IUser } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public readonly userList: Array<IUser> = [
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


  public vratiListuKorisnika(): Array<IUser> {
    return this.userList;
  }


}
