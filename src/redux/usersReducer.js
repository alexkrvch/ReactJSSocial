import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHANGE_FETCHING = 'CHANGE_FETCHING';
const START_FOLLOWING = 'START_FOLLOWING';
const STOP_FOLLOWING = 'STOP_FOLLOWING';

let initialState = {
    UsersList: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    partSize: 20,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
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

export const followUnfollow = (userId, status) => ({type: FOLLOW_UNFOLLOW, userId, status})
export const setUsers = (data) => ({type: SET_USERS, data})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const changeIsFetching = (state) => ({type: CHANGE_FETCHING, state})
export const startFollowing = (id) => ({type: START_FOLLOWING, id})
export const stopFollowing = (id) => ({type: STOP_FOLLOWING, id})


export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(changeIsFetching(true));
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(changeIsFetching(false))
    dispatch(setUsers(response))
    dispatch(setCurrentPage(currentPage))
}

export const followUnfollowFlow = async (dispatch, userId, apiMethod, status) => {
    dispatch(startFollowing(userId))
    const response = await apiMethod(userId)
    dispatch(stopFollowing(userId))
    if(response.resultCode===0) {
        dispatch(followUnfollow(userId, status))
    }
}


export const followUser = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, followAPI.follow.bind(usersAPI), true)
}


export const unFollowUser = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, followAPI.unFollow.bind(usersAPI), false)
}


export default usersReducer