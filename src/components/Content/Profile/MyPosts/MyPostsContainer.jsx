import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
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
        onAddPost: () => { dispatch(addPostActionCreator()) },
        onPostChange: (e) => { let text = e.target.value; dispatch(updateNewPostTextActionCreator(text)) }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;