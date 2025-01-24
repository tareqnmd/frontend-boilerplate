export const formatNumber = (number: number) => {
	return new Intl.NumberFormat('en-BD').format(number);
};

export const formatNumberToCurrency = (number: number) => {
	return new Intl.NumberFormat('en-BD', {
		style: 'currency',
		currency: 'BDT',
	}).format(number);
};

export const addComma = (number: number) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
