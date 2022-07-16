import { UserType } from "../Enums/user-type";

export interface IUser {
	korisnickoIme: string,
	lozinka: string,
	type: UserType
}
