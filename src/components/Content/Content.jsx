import s from './Content.module.css'
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import {Route, Routes} from "react-router-dom";

const Content = () => {
    return (
        <div className={s.content_page}>
            <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages' element={<Messages />} />
            </Routes>
        </div>
    );
}

export default Content;
