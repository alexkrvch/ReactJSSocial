import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getProfileStatus,
    savePhoto,
    saveProfile,
    setProfileStatus
} from "../../../redux/profileReducer";
import WithRouter from "../../Common/WithRouter/WithRouter";
import {compose} from "redux";
import {AppStateType} from "@/redux/redux-store.ts";
import {profileType, PropsForRouter} from "@/types/types.ts";

type MapStatePropsType = {
    profile: profileType,
    userId: number,
    isAuth: boolean,
    status: string,
    profileUpSt: number,
}

type MapDispatchPropsType = {
    getProfile: (userId:number) => void,
    getProfileStatus: (userId:number) => void,
    setProfileStatus: (status: string) => void,
    savePhoto: (photo: string) => void,
    saveProfile: profileType
}


type PropsType = MapStatePropsType & MapDispatchPropsType & PropsForRouter

class ProfileContainer extends React.Component<PropsType> {
    userId: number | undefined
    currentID: number | undefined;
    oldID: number | undefined;

    refreshProfile () {
        this.userId = !this.props.params.userId ? this.props.userId : this.props.params.userId
        if(this.userId){
            this.props.getProfile(this.userId)
            this.props.getProfileStatus(this.userId)
        }else{
            this.props.navigate('/login');
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps:PropsType) {
        this.currentID = !this.props.params.userId ? this.props.userId : this.props.params.userId;
        this.oldID = !prevProps.params.userId ? prevProps.userId : prevProps.params.userId;
        if(this.currentID!==this.oldID){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} userId={this.userId} owner={!this.props.params.userId} savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile} />
            </div>
        )
    }
}

let mapStateToProps = (state:AppStateType) => ({
    profile: state.ProfilePage.profile,
    userId: state.Auth.userId,
    isAuth: state.Auth.isAuth,
    status: state.ProfilePage.status,
    profileUpSt: state.ProfilePage.profileUpdateStatus
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getProfileStatus, setProfileStatus, savePhoto, saveProfile}),
    WithRouter
)(ProfileContainer)