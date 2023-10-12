import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../Common/Preloader/Preloader";

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <hr />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
