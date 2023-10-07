import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} header={p.header} text={p.text} countLikes={p.countLikes} date={p.date} />);

    return (
        <div className={s.my_posts}>

            <form className={s.form}>
                <textarea placeholder='New post' onChange={ props.onPostChange } value={ props.newPostText }></textarea>
                <input onClick={ props.onAddPost } type='button' value='Send' />
            </form>

            <hr />

            { postsElements }
        </div>
    );
}

export default MyPosts;
