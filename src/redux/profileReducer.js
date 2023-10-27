import {profileAPI, usersAPI} from "../api/api";
import user from "../components/Content/Users/User/User";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_ID = 'profile/SET_USER_ID';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SET_PHOTO = 'profile/SET_PHOTO';

let initialState = {
    PostData: [
        {id: 1, header: 'First post', text: 'Nullam euismod,1 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 3, date: '09 September 2023'},
        {id: 2, header: 'Second post', text: 'Nullam euismod,2 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 5, date: '02 September 2023'},
        {id: 3, header: 'Next post', text: 'Nullam euismod,3 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 12, date: '28 August 2023'},
        {id: 4, header: 'New post', text: 'Nullam euismod,4 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 2, date: '21 August 2023'},
    ],
    profile: null,
    profileId: 1,
    status: ''
}

const profileReducer = (state = initialState, action) => {
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

export const getProfile = (userId) => async (dispatch) => {
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
    let response = await profileAPI.setProfileStatus(status)
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.setPhoto(photo)
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (data, userId) => async (dispatch) => {
    let response = await profileAPI.saveProfile(data)
    if(response.data.resultCode === 0) {
        let responseProfile = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(responseProfile))
        return 0;
    }else{
        dispatch(stopSubmit('profile', {_error: response.data.messages}))
        return 1;
    }
}

export default profileReducer