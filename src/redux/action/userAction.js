import {
	GET_USER,
	GET_USER_FAILURE,
	GET_USER_SUCCESS,
} from '../constant/constant';

import axios, { tokenToVerify } from '../../helper/axios';
import jwt from 'jsonwebtoken';

export const getUser = () => {
	return {
		type: GET_USER,
	};
};

export const getUserSuccess = (data) => {
	return {
		type: GET_USER_SUCCESS,
		payload: data,
	};
};

export const getUserFailure = () => {
	return {
		type: GET_USER_FAILURE,
	};
};

export const fetchUser = () => (dispatch) => {
	const ress = jwt.verify(tokenToVerify, process.env.REACT_APP_JWT_SECRET);
	const userId = ress.id;

	axios
		.get(`/profile/user/${userId}`)
		.then((res) => {
			dispatch(getUserSuccess(res.data));
		})
		.catch((err) => {
			dispatch(getUserFailure(err));
		});
};
