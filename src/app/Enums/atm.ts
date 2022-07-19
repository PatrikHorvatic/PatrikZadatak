
/**Enumeracija sadrži nazive vrsta bankomata.*/
export enum ATMType {
	BESKONTAKTNI = "Beskontaktni",
	UPLATNO_ISPLATNI = "Uplatno-isplatni",
	DNEVNO_NOCNI = "Dnevno-noćni",
	TREZOR = "Trezor",
	KOVINOMAT = "Kovinomat"
}


/**Enumeracija sadrži stanja u kojem bankomat može biti.*/
export enum ATMState {
	U_FUNKCIJI = "U funkciji",
	IZVAN_FUNKCIJE = "Izvan funkcije"
}
