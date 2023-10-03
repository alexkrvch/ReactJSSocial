import s from './Content.module.css'
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";

const Content = () => {
    return (
        <div className={s.content_page}>
            <Messages />
        </div>
    );
}

export default Content;
