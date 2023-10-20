import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div><Field component={"input"} name={"login"} placeholder={"Login"}/></div>
            <div><Field component={"input"} name={"password"} placeholder={"Password"} /></div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/><label>Remember Me</label></div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <>
            <div>Login</div>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
}

export default Login