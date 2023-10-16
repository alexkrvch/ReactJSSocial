import {connect} from "react-redux";
import {changeIsFetching, follow, setCurrentPage, setUsers, unFollow} from "../../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY": '9698416d-3981-4d08-944f-5e79cc4c07cc'
            }
        }).then( data => {
            this.props.changeIsFetching(false)
            this.props.setUsers(data.data)
        })
    }

    followServer = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true
        }).then( data => {
            if(data.data.resultCode===0) {
                this.props.follow(id)
            }
        })
    }

    unFollowServer = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": '9698416d-3981-4d08-944f-5e79cc4c07cc'
            }
        }).then( data => {
            if(data.data.resultCode===0) {
                this.props.unFollow(id)
            }
        })
    }

    onChangePage = (p) => {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,{
            withCredentials: true,
            headers: {
                "API-KEY": '9698416d-3981-4d08-944f-5e79cc4c07cc'
            }
        }).then( data => {
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