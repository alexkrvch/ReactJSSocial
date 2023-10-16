import {connect} from "react-redux";
import {changeIsFetching, follow, setCurrentPage, setUsers, unFollow} from "../../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {followAPI, usersAPI} from "../../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.changeIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then( data => {
            this.props.changeIsFetching(false)
            this.props.setUsers(data)
        })
    }

    followServer = (id) => {
        followAPI.follow(id).then( data => {
            if(data.resultCode===0) {
                this.props.follow(id)
            }
        })
    }

    unFollowServer = (id) => {
        followAPI.unFollow(id).then( data => {
            if(data.resultCode===0) {
                this.props.unFollow(id)
            }
        })
    }

    onChangePage = (p) => {
        this.props.changeIsFetching(true)
        usersAPI.getUsers(p, this.props.pageSize).then( data => {
            this.props.changeIsFetching(false)
            this.props.setUsers(data)
        })
        this.props.setCurrentPage(p)
    }

    render = () => {
        return (<>
            { this.props.isFetching ? <Preloader /> : <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                follow={this.followServer}
                unFollow={this.unFollowServer}
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