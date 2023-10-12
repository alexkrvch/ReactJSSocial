import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserId, setUserProfile} from "../../../redux/profileReducer";
import WithRouter from "../../Common/WithRouter/WithRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = !this.props.params.userId ? 2 : this.props.params.userId
        this.props.setUserId(userId)
        this.props.setUserProfile(null);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then( data => {
            this.props.setUserProfile(data.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
})

let withUrlDataContainerComponent = WithRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, setUserId})(withUrlDataContainerComponent)