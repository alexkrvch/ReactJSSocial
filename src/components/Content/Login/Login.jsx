import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../Common/FormControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";
import {Navigate} from "react-router-dom";
import s from "./Login.module.css"
import React from "react";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={ handleSubmit }>
            {createField('Email', 'email', [required], Input, {type:'text'})}
            {createField('Password', 'password', [required], Input, {type:'password'})}
            {createField('rememberMe', 'rememberMe', '', Input, {type:'checkbox'}, 'Remember Me')}
            { error && <div className={s.form_error}>{ error }</div> }
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <>
            <div>Login</div>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})


export default connect(mapStateToProps, {login})(Login)