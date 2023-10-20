import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const NewPostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={s.form}>
            <Field component={"textarea"} name={"newPostText"} />
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
