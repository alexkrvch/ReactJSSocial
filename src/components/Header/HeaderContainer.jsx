import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, logout} from "../../redux/authReducer";

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

export default connect(mapStateToProps, {auth, logout})(HeaderContainer)