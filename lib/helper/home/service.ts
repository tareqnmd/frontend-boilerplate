import axiosInstance from '../../utils/axios';

export const getHomeData = async (url: string) => {
	const response = await axiosInstance(url);
	return response.data;
};
