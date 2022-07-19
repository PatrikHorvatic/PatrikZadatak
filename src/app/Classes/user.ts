import { UserType } from "../Enums/user-type";

/**Klasa predstavlja korisničke podatke*/
export class User {
	public korisnickoIme!: string;
	public lozinka!: string;
	public type!: UserType
}
