function formatRupiah(number) {
	const format = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	return `Rp${format}`;
}
export default formatRupiah;
