import axiosInstance from '../../utils/axios';

export const getHomeData = async () => {
	const response = await axiosInstance('/photos');
	return response.data;
};
