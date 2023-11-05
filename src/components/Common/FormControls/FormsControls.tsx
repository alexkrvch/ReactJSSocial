import s from './FormsControls.module.css'
import {Field, WrappedFieldProps} from "redux-form";
import React from "react";
import {FieldValidatorType} from "@/utils/validators/validators.ts";

type FormControlPropsType = {
    children: React.ReactNode
}

const FormControl:React.FC<WrappedFieldProps & FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.form_control + " " + (hasError ? s.error : '') }>
            { children }
            { hasError  && <span>{error}</span> }
        </div>
    )
}


export const Textarea:React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input:React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}

export const createField = (placeholder: string | undefined,
                            name: string,
                            validators: FieldValidatorType[] | string,
                            component: React.FC<WrappedFieldProps>,
                            props:any,
                            text = '') => (<div>
    <Field component={component} name={name} {...props} placeholder={placeholder} validate={validators} /> {text}
</div>)