import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_ID = 'profile/SET_USER_ID';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SET_PHOTO = 'profile/SET_PHOTO';
const PROFILE_UPDATE_STATUS = 'profile/PROFILE_UPDATE_STATUS'

type initialStateType = {
    PostData: {
        id: number;
        header: string;
        text: string;
        countLikes: number;
        date: string;
    }[];
    profile: {
        id: number;
        name: string;
        age: number;
        city: string;
        status: string;
        avatar: string;
    } | null;
    profileId: number;
    status: string;
    profileUpdateStatus: number;
}

let initialState:initialStateType = {
    PostData: [
        {id: 1, header: 'First post', text: 'Nullam euismod,1 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 3, date: '09 September 2023'},
        {id: 2, header: 'Second post', text: 'Nullam euismod,2 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 5, date: '02 September 2023'},
        {id: 3, header: 'Next post', text: 'Nullam euismod,3 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 12, date: '28 August 2023'},
        {id: 4, header: 'New post', text: 'Nullam euismod,4 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 2, date: '21 August 2023'},
    ],
    profile: null,
    profileId: 1,
    status: '',
    profileUpdateStatus: 0
}

const profileReducer = (state:initialStateType = initialState, action):initialStateType => {
    switch (action.type){
        case ADD_POST:
            let today = new Date().toLocaleDateString('en-GB');
            return {
                ...state,
                PostData: [...state.PostData, {id: 5, header: 'Def header', text: action.newPostText, countLikes: 0, date: today}],
            };
        case DELETE_POST:
            return {
                ...state,
                PostData: state.PostData.filter(p => p.id !== action.id)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_ID:
            return {
                ...state,
                profileId: action.id
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case PROFILE_UPDATE_STATUS:
            return {
                ...state,
                profileUpdateStatus: action.status
            }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserId = (id) => ({type: SET_USER_ID, id})
export const setStatus = (status) => ({ type: SET_STATUS, status})
export const deletePost = (id) => ({ type: DELETE_POST, id })
export const savePhotoSuccess = (photos) => ({ type: SET_PHOTO, photos })
export const profileUpdateStatus = (status) => ({ type: PROFILE_UPDATE_STATUS, status})

export const getProfile = (userId:number) => async (dispatch:Function):Promise<void> => {
    dispatch(setUserId(userId))
    dispatch(setUserProfile(null))
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}


export const getProfileStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}


export const setProfileStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.setProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }catch(error) {
        console.log(error)
    }
}

export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.setPhoto(photo)
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (data, userId) => async (dispatch) => {
    dispatch(profileUpdateStatus(0));
    let response = await profileAPI.saveProfile(data)
    if(response.data.resultCode === 0) {
        let responseProfile = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(responseProfile))
        dispatch(profileUpdateStatus(1));
    }else{
        dispatch(stopSubmit('profile', {_error: response.data.messages}))
        dispatch(profileUpdateStatus(2));
    }
}

export default profileReducer