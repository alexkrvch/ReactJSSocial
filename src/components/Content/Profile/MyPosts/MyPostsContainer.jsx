import {actions} from "../../../../redux/profileReducer.ts";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.PostData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (newPostText) => { dispatch(actions.addPost(newPostText)) }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;