import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {userType} from "@/redux/types.ts";
import {AppStateType} from "@/redux/redux-store.ts";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHANGE_FETCHING = 'CHANGE_FETCHING';
const START_FOLLOWING = 'START_FOLLOWING';
const STOP_FOLLOWING = 'STOP_FOLLOWING';



type initialStateType = {
    UsersList: userType[];
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    partSize: number;
    followingInProgress: number[];
}

let initialState:initialStateType = {
    UsersList: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    partSize: 20,
    followingInProgress: []
}

const usersReducer = (state:initialStateType = initialState, action:ActionsTypes):initialStateType => {
    switch (action.type){
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                UsersList: updateObjectInArray(state.UsersList, action.userId, 'id', {followed: action.status})
            }
        case SET_USERS:
            return {
                ...state,
                UsersList: action.users,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case CHANGE_FETCHING:
            return {
                ...state,
                isFetching: action.state
            }
        case START_FOLLOWING: {
            return {
                ...state,
                followingInProgress: [...state.followingInProgress, action.id]
            }
        }
        case STOP_FOLLOWING: {
            return {
                ...state,
                followingInProgress: state.followingInProgress.filter(id => id!==action.id)
            }
        }
        default:
            return state
    }
}

type ActionsTypes  = followUnfollowType | setUsersType | setCurrentPage |
    changeIsFetchingType | startFollowingType |stopFollowingType;

type followUnfollowType = {type: typeof FOLLOW_UNFOLLOW, userId: number, status:boolean}
type setUsersType = {type: typeof SET_USERS, users:userType[], totalCount: number}
type setCurrentPage = {type: typeof SET_CURRENT_PAGE, page: number}
type changeIsFetchingType = {type: typeof CHANGE_FETCHING, state: boolean}
type startFollowingType = {type: typeof START_FOLLOWING, id: number}
type stopFollowingType = {type: typeof STOP_FOLLOWING, id: number}
export const followUnfollow = (userId:number, status:boolean):followUnfollowType => ({type: FOLLOW_UNFOLLOW, userId, status})
export const setUsers = (users:userType[], totalCount:number):setUsersType => ({type: SET_USERS, users, totalCount})
export const setCurrentPage = (page:number):setCurrentPage => ({type: SET_CURRENT_PAGE, page})
export const changeIsFetching = (state:boolean):changeIsFetchingType => ({type: CHANGE_FETCHING, state})
export const startFollowing = (id:number):startFollowingType => ({type: START_FOLLOWING, id})
export const stopFollowing = (id:number):stopFollowingType => ({type: STOP_FOLLOWING, id})

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, null, ActionsTypes>

export const requestUsers = (currentPage:number, pageSize:number): ThunkType => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(changeIsFetching(true));
        const response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(changeIsFetching(false))
        dispatch(setUsers(response.items, response.totalCount))
        dispatch(setCurrentPage(currentPage))
    }
}

export const followUnfollowFlow = async (dispatch:DispatchType, userId:number, apiMethod:any, status:boolean) => {
    dispatch(startFollowing(userId))
    const response = await apiMethod(userId)
    dispatch(stopFollowing(userId))
    if(response.resultCode===0) {
        dispatch(followUnfollow(userId, status))
    }
}


export const followUser = (userId:number):ThunkType => async (dispatch):Promise<void> => {
    await followUnfollowFlow(dispatch, userId, followAPI.follow.bind(usersAPI), true)
}


export const unFollowUser = (userId:number):ThunkType => async (dispatch):Promise<void> => {
    await followUnfollowFlow(dispatch, userId, followAPI.unFollow.bind(usersAPI), false)
}


export default usersReducer