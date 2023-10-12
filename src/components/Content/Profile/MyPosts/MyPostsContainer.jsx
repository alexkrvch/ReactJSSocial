import {addPost, updateNewPostText} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.PostData,
        newPostText: state.ProfilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => { dispatch(addPost()) },
        onPostChange: (e) => { let text = e.target.value; dispatch(updateNewPostText(text)) }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;