import {ResultCodesEnum} from "../api/api";
import {accountAPI, ResultCodeForCaptcha} from "../api/account-api";
import {securityAPI} from "../api/secure-api"
import {stopSubmit} from "redux-form";
import {CommonThunkType, InferActionsTypes} from "@/redux/redux-store";


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

const authReducer = (state:initialStateType = initialState, action:ActionsTypes):initialStateType  => {
    switch (action.type){
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            };
        case 'SET_CAPTCHA':
            return {
                ...state,
                captcha: action.url
            }
        default:
            return state;
    }
}

// @ts-ignore


const actions = {
    setUserData: (userId: null | number, email: null | string, login: null | string, isAuth: boolean) => (
        {type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}} as const),
    setCaptcha: (url:string) => ({type: 'SET_CAPTCHA', url} as const)
}

export const auth = ():ThunkType => async (dispatch) => {
    let response = await accountAPI.my()
    if(response.resultCode === ResultCodesEnum.Success){
        let {id, email, login} = response.data
        dispatch(actions.setUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha:string):ThunkTypeWithSubmit => async (dispatch) => {
    let response = await accountAPI.login(email, password, rememberMe, captcha)

    if(response.resultCode === ResultCodesEnum.Success){
        dispatch(auth())
    }else{
        if(response.resultCode === ResultCodeForCaptcha.Captcha) {
            let captcha = await securityAPI.getCaptcha()
            dispatch(actions.setCaptcha(captcha.url));
        }
        dispatch(stopSubmit('login', {_error: response.messages}))
    }
}


export const logout = ():ThunkType => async (dispatch)=> {
    let response = await accountAPI.logout()
    if(response.resultCode === 0){
        dispatch(actions.setUserData(null, null, null, false))
    }
}

export default authReducer

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsTypes>;
type ThunkTypeWithSubmit = CommonThunkType<ActionsTypes | ReturnType <typeof stopSubmit>>;