import s from './Content.module.css'
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Content = () => {
    return (
        <div className={s.content_page}>
            <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages'  element={<Messages />} />
                <Route path='/messages/:dialogid'  element={<Messages />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </div>
    );
}

export default Content;
