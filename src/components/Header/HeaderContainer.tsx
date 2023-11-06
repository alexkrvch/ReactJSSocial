import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "@/redux/redux-store";

const HeaderContainer:React.FC<MapDispatchPropsType & MapStatePropsType> = ({login, isAuth, logout}) => {
    return <Header login={login} isAuth={isAuth} logout={logout} />
}

type MapStatePropsType = {
    login: string | null,
    isAuth: boolean
}

type MapDispatchPropsType = {
    logout: () => void
}

const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    login: state.Auth.login,
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {logout})(HeaderContainer)