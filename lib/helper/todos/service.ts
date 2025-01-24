import axiosInstance from '../../utils/axios';

export const getTodos = async (url: string) => {
	const response = await axiosInstance(url);
	return response.data;
};

export const getTodoById = async (url: string) => {
	const response = await axiosInstance(url);
	return response.data;
};
