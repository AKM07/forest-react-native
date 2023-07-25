import { client } from '../../utils/ApiUtils';
import { LOGIN_SUCCESS, TOGGLE_LOGIN } from '../Constants'
import { setIsLoggedIn, getLoginSuccess } from '../reducers/login'
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    user: {},
    isLoggedIn: false,
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.data,
            };
        case TOGGLE_LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload,
            };

        default:
            return state;
    }
}

//example Login User
export const login = (user: any) => (dispatch : any) =>
  new Promise(function (resolve, reject) {
    client
      .post(`/login`, user)
      .then((res) => {
        if (res.status === 0) {
          AsyncStorage.setItem("userToken", "");
          AsyncStorage.setItem("userId", res.data.id.toString());
          dispatch(getLoginSuccess(res));
        }
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

    
