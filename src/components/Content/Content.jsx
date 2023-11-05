import {lazy} from "react";
import s from './Content.module.css'
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";
import {withSuspense} from "../../hoc/withSuspense";

const ProfileContainer = withSuspense(lazy(()=> import("./Profile/ProfileContainer")))
const MessagesContainer = withSuspense(lazy(()=> import("./Messages/MessagesContainer")))


const Content = (props) => {
    return (
        <div className={s.content_page}>
            <Routes>
                <Route path='/' element={<Navigate to={'/profile'} />} />
                <Route path='/profile' element={<ProfileContainer />} />
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/users' element={<UsersContainer pageTitle={'Самураи'} />} />
                <Route path='/messages' element={<MessagesContainer />} />
                <Route path='/messages/:dialogid' element={<MessagesContainer />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<div>Error 404</div>} />
            </Routes>
        </div>
    );
}

export default Content;
