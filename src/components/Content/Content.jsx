import s from './Content.module.css'
import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";

const Content = (props) => {
    return (
        <div className={s.content_page}>
            <Routes>
                <Route path='/profile' element={<ProfileContainer />} />
                <Route path='/profile/:userid' element={<ProfileContainer />} />
                <Route path='/users' element={<UsersContainer />} />
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
