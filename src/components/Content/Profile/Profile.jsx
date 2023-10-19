import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../Common/Preloader/Preloader";

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} setProfileStatus={props.setProfileStatus} />

            { props.userId === 13315 ? <MyPostsContainer /> : ''}
        </div>
    );
}

export default Profile;
