import axios from "axios";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_ID = 'SET_USER_ID';

let initialState = {
    PostData: [
        {id: 1, header: 'First post', text: 'Nullam euismod,1 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 3, date: '09 September 2023'},
        {id: 2, header: 'Second post', text: 'Nullam euismod,2 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 5, date: '02 September 2023'},
        {id: 3, header: 'Next post', text: 'Nullam euismod,3 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 12, date: '28 August 2023'},
        {id: 4, header: 'New post', text: 'Nullam euismod,4 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 2, date: '21 August 2023'},
    ],
    profile: null,
    profileId: 1,
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let today = new Date().toLocaleDateString('en-GB');
            return {
                ...state,
                PostData: [...state.PostData, {id: 5, header: 'Def header', text: state.newPostText, countLikes: 0, date: today}],
                newPostText: ''
            };
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
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
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: CHANGE_NEW_POST_TEXT, text: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserId = (id) => ({type: SET_USER_ID, id})

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(setUserId(userId))
        dispatch(setUserProfile(null))
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then( data => {
            dispatch(setUserProfile(data.data))
        })
    }
}
export default profileReducer