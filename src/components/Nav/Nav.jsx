import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Nav = (props) => {
    let FriendsList = {};
    // let Friends = FriendsList.map( f => <Friend key={f.id} name={f.name} id={f.id} img={f.img} />)



    return (
        <nav className={s.sidebar_nav}>
            <div className={s.sidebar}>
                <ul className={s.sidebar_menu}>
                    <li className={`${s.menu_item}`}><NavLink to="/profile" className={({ isActive }) => isActive ? s.menu_active : ""}>Profile</NavLink></li>
                    <li className={s.menu_item}><NavLink to="/messages" className={({ isActive }) => isActive ? s.menu_active : ""}>Messages</NavLink></li>
                    <li className={s.menu_item}><NavLink to="/news" className={({ isActive }) => isActive ? s.menu_active : ""}>News</NavLink></li>
                    <li className={s.menu_item}><NavLink to="/music" className={({ isActive }) => isActive ? s.menu_active : ""}>Music</NavLink></li>
                    <li className={s.menu_item}><NavLink to="/settings" className={({ isActive }) => isActive ? s.menu_active : ""}>Settings</NavLink></li>
                </ul>

                <hr />

                <div className={s.sidebar_friends}>
                    {/*{ Friends }*/}
                </div>
            </div>
        </nav>
    );
}

export default Nav;