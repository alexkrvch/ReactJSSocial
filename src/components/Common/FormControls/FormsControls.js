import s from './FormsControls.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.form_control + " " + (hasError ? s.error : '') }>
            { props.child }
            { hasError  && <span>{meta.error}</span> }
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
        <FormControl {...props}><input {...input} placeholder={props.placeholder} type={props.type} /></FormControl>
    )
    // const hasError = meta.touched && meta.error;
    // return (
    //     <div className={s.form_control + " " + (hasError ? s.error : '') }>
    //         <input {...input} placeholder={props.placeholder} type={props.type} />
    //         { hasError  && <span>{meta.error}</span> }
    //     </div>
    // )
}