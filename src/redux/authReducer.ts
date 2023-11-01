import {accountAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA = 'security/SET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null,
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.url
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}})
export const setCaptcha = (url) => ({type: SET_CAPTCHA, url})

export const auth = () => async (dispatch) => {
    let response = await accountAPI.my()
    if(response.resultCode === 0){
        let {id, email, login} = response.data
        dispatch(setUserData(id, email, login, true))
    }
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await accountAPI.login(email, password, rememberMe, captcha)
    if(response.resultCode === 0){
        dispatch(auth())
    }else{
        if(response.resultCode === 10) {
            let captcha = await securityAPI.getCaptcha()
            dispatch(setCaptcha(captcha.url));
        }
        dispatch(stopSubmit('login', {_error: response.messages}))
    }
}


export const logout = () => async (dispatch) => {
    let response = await accountAPI.logout()
    if(response.resultCode === 0){
        dispatch(setUserData(null, null, null, false))
    }
}


export default authReducer