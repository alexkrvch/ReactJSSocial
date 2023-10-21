import {accountAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}})

export const auth = () => {
    return (dispatch) => {
        return accountAPI.my().then( data => {
            if(data.resultCode === 0){
                let {id, email, login} = data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        accountAPI.login(email, password, rememberMe).then( data => {
            if(data.resultCode === 0){
                dispatch(auth())
            }else{
                dispatch(stopSubmit('login', {_error: data.messages}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        accountAPI.logout().then( data => {
            if(data.resultCode === 0){
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer