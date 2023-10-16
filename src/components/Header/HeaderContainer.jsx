import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";
import {accountAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        accountAPI.my().then( data => {
            if(data.resultCode === 0){
                let {id, email, login} = data.data
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