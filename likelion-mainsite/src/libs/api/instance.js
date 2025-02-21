import axios from 'axios';
import process from 'process';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_URL || '',
    timeout: 10000,
});

// axiosInstance.interceptors.request.use(
// 	(config) => {
// 		const accessToken = sessionStorage.getItem('accessToken');
// 		const isUserAPI = config.url.includes('/api/users');

// 		console.log('Access Token:', accessToken); // accessToken 확인

// 		if (accessToken) {
// 			// 헤더에 accessToken 추가하여 전달
// 			// 사용자가 접근 허용 받을 때 전달방
// 			config.headers['Authorization'] = `Bearer ${accessToken}`;
// 		} else {
// 			if (!isUserAPI) {
// 				window.location.href = '/login/step1';
// 				return Promise.reject(new Error('No access token'));
// 			}
// 		}

// 		console.log('Request Headers:', config.headers); // 요청 헤더 확인

// 		return config;
// 	},
// 	(error) => {
// 		console.error(error);
// 		return Promise.reject(error);
// 	},
// );

// axiosInstance.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	(error) => {
// 		const { response } = error;
// 		if (response) {
// 			if (response.status === 401 || response.status === 403) {
// 				alert('로그인이 되어 있지 않습니다. 로그인 후 시도해 주세요.');
// 				window.location.href = '/login/step1';
// 			}
// 		}
// 		return Promise.reject(error);
// 	},
// );

// accessToken을 sessionStorage에 저장하는 함수
// export const setAccessToken = (token) => {
// 	sessionStorage.setItem('accessToken', token);
// };

// // accessToken을 sessionStorage에서 제거하는 함수
// export const clearAccessToken = () => {
// 	sessionStorage.removeItem('accessToken');
// };

export default axiosInstance;
