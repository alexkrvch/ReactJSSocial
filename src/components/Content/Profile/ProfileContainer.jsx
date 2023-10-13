import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserId, setUserProfile} from "../../../redux/profileReducer";
import WithRouter from "../../Common/WithRouter/WithRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.userId = !this.props.params.userId ? this.props.userId : this.props.params.userId
        this.userId = !this.userId ? '13315' : this.userId
        this.props.setUserId(this.userId)
        this.props.setUserProfile(null);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.userId}`).then( data => {
            this.props.setUserProfile(data.data)
        })
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

let withUrlDataContainerComponent = WithRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, setUserId})(withUrlDataContainerComponent)