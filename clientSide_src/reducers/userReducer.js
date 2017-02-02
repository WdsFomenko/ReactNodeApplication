import {
	USER_LOG_OUT,
	GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAILURE
} from '../constants/User'

const initialState = {
	user: {
		name: 'Гость',
		surname: '',
		email: 'example@guest.mail',
		phone: '',
		token: '',
		permit: 100
	}
};

export default function user(state = initialState, action) {
	switch (action.type) {
		case USER_LOG_OUT:
			location.hash = '#/login';
			return {...state, initialState};
		case GET_USER_REQUEST:
			console.log('Request action...');
			return state;
		case GET_USER_SUCCESS:
			console.log('Request action success...');
			return state;
		case GET_USER_FAILURE:
			console.log('Request action failure...');
			return state;
		default:
			return state;
	}
}