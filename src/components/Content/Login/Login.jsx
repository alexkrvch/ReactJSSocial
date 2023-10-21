import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/FormControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";
import {Navigate} from "react-router-dom";
import s from "./Login.module.css"
import React from "react";

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div><Field component={Input} name={"email"} type={"text"} placeholder={"Email"} validate={[required]} /></div>
            <div><Field component={Input} name={"password"} type={"password"} placeholder={"Password"} validate={[required]} /></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"} /><label>Remember Me</label></div>
            { props.error && <div className={s.form_error}>{ props.error }</div> }
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