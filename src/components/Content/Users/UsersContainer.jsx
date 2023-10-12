import {connect} from "react-redux";
import {changeIsFetchingAC, followAC, setCurrentPageAC, setUsersAC, unFollowAC} from "../../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.changeFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( data => {
            this.props.changeFetching(false)
            this.props.setUsers(data.data)
        })
    }

    onChangePage = (p) => {
        this.props.changeFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then( data => {
            this.props.changeFetching(false)
            this.props.setUsers(data.data)
        })
        this.props.setCurrentPage(p)
    }

    render = () => {
        return (<>
            { this.props.isFetching ? <Preloader /> : <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                currentPage={this.props.currentPage}
                onChangePage={this.onChangePage} />}</>)
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.Users.UsersList,
        pageSize: state.Users.pageSize,
        totalCount: state.Users.totalCount,
        currentPage: state.Users.currentPage,
        isFetching: state.Users.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (page) => { dispatch(setCurrentPageAC(page)) },
        changeFetching: (state) => { dispatch(changeIsFetchingAC(state)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);