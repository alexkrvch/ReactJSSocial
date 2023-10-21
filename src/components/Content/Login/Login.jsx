import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/FormControls/FormsControls";
import {required} from "../../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div><Field component={Input} name={"login"} type={"text"} placeholder={"Login"} validate={[required]} /></div>
            <div><Field component={Input} name={"password"} type={"password"} placeholder={"Password"} validate={[required]} /></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"} /><label>Remember Me</label></div>
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