import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <hr />
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;
