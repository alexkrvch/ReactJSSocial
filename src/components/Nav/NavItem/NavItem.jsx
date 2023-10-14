import s from "./NavItem.module.css";
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className={s.menu_item}><NavLink to={`/${props.link}`} className={({ isActive }) => isActive ? s.menu_active : ""}>{props.text}</NavLink></li>
    )
}

export default NavItem