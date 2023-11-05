import {accountAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA = 'security/SET_CAPTCHA';

type initialStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    isFetching: boolean,
    captcha: null | string,
    error: string
}


let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null,
    error: ''
}

const authReducer = (state: initialStateType = initialState, action:any):initialStateType  => {
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


type SetUserPayloadType = {userId: number | null, email: string | null, login: string | null, isAuth: boolean};
type SetUserDataType = {type: typeof SET_USER_DATA, payload: SetUserPayloadType};
type SetCaptchaType = {type: typeof SET_CAPTCHA, url: string}
export const setUserData = (userId: null | number, email: null | string, login: null | string, isAuth: boolean):SetUserDataType => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const setCaptcha = (url:string):SetCaptchaType => ({type: SET_CAPTCHA, url})

export const auth = () => async (dispatch:any):Promise<void> => {
    let response = await accountAPI.my()
    if(response.resultCode === 0){
        let {id, email, login} = response.data
        dispatch(setUserData(id, email, login, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha:string) => async (dispatch:any) :Promise<void> => {
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


export const logout = () => async (dispatch:Function):Promise<void> => {
    let response = await accountAPI.logout()
    if(response.resultCode === 0){
        dispatch(setUserData(null, null, null, false))
    }
}


export default authReducer