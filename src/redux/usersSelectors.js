import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.Users.UsersList
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.Users.pageSize
}

export const getTotalCount = (state) => {
    return state.Users.totalCount
}

export const getCurrentPage = (state) => {
    return state.Users.currentPage
}

export const getIsFetching = (state) => {
    return state.Users.isFetching
}

export const getIsFollowing = (state) => {
    return state.Users.followingInProgress
}

export const getPartSize = (state) => {
    return state.Users.partSize
}