export interface ATM {
	redniBroj: number;
	vrstaBankomata: string,
	adresa: string,
	lokacija: { lat: number, lng: number },
	napomena: string | null
}
