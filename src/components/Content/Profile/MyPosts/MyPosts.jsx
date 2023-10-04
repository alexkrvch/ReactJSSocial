import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let Posts = props.PostData.map(p => <Post key={p.id} header={p.header} text={p.text} countLikes={p.countLikes} date={p.date} />);

    let newPostArea = React.createRef();

    let addPost = () => {
        let text = newPostArea.current.value;
        alert(text)
    }

    return (
        <div className={s.my_posts}>

            <form className={s.form}>
                <textarea placeholder='New post' ref={newPostArea}></textarea>
                <input onClick={ addPost } type='button' value='Send' />
            </form>

            <hr />

            { Posts }
        </div>
    );
}

export default MyPosts;
