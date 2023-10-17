import {connect} from "react-redux";
import {
    followUser, getUsers,unFollowUser
} from "../../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    follow = (id) => {
        this.props.followUser(id)
    }

    unFollow = (id) => {
        this.props.unFollowUser(id)
    }

    onChangePage = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }

    render = () => {
        return (<>
            { this.props.isFetching ? <Preloader /> : <Users
                isFollowing={this.props.isFollowing}
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                follow={this.follow}
                unFollow={this.unFollow}
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
        isFetching: state.Users.isFetching,
        isFollowing: state.Users.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, unFollowUser, followUser}),
    withAuthRedirect
)(UsersContainer);