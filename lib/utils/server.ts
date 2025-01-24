'use server';

import { cookies, headers } from 'next/headers';

export const getCookie = async () => {
	const headersList = await headers();
	const cookie = headersList.get('cookie');
	return cookie;
};

export const getCookieValue = async (name: string) => {
	const cookieStore = await cookies();
	const cookie = cookieStore.get(name);
	return cookie?.value ?? '';
};
