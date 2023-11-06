import s from "./NavItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type OwnPropsType = {
    link: string,
    text: string
}

const NavItem:React.FC<OwnPropsType> = ({link, text}) => {
    return (
        <li className={s.menu_item}><NavLink to={`/${link}`} className={({ isActive }) => isActive ? s.menu_active : ""}>{text}</NavLink></li>
    )
}

export default NavItem