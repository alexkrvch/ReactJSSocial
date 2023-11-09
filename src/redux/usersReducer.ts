import {followAPI} from "../api/follow-api";
import {usersAPI} from "../api/users-api"
import {updateObjectInArray} from "../utils/object-helpers";
import {userType} from "@/types/types.ts";
import {AppStateType, InferActionsTypes} from "@/redux/redux-store.ts";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {ResponseType} from "@/api/api.ts";
import * as stream from "stream";

export type initialStateType = {
    UsersList: userType[];
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    partSize: number;
    followingInProgress: number[];
    filter: {
        term: string
    }
}

let initialState:initialStateType = {
    UsersList: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    partSize: 20,
    followingInProgress: [],
    filter: {
        term: ''
    }
}

const usersReducer = (state:initialStateType = initialState, action:ActionsTypes):initialStateType => {
    switch (action.type){
        case 'users/FOLLOW_UNFOLLOW':
            return {
                ...state,
                UsersList: updateObjectInArray(state.UsersList, action.userId, 'id', {followed: action.status})
            }
        case 'users/SET_USERS':
            return {
                ...state,
                UsersList: action.users,
                totalCount: action.totalCount
            }
        case 'users/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        case 'users/CHANGE_FETCHING':
            return {
                ...state,
                isFetching: action.state
            }
        case 'users/START_FOLLOWING': {
            return {
                ...state,
                followingInProgress: [...state.followingInProgress, action.id]
            }
        }
        case 'users/STOP_FOLLOWING': {
            return {
                ...state,
                followingInProgress: state.followingInProgress.filter(id => id!==action.id)
            }
        }
        case 'users/SET_FILTER': {
            return {
                ...state,
                filter: action.payload
            }
        }
        default:
            return state
    }
}




export const actions = {
    followUnfollow: (userId:number, status:boolean) => ({type: 'users/FOLLOW_UNFOLLOW', userId, status} as const),
    setUsers: (users:userType[], totalCount:number) => ({type: 'users/SET_USERS', users, totalCount} as const),
    setCurrentPage: (page:number) => ({type: 'users/SET_CURRENT_PAGE', page} as const),
    changeIsFetching: (state:boolean) => ({type: 'users/CHANGE_FETCHING', state} as const),
    startFollowing: (id:number) => ({type: 'users/START_FOLLOWING', id} as const),
    stopFollowing: (id:number) => ({type: 'users/STOP_FOLLOWING', id} as const),
    setFilter: (term: string) => ({type: 'users/SET_FILTER', payload: { term } } as const)
}


export const requestUsers = (currentPage:number, pageSize:number, term: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.changeIsFetching(true));
        dispatch(actions.setCurrentPage(currentPage))
        dispatch(actions.setFilter(term));
        const response = await usersAPI.getUsers(currentPage, pageSize, term)
        dispatch(actions.changeIsFetching(false))
        dispatch(actions.setUsers(response.items, response.totalCount))
    }
}

export const followUnfollowFlow = async (dispatch:DispatchType, userId:number, apiMethod: (userId: number) => Promise<ResponseType>, status:boolean) => {
    dispatch(actions.startFollowing(userId))
    const response = await apiMethod(userId)
    if(response.resultCode===0) {
        dispatch(actions.followUnfollow(userId, status))
    }
    dispatch(actions.stopFollowing(userId))
}


export const followUser = (userId:number):ThunkType => async (dispatch):Promise<void> => {
    await followUnfollowFlow(dispatch, userId, followAPI.follow.bind(usersAPI), true)
}


export const unFollowUser = (userId:number):ThunkType => async (dispatch):Promise<void> => {
    await followUnfollowFlow(dispatch, userId, followAPI.unFollow.bind(usersAPI), false)
}


export default usersReducer

type ActionsTypes = InferActionsTypes<typeof actions>
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, null, ActionsTypes>

export type FilterType = typeof initialState.filter