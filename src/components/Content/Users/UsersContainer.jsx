import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC} from "../../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.Users.UsersList,
        pageSize: state.Users.pageSize,
        totalCount: state.Users.totalCount,
        currentPage: state.Users.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (page) => { dispatch(setCurrentPageAC(page)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;