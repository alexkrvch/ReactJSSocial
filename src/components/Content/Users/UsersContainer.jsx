import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.Users.UsersList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;