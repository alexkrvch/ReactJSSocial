import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.profile_back}>
                <img src="https://via.placeholder.com/1456x200" alt="Profile Picture" />
            </div>
            <div className={s.profile_header}>
                <img src="https://via.placeholder.com/150" alt="Profile Picture" />
                <h2>John Doe</h2>
                <p>Web Developer</p>
            </div>
            <div className={s.profile_content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.</p>
                <p>Nullam euismod, diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.</p>
            </div>

            <hr />
            <MyPosts />
        </div>
    );
}

export default Profile;
