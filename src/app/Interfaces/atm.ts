import { ATMState, ATMType } from "../Enums/atm";

export interface ATM {
	redniBroj: number;
	vrstaBankomata: string,
	adresa: string,
	napomena: string | null
}
