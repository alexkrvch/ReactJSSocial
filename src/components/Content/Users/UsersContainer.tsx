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
    getPageSize, getPartSize,
    getTotalCount,
    getUsers
} from "../../../redux/usersSelectors";
import {userType} from "@/types/types.ts";
import {AppStateType} from "@/redux/redux-store.ts";

type MapStatePropsType = {
    users: userType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    isFollowing: number[],
    partSize: number,
}

type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void,
    unFollowUser: (id:number) => void,
    followUser: (id: number) => void
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    follow = (id:number):void => {
        this.props.followUser(id)
    }

    unFollow = (id:number):void => {
        this.props.unFollowUser(id)
    }

    onChangePage = (p:number):void => {
        this.props.requestUsers(p, this.props.pageSize)
    }

    render = () => {
        return (<>
            { this.props.isFetching ? <Preloader /> : <><h2>{this.props.pageTitle}</h2><Users
                isFollowing={this.props.isFollowing}
                users={this.props.users}
                totalCount={this.props.totalCount}
                partSize={this.props.partSize}
                pageSize={this.props.pageSize}
                follow={this.follow}
                unFollow={this.unFollow}
                currentPage={this.props.currentPage}
                onChangePage={this.onChangePage} /></>}</>)
    }
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
        partSize: getPartSize(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {requestUsers, unFollowUser, followUser})
)(UsersContainer);