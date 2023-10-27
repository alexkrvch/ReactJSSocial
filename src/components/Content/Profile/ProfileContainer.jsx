import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, savePhoto, setProfileStatus} from "../../../redux/profileReducer";
import WithRouter from "../../Common/WithRouter/WithRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {

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

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.currentID = !this.props.params.userId ? this.props.userId : this.props.params.userId;
        this.oldID = !prevProps.params.userId ? prevProps.userId : prevProps.params.userId;
        if(this.currentID!==this.oldID){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} userId={this.userId} owner={!this.props.params.userId} savePhoto={this.props.savePhoto} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    userId: state.Auth.userId,
    isAuth: state.Auth.isAuth,
    status: state.ProfilePage.status
})

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, setProfileStatus, savePhoto}),
    WithRouter
)(ProfileContainer)