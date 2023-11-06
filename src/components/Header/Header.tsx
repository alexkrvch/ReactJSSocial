import logo from "../../logo.svg";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

type OwnPropsType = {
    login: string | null,
    isAuth: boolean,
    logout: () => void
}

const Header:React.FC<OwnPropsType> = ({login, isAuth, logout}) => {
    return (
        <header className={s.header_page}>
            <img alt="" className={s.logo} src={logo} />
            WebArcticFox React
            <div className={s.auth_section}>
                { !isAuth ? <NavLink to={`/login`}>Login</NavLink> : <div>{login} <button onClick={logout}>Log Out</button></div>}
            </div>
        </header>
    );
}

export default Header;