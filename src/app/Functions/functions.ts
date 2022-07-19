
/**Funckija provjerava ako string vrijednost može biti cijeli broj */
export function CanStringBeWholePositiveNumber(value: string): boolean {
	if (value.trim() === '') {
		return false;
	}
	return !Number.isNaN(Number(value)) && Number.isInteger(Number(value));
}