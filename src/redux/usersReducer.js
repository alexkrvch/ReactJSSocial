const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    UsersList: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                UsersList: state.UsersList.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                UsersList: state.UsersList.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
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
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (data) => ({type: SET_USERS, data})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})

export default usersReducer