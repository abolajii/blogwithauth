import {
	GET_USER,
	GET_USER_FAILURE,
	GET_USER_SUCCESS,
} from '../constant/constant';

const initialState = {
	error: '',
	user: null,
	loading: true,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				loading: true,
			};

		case GET_USER_SUCCESS:
			return { user: action.payload, loading: false };
		case GET_USER_FAILURE:
			return { error: action.payload, loading: false };
		default:
			return state;
	}
};
export default userReducer;
