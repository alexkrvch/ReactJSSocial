import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {auth, setUserData} from "../../redux/authReducer";
import {accountAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.auth()
    }

    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    login: state.Auth.login,
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {auth})(HeaderContainer)