import s from './FormsControls.module.css'
import {Field} from "redux-form";
import React from "react";

const FormControl = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.form_control + " " + (hasError ? s.error : '') }>
            { props.children }
            { hasError  && <span>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props, text) => <div>
    <Field component={component} name={name} {...props} placeholder={placeholder} validate={validators} /> {text}
</div>