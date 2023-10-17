import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../redux/profileReducer";
import WithRouter from "../../Common/WithRouter/WithRouter";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.userId = !this.props.params.userId ? this.props.userId : this.props.params.userId
        this.userId = !this.userId ? '13315' : this.userId
        this.props.getProfile(this.userId)
    }

    render() {
        if(this.props.isAuth === false) {
            return <Navigate to={"/login"} />
        }

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
    isAuth: state.Auth.isAuth
})

let withUrlDataContainerComponent = WithRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent)