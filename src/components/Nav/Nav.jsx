import s from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.sidebar_nav}>
            <div className={s.sidebar}>
                <ul className={s.sidebar_menu}>
                    <li className={`${s.menu_item} ${s.menu_active}`}><Link to="/profile">Profile</Link></li>
                    <li className={s.menu_item}><Link to="/messages">Messages</Link></li>
                    <li className={s.menu_item}><Link to="/music">Music</Link></li>
                    <li className={s.menu_item}><Link to="/settings">Settings</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;