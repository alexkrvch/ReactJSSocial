import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../redux/profileReducer";
import WithRouter from "../../Common/WithRouter/WithRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.userId = !this.props.params.userId ? this.props.userId : this.props.params.userId
        this.userId = !this.userId ? '13315' : this.userId
        this.props.getProfile(this.userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} userId={this.userId} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    userId: state.Auth.userId
})

export default compose(
    connect(mapStateToProps, {getProfile}),
    WithRouter
)(ProfileContainer)