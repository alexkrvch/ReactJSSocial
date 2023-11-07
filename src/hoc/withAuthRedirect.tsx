import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "@/redux/redux-store.ts";

let mapStateToPropsRed = (state:AppStateType):MapPropsType => ({
    isAuth: state.Auth.isAuth
})

type MapPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<WCP>(Component:React.ComponentType<WCP>) {
    function RedirectComponent(props:MapPropsType) {
        let {isAuth, ...restProps} = props;
        if(!props.isAuth) { return <Navigate to={"/login"} />}
        return <Component {...restProps as unknown as WCP} />
    }

    return connect<mapStateToPropsRed, {}, WCP, AppStateType>(mapStateToPropsRed, {})(RedirectComponent);
}
