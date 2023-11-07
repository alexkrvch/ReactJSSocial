import {actions} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "@/redux/redux-store.ts";
import {postDataType} from "@/types/types.ts";

type MapStateProps = {
    posts: postDataType[]
}

let mapStateToProps = (state:AppStateType):MapStateProps => {
    return {
        posts: state.ProfilePage.PostData
    }
}

const MyPostsContainer = connect(mapStateToProps, {onAddPost: actions.addPost})(MyPosts)


export default MyPostsContainer;