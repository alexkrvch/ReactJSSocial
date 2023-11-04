"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_form_1 = require("redux-form");
var FormsControls_1 = require("../../Common/FormControls/FormsControls");
var validators_1 = require("../../../utils/validators/validators");
var react_redux_1 = require("react-redux");
var authReducer_ts_1 = require("../../../redux/authReducer.ts");
var react_router_dom_1 = require("react-router-dom");
var Login_module_css_1 = __importDefault(require("./Login.module.css"));
var LoginForm = function (_a) {
    var handleSubmit = _a.handleSubmit, error = _a.error, captcha = _a.captcha;
    return (h("form", { onSubmit: handleSubmit },
        FormsControls_1.createField('Email', 'email', [validators_1.required], FormsControls_1.Input, { type: 'text' }),
        FormsControls_1.createField('Password', 'password', [validators_1.required], FormsControls_1.Input, { type: 'password' }),
        FormsControls_1.createField('rememberMe', 'rememberMe', '', FormsControls_1.Input, { type: 'checkbox' }, 'Remember Me'),
        captcha && h("div", null,
            h("img", { src: captcha, alt: 'captcha', title: 'captcha' }),
            " "),
        captcha && FormsControls_1.createField('captcha', 'captcha', [validators_1.required], FormsControls_1.Input, { type: 'text' }),
        error && h("div", { className: Login_module_css_1.default.form_error }, error),
        h("button", null, "Login")));
};
var LoginReduxForm = redux_form_1.reduxForm({
    form: 'login'
})(LoginForm);
var Login = function (props) {
    var onSubmit = function (formData) {
        if (!formData.captcha) {
            props.login(formData.email, formData.password, formData.rememberMe);
        }
        else {
            props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
        }
    };
    if (props.isAuth) {
        return h(react_router_dom_1.Navigate, { to: "/profile" });
    }
    return (h(react_1.default.Fragment, null,
        h("div", null, "Login"),
        h(LoginReduxForm, { captcha: props.captcha, onSubmit: onSubmit })));
};
var mapStateToProps = function (state) { return ({
    isAuth: state.Auth.isAuth,
    captcha: state.Auth.captcha
}); };
exports.default = react_redux_1.connect(mapStateToProps, { login: authReducer_ts_1.login })(Login);
