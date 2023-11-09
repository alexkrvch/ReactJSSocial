import React from "react";
import {Form, Formik, Field} from "formik";
import {FilterType} from "@/redux/usersReducer.ts";

const usersFormValidate = (value: any) =>  {
    const errors = {};
    return errors;
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}


const UsersForm:React.FC<PropsType> = ({onFilterChanged}) => {
    const submit = (values:FilterType, { setSubmitting }:{setSubmitting: (isSubmitting: boolean) => void }) => {
        onFilterChanged(values)
        setSubmitting(false);
        // setTimeout(() => {
        //     alert(JSON.stringify(values));
        //     setSubmitting(false);
        // }, 400);
    }

    return (
        <div>
            <Formik
                initialValues={{ term: '' }}
                validate={usersFormValidate}
                onSubmit={submit}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="string" name="term" placeholder={'Search by name'} />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UsersForm