import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../Common/FormControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";
import {Navigate} from "react-router-dom";
import s from "./Login.module.css"
import React from "react";

const LoginForm = ({handleSubmit, error, captcha}) => {
    return (
        <form onSubmit={ handleSubmit }>
            {createField('Email', 'email', [required], Input, {type:'text'})}
            {createField('Password', 'password', [required], Input, {type:'password'})}
            {createField('rememberMe', 'rememberMe', '', Input, {type:'checkbox'}, 'Remember Me')}

            { captcha && <div><img src={captcha} alt={'captcha'} title={'captcha'} /><Field component={'input'} name={'captcha'} validate={[required]} /> </div> }

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
        if(!formData.captcha) {
            props.login(formData.email, formData.password, formData.rememberMe)
        } else {
            props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
        }
    }

    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <>
            <div>Login</div>
            <LoginReduxForm captcha={props.captcha} onSubmit={onSubmit} />
        </>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    captcha: state.Auth.captcha
})


export default connect(mapStateToProps, {login})(Login)