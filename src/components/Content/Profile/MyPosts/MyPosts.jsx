import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";

const MyPosts = (props) => {

    let Posts = props.state.PostData.map(p => <Post key={p.id} header={p.header} text={p.text} countLikes={p.countLikes} date={p.date} />);

    let changeTextNewPost = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <div className={s.my_posts}>

            <form className={s.form}>
                <textarea placeholder='New post' onChange={ changeTextNewPost } value={props.state.newPostText}></textarea>
                <input onClick={ addPost } type='button' value='Send' />
            </form>

            <hr />

            { Posts }
        </div>
    );
}

export default MyPosts;
