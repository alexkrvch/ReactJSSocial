import {followAPI, usersAPI} from "../api/api.ts";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHANGE_FETCHING = 'CHANGE_FETCHING';
const START_FOLLOWING = 'START_FOLLOWING';
const STOP_FOLLOWING = 'STOP_FOLLOWING';

type initialStateType = {
    UsersList: [];
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

const usersReducer = (state:initialStateType = initialState, action:any):initialStateType => {
    switch (action.type){
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                UsersList: updateObjectInArray(state.UsersList, action.userId, 'id', {followed: action.status})
            }
        case SET_USERS:
            return {
                ...state,
                UsersList: action.data.items,
                totalCount: action.data.totalCount
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

export const followUnfollow = (userId:number, status:boolean):{type: typeof FOLLOW_UNFOLLOW, userId: number, status:boolean} => ({type: FOLLOW_UNFOLLOW, userId, status})
export const setUsers = (data:any):{type: typeof SET_USERS, data:any} => ({type: SET_USERS, data})
export const setCurrentPage = (page:number):{type: typeof SET_CURRENT_PAGE, page: number} => ({type: SET_CURRENT_PAGE, page})
export const changeIsFetching = (state:boolean):{type: typeof CHANGE_FETCHING, state: boolean} => ({type: CHANGE_FETCHING, state})
export const startFollowing = (id:number):{type: typeof START_FOLLOWING, id: number} => ({type: START_FOLLOWING, id})
export const stopFollowing = (id:number):{type: typeof STOP_FOLLOWING, id: number} => ({type: STOP_FOLLOWING, id})


export const requestUsers = (currentPage:number, pageSize:number) => async (dispatch:Function):Promise<void> => {
    dispatch(changeIsFetching(true));
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(changeIsFetching(false))
    dispatch(setUsers(response))
    dispatch(setCurrentPage(currentPage))
}

export const followUnfollowFlow = async (dispatch:Function, userId:number, apiMethod:any, status:boolean) => {
    dispatch(startFollowing(userId))
    const response = await apiMethod(userId)
    dispatch(stopFollowing(userId))
    if(response.resultCode===0) {
        dispatch(followUnfollow(userId, status))
    }
}


export const followUser = (userId:number) => async (dispatch:Function):Promise<void> => {
    await followUnfollowFlow(dispatch, userId, followAPI.follow.bind(usersAPI), true)
}


export const unFollowUser = (userId:number) => async (dispatch:Function):Promise<void> => {
    await followUnfollowFlow(dispatch, userId, followAPI.unFollow.bind(usersAPI), false)
}


export default usersReducer