import {profileAPI} from "../api/profile-api";
import {stopSubmit} from "redux-form";
import {photosType, postDataType, profileType} from "@/types/types.ts";
import {ResultCodesEnum} from "../api/api";
import {CommonThunkType, InferActionsTypes} from "@/redux/redux-store.ts";

type initialStateType = {
    PostData: postDataType[];
    profile: null | profileType;
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

const profileReducer = (state:initialStateType = initialState, action:ActionsTypes):initialStateType => {
    switch (action.type){
        case 'profile/ADD-POST':
            let today = new Date().toLocaleDateString('en-GB');
            return {
                ...state,
                PostData: [...state.PostData, {id: 5, header: 'Def header', text: action.newPostText, countLikes: 0, date: today}],
            };
        case 'profile/DELETE_POST':
            return {
                ...state,
                PostData: state.PostData.filter(p => p.id !== action.id)
            }
        case 'profile/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'profile/SET_USER_ID':
            return {
                ...state,
                profileId: action.id
            }
        case 'profile/SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'profile/SET_PHOTO':
            return {
                ...state,
                // @ts-ignore
                profile: {...state.profile, photos: action.photos}
            }
        case 'profile/PROFILE_UPDATE_STATUS':
            return {
                ...state,
                profileUpdateStatus: action.status
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    addPost: (newPostText:string) => ({type: 'profile/ADD-POST', newPostText} as const),
    setUserProfile: (profile:profileType | null) => ({type: 'profile/SET_USER_PROFILE', profile} as const),
    setUserId: (id:number) => ({type: 'profile/SET_USER_ID', id} as const),
    setStatus: (status:string) => ({ type: 'profile/SET_STATUS', status} as const),
    deletePost: (id:number) => ({ type: 'profile/DELETE_POST', id } as const),
    savePhotoSuccess: (photos:photosType) => ({ type: 'profile/SET_PHOTO', photos } as const),
    profileUpdateStatus: (status:number) => ({ type: 'profile/PROFILE_UPDATE_STATUS', status} as const)
}


export const getProfile = (userId:number):ThunkType => async (dispatch) => {
    dispatch(actions.setUserId(userId))
    dispatch(actions.setUserProfile(null))
    let response = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(response))
}


export const getProfileStatus = (userId:number):ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(response))
}


export const setProfileStatus = (status:string):ThunkType => async (dispatch) => {
    try {
        let response = await profileAPI.setProfileStatus(status)
        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setStatus(status))
        }
    }catch(error) {
        console.log(error)
    }
}

export const savePhoto = (photo:string):ThunkType => async (dispatch) => {
    let response = await profileAPI.setPhoto(photo)
    if(response.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(response.data.photos))
    }
}

export const saveProfile = (data: profileType, userId:number):ThunkTypeWithSubmit => async (dispatch) => {
    dispatch(actions.profileUpdateStatus(0));
    let response = await profileAPI.saveProfile(data)
    if(response.resultCode === ResultCodesEnum.Success) {
        let responseProfile = await profileAPI.getProfile(userId)
        dispatch(actions.setUserProfile(responseProfile))
        dispatch(actions.profileUpdateStatus(1));
    }else{
        dispatch(stopSubmit('profile', {_error: response.messages}))
        dispatch(actions.profileUpdateStatus(2));
    }
}

export default profileReducer

type ThunkType = CommonThunkType<ActionsTypes>;
type ThunkTypeWithSubmit = CommonThunkType<ActionsTypes | ReturnType <typeof stopSubmit>>;