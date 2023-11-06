import {ResultCodesEnum} from "../api/api";
import {accountAPI, ResultCodeForCaptcha} from "../api/account-api";
import {securityAPI} from "../api/secure-api"
import {stopSubmit} from "redux-form";
import {AppStateType} from "@/redux/redux-store";
import {ThunkAction} from "redux-thunk";

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

const authReducer = (state: initialStateType = initialState, action:ActionsTypes):initialStateType  => {
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

// @ts-ignore
type ActionsTypes  = SetUserDataType | SetCaptchaType | stopSubmit;


type SetUserPayloadType = {userId: number | null, email: string | null, login: string | null, isAuth: boolean};
type SetUserDataType = {type: typeof SET_USER_DATA, payload: SetUserPayloadType};
type SetCaptchaType = {type: typeof SET_CAPTCHA, url: string}
export const setUserData = (userId: null | number, email: null | string, login: null | string, isAuth: boolean):SetUserDataType => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const setCaptcha = (url:string):SetCaptchaType => ({type: SET_CAPTCHA, url})

type ThunkType = ThunkAction<Promise<void>, AppStateType, null, ActionsTypes>

export const auth = () => async (dispatch:any):Promise<void> => {
    let response = await accountAPI.my()
    if(response.resultCode === ResultCodesEnum.Success){
        let {id, email, login} = response.data
        dispatch(setUserData(id, email, login, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha:string):ThunkType => async (dispatch) => {
    let response = await accountAPI.login(email, password, rememberMe, captcha)

    if(response.resultCode === ResultCodesEnum.Success){
        dispatch(auth())
    }else{
        if(response.resultCode === ResultCodeForCaptcha.Captcha) {
            let captcha = await securityAPI.getCaptcha()
            dispatch(setCaptcha(captcha.url));
        }
        dispatch(stopSubmit('login', {_error: response.messages}))
    }
}


export const logout = ():ThunkType => async (dispatch)=> {
    let response = await accountAPI.logout()
    if(response.resultCode === 0){
        dispatch(setUserData(null, null, null, false))
    }
}


export default authReducer