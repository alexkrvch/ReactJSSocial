import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <hr />
            <MyPosts state={props.state} />
        </div>
    );
}

export default Profile;
