import { format } from 'date-fns';

export const formatDate = (date: string) => {
	return format(date, 'dd-MM-yyyy');
};

export const formatDateToISO = (date: string) => {
	return format(date, 'yyyy-MM-dd');
};
