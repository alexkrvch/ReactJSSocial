import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType} from "@/redux/usersReducer.ts";
import {useSelector} from "react-redux";
import {AppStateType} from "@/redux/redux-store.ts";

const usersFormValidate = (value: any) => {
    const errors = {};
    return errors;
}

type FilterTypeString = {
    term: string
    friend: 'true' | 'false' | 'null'
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void,
}


const UsersForm: React.FC<PropsType> = React.memo(({onFilterChanged}) => {
    const submit = (values: FilterTypeString, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter:FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === "true" ? true : false
        }
        onFilterChanged(filter)
        setSubmitting(false);
        // setTimeout(() => {
        //     alert(JSON.stringify(values));
        //     setSubmitting(false);
        // }, 400);
    }

    const initialValues:FilterType = useSelector((state:AppStateType) => state.Users.filter)
    const initialValuesForm:FilterTypeString = {
        term: initialValues.term,
        friend: initialValues.friend === null ? 'null' : initialValues.friend === true ? 'true' : 'false'
    }

    return (
        <div>
            <Formik
                initialValues={initialValuesForm}
                validate={usersFormValidate}
                onSubmit={submit}>
                {({isSubmitting}) => (
                    <Form>
                        <Field type="string" name="term" placeholder={'Search by name'}/>
                        <Field name='friend' as={'select'}>
                            <option value='null'>All</option>
                            <option value='true'>Only followed</option>
                            <option value='false'>Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

export default UsersForm