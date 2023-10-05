import s from './Content.module.css'
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Content = (props) => {
    return (
        <div className={s.content_page}>
            <Routes>
                <Route path='/profile' element={<Profile state={props.state.ProfilePage} addPost={props.addPost} changeTextNewPost={props.changeTextNewPost} />} />
                <Route path='/messages'  element={<Messages state={props.state.MessagesPage} sendMessage={props.sendMessage} changeTextNewMessage={props.changeTextNewMessage} />} />
                <Route path='/messages/:dialogid'  element={<Messages state={props.state.MessagesPage} sendMessage={props.sendMessage} changeTextNewMessage={props.changeTextNewMessage} />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </div>
    );
}

export default Content;
