import s from './Content.module.css'
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import MessagesContainer from "./Messages/MessagesContainer";

const Content = (props) => {
    return (
        <div className={s.content_page}>
            <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages' element={<MessagesContainer />} />
                <Route path='/messages/:dialogid' element={<MessagesContainer />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </div>
    );
}

export default Content;
