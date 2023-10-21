import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.form_control + " " + (hasError ? s.error : '') }>
            <textarea {...input} placeholder={props.placeholder} />
            { hasError  && <span>{meta.error}</span> }
        </div>
    )
}