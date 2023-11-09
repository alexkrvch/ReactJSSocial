import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../Common/FormControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {connect, useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/authReducer";
import {Navigate} from "react-router-dom";
import s from "./Login.module.css"
import React from "react";
import {AppStateType} from "@/redux/redux-store";

type MyFormProps = {
    captcha: string | null
}

const LoginForm:React.FC<InjectedFormProps<LoginFormValuesType, MyFormProps> & MyFormProps> = ({handleSubmit, error, captcha}) => {
    return (
        <form onSubmit={ handleSubmit }>
            {createField<LoginFormPropertiesTypeKeys>('Email', 'email', [required], Input, {type:'text'})}
            {createField<LoginFormPropertiesTypeKeys>('Password', 'password', [required], Input, {type:'password'})}
            {createField<LoginFormPropertiesTypeKeys>('rememberMe', 'rememberMe', '', Input, {type:'checkbox'}, 'Remember Me')}

            { captcha && <div><img src={captcha} alt={'captcha'} title={'captcha'} /> </div> }
            { captcha && createField<LoginFormPropertiesTypeKeys>('captcha', 'captcha', [required], Input, {type:'text'}) }

            { error && <div className={s.form_error}>{ error }</div> }
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, MyFormProps>({
    form: 'login'
})(LoginForm)

type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
}

type LoginFormPropertiesTypeKeys = Extract<keyof LoginFormValuesType, string>


export const Login:React.FC = () => {

    const captcha = useSelector( (state:AppStateType) => state.Auth.captcha);
    const isAuth = useSelector( (state:AppStateType) => state.Auth.isAuth);

    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        if(!formData.captcha) {
            dispatch(login(formData.email, formData.password, formData.rememberMe, ''))
        } else {
            dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
        }
    }

    if(isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <>
            <div>Login</div>
            <LoginReduxForm captcha={captcha} onSubmit={onSubmit} />
        </>
    )
}
