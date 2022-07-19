/**Sadrži osnovne podatke o bankomatu */
export interface ATM {

	/**Redni broj bankomata. Prema rednom broju se rade CRUD operacije bankomata. */
	redniBroj: number;

	/**Vrsta bankomata može biti jedna od vrijednosti {@link ATMType} enumeracije */
	vrstaBankomata: string,

	/**Adresa bankomata */
	adresa: string,

	/**Lokacija bankomata prema zemljopisnoj širini i dužini */
	lokacija: {
		/**Zemljopisna širina */
		lat: number,

		/**Zemljopisna dužina */
		lng: number
	},

	/**Napomena može biti jedna od vrijednosti {@link ATMState} enumeracije */
	napomena: string | null
}
