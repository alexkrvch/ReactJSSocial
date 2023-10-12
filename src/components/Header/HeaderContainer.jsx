import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then( data => {
            if(data.data.resultCode === 0){
                let {id, email, login} = data.data.data
                this.props.setUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    login: state.Auth.login,
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer)