import React, {lazy} from "react";
import s from './Content.module.css'
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import {UsersPage} from "./Users/UsersPage";
import {Login} from "./Login/Login";
import {withSuspense} from "../../hoc/withSuspense";
import {Button} from "@mui/material";

const ProfilePage = withSuspense(lazy(()=> import("./Profile/ProfileContainer")))
const MessagesContainer = withSuspense(lazy(()=> import("./Messages/MessagesContainer")))


const Content:React.FC = (props) => {
    return (
        <div className={s.content_page}>
            <Routes>
                <Route path='/' element={<Navigate to={'/profile'} />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/profile/:userId' element={<ProfilePage />} />
                <Route path='/users' element={<UsersPage pageTitle={'Самураи'} />} />
                <Route path='/messages' element={<MessagesContainer />} />
                <Route path='/messages/:dialogid' element={<MessagesContainer />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<div>Error 404<br /><Button variant={"contained"}>Ok</Button></div>} />
            </Routes>
        </div>
    );
}

export default Content;
