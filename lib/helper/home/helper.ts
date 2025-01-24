export const showMinimumDescription = (description: string) =>
	description.split(' ').slice(0, 10).join(' ') + '...';
