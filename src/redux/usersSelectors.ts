import {createSelector} from "reselect";
import {AppStateType} from "@/redux/redux-store";

const getUsersSelector = (state: AppStateType) => {
    return state.Users.UsersList
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.Users.pageSize
}

export const getTotalCount = (state: AppStateType) => {
    return state.Users.totalCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.Users.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.Users.isFetching
}

export const getIsFollowing = (state: AppStateType) => {
    return state.Users.followingInProgress
}

export const getPartSize = (state: AppStateType) => {
    return state.Users.partSize
}