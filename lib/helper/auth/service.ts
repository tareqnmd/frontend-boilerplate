import axiosInstance from '@/lib/utils/axios';
import { LoginPayloadType, RegisterPayloadType } from './type';

export const signIn = async (payload: LoginPayloadType) => {
	const response = await axiosInstance.post('/api/login', payload);
	return response.data;
};

export const signUp = async (payload: RegisterPayloadType) => {
	const response = await axiosInstance.post('/api/register', payload);
	return response.data;
};
