import {connect} from "react-redux";
import {followUser, requestUsers, unFollowUser} from "../../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../../redux/usersSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    follow = (id) => {
        this.props.followUser(id)
    }

    unFollow = (id) => {
        this.props.unFollowUser(id)
    }

    onChangePage = (p) => {
        this.props.requestUsers(p, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
}

export default compose(
    connect(mapStateToProps, {requestUsers, unFollowUser, followUser})
)(UsersContainer);