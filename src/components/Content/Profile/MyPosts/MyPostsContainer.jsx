import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import React from "react";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../storeContext";

const MyPostsContainer = (props) => {



    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState();

                let onAddPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (e) => {
                    let text = e.target.value;
                    store.dispatch(updateNewPostTextActionCreator(text));
                }


                return (<MyPosts
                    onPostChange={onPostChange}
                    onAddPost={onAddPost}
                    posts={state.ProfilePage.PostData}
                    newPostText={state.ProfilePage.newPostText}
                />)
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;