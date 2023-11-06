import {followAPI} from "../api/follow-api";
import {usersAPI} from "../api/users-api"
import {updateObjectInArray} from "../utils/object-helpers";
import {userType} from "@/types/types.ts";
import {AppStateType, InferActionsTypes} from "@/redux/redux-store.ts";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

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
        case 'FOLLOW_UNFOLLOW':
            return {
                ...state,
                UsersList: updateObjectInArray(state.UsersList, action.userId, 'id', {followed: action.status})
            }
        case 'SET_USERS':
            return {
                ...state,
                UsersList: action.users,
                totalCount: action.totalCount
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        case 'CHANGE_FETCHING':
            return {
                ...state,
                isFetching: action.state
            }
        case 'START_FOLLOWING': {
            return {
                ...state,
                followingInProgress: [...state.followingInProgress, action.id]
            }
        }
        case 'STOP_FOLLOWING': {
            return {
                ...state,
                followingInProgress: state.followingInProgress.filter(id => id!==action.id)
            }
        }
        default:
            return state
    }
}


type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    followUnfollow: (userId:number, status:boolean) => ({type: 'FOLLOW_UNFOLLOW', userId, status} as const),
    setUsers: (users:userType[], totalCount:number) => ({type: 'SET_USERS', users, totalCount} as const),
    setCurrentPage: (page:number) => ({type: 'SET_CURRENT_PAGE', page} as const),
    changeIsFetching: (state:boolean) => ({type: 'CHANGE_FETCHING', state} as const),
    startFollowing: (id:number) => ({type: 'START_FOLLOWING', id} as const),
    stopFollowing: (id:number) => ({type: 'STOP_FOLLOWING', id} as const),
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, null, ActionsTypes>

export const requestUsers = (currentPage:number, pageSize:number): ThunkType => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(actions.changeIsFetching(true));
        const response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(actions.changeIsFetching(false))
        dispatch(actions.setUsers(response.items, response.totalCount))
        dispatch(actions.setCurrentPage(currentPage))
    }
}

export const followUnfollowFlow = async (dispatch:DispatchType, userId:number, apiMethod:any, status:boolean) => {
    dispatch(actions.startFollowing(userId))
    const response = await apiMethod(userId)
    dispatch(actions.stopFollowing(userId))
    if(response.resultCode===0) {
        dispatch(actions.followUnfollow(userId, status))
    }
}


export const followUser = (userId:number):ThunkType => async (dispatch):Promise<void> => {
    await followUnfollowFlow(dispatch, userId, followAPI.follow.bind(usersAPI), true)
}


export const unFollowUser = (userId:number):ThunkType => async (dispatch):Promise<void> => {
    await followUnfollowFlow(dispatch, userId, followAPI.unFollow.bind(usersAPI), false)
}


export default usersReducer