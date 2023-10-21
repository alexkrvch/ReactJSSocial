import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../Common/FormControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

const NewPostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={s.form}>
            <Field component={Textarea} placeholder={'Post message'} name={"newPostText"} validate={[required, maxLength30]} />
            <button>Send</button>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'addPost'})(NewPostForm)

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} header={p.header} text={p.text} countLikes={p.countLikes} date={p.date} />);

    let addNewMessage = (data) => {
        props.onAddPost(data.newPostText)
    }

    return (
        <div className={s.my_posts}>
            <hr />

            <NewPostReduxForm onSubmit={ addNewMessage } />

            <hr />

            { postsElements }
        </div>
    );
}

export default MyPosts;
