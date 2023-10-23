export const getUsers = (state) => {
    return state.Users.UsersList
}

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