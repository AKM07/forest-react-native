import { LOGIN_SUCCESS, TOGGLE_LOGIN } from '../Constants'

//Set isLoggedIn state value
export const setIsLoggedIn = (value: any) => (dispatch: any) => {
    dispatch(toggleIsLoggedIn(value));
};

export const getLoginSuccess = (data: any) => ({
    type: LOGIN_SUCCESS,
    payload: data,
});

//Set isLoggedIn state value
const toggleIsLoggedIn = (value: any) => ({
    type: TOGGLE_LOGIN,
    payload: value,
});