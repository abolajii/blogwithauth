import axios from 'axios';

const token =
	localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'));

export const tokenToVerify = token.accessToken ? token.accessToken : '';

const instance = axios.create({
	baseURL: 'http://localhost:5000',
	headers: {
		Authorization: `Bearer ${token.accessToken ? token.accessToken : ''}`,
	},
});

export default instance;
