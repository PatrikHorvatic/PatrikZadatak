import { ATMType } from "../Enums/atm";

export interface ATM {
	redniBroj: number;
	vrstaBankomata: ATMType,
	adresa: string,
	napomena: string | null
}
