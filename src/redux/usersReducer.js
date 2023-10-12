const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHANGE_FETCHING = 'CHANGE_FETCHING';

let initialState = {
    UsersList: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
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
        case CHANGE_FETCHING:
            return {
                ...state,
                isFetching: action.state
            }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (data) => ({type: SET_USERS, data})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const changeIsFetching = (state) => ({type: CHANGE_FETCHING, state})

export default usersReducer