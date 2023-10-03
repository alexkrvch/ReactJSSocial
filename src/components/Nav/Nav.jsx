import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.sidebar_nav}>
            <div className={s.sidebar}>
                <ul className={s.sidebar_menu}>
                    <li className={`${s.menu_item}`}><NavLink to="/profile" className={({ isActive }) => isActive ? s.menu_active : ""}>Profile</NavLink></li>
                    <li className={s.menu_item}><NavLink to="/messages" exact className={({ isActive }) => isActive ? s.menu_active : ""}>Messages</NavLink></li>
                    <li className={s.menu_item}><NavLink to="/news" className={({ isActive }) => isActive ? s.menu_active : ""}>News</NavLink></li>
                    <li className={s.menu_item}><NavLink to="/music" className={({ isActive }) => isActive ? s.menu_active : ""}>Music</NavLink></li>
                    <li className={s.menu_item}><NavLink to="/settings" className={({ isActive }) => isActive ? s.menu_active : ""}>Settings</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;