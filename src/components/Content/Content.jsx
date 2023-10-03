import s from './Content.module.css'
import Profile from "./Profile/Profile";

const Content = () => {
    return (
        <div className={s.content_page}>
            <Profile />
        </div>
    );
}

export default Content;
