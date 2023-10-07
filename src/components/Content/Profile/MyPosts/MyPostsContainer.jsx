import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import React from "react";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (<MyPosts
        onPostChange={onPostChange}
        onAddPost={onAddPost}
        posts={ state.ProfilePage.PostData }
        newPostText={ state.ProfilePage.newPostText }
    />);
}

export default MyPostsContainer;