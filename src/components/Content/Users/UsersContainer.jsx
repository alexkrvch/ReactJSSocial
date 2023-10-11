import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC} from "../../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( data => {
            this.props.setUsers(data.data)
        })
    }

    onChangePage = (p) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then( data => {
            this.props.setUsers(data.data)
        })
        this.props.setCurrentPage(p)
    }

    render = () => {
        return (<Users
            users={this.props.users}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage} />)
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);