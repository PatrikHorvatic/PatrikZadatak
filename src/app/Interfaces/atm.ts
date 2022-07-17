import { ATMState, ATMType } from "../Enums/atm";

export interface ATM {
	redniBroj: number;
	vrstaBankomata: ATMType,
	adresa: string,
	napomena: ATMState | null
}
