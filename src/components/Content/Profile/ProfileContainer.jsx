import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, setProfileStatus} from "../../../redux/profileReducer";
import WithRouter from "../../Common/WithRouter/WithRouter";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.userId = !this.props.params.userId ? this.props.userId : this.props.params.userId
        if(this.userId){
            this.props.getProfile(this.userId)
            this.props.getProfileStatus(this.userId)
        }
    }

    render() {
        if(!this.props.isAuth){return <Navigate to={"/login"} />}
        return (
            <div>
                <Profile {...this.props} userId={this.userId} />
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
    connect(mapStateToProps, {getProfile, getProfileStatus, setProfileStatus}),
    withAuthRedirect,
    WithRouter
)(ProfileContainer)