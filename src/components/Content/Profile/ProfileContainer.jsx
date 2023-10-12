import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPost, setUserProfile, updateNewPostText} from "../../../redux/profileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then( data => {
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)