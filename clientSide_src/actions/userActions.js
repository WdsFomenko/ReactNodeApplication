import {
	USER_LOG_OUT,
	GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAILURE
} from '../constants/User'

export function logOut() {
	return {
		type: USER_LOG_OUT,
		payload: ''
	}
}

export function checkLog(data) {
	return (dispatch) => {
		dispatch({
			type: GET_USER_REQUEST
		});

		let options = {method: 'POST', body: data};

		fetch("/api/1.0/users", options)
			.then(function (response) {
				let result = response.status == '200' ? {
						type: GET_USER_SUCCESS,
						payload: response.user
					} : {
						type: GET_USER_FAILURE,
						payload: ''
					};
				dispatch(result)
			})
			.catch(function () {
				dispatch({
					type: GET_USER_FAILURE,
					payload: ''
				})
			});
	}
}