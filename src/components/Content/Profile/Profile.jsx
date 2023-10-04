import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <hr />
            <MyPosts PostData={props.state.PostData} />
        </div>
    );
}

export default Profile;
