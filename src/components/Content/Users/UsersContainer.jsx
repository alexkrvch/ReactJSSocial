import {connect} from "react-redux";
import {changeIsFetching, follow, setCurrentPage, setUsers, unFollow} from "../../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( data => {
            this.props.changeIsFetching(false)
            this.props.setUsers(data.data)
        })
    }

    onChangePage = (p) => {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then( data => {
            this.props.changeIsFetching(false)
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

export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, changeIsFetching})(UsersContainer);