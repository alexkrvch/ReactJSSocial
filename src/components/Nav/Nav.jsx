import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import NavItem from "./NavItem/NavItem";

const Nav = (props) => {
    let friends = props.friends.map( f => <Friend key={f.id} name={f.name} id={f.id} img={f.img} />)
    let nav = props.menu.map( n => <NavItem key={n.id} link={n.link} text={n.text} />)

    return (
        <nav className={s.sidebar_nav}>
            <div className={s.sidebar}>
                <ul className={s.sidebar_menu}>
                    { nav }
                </ul>
                <hr />
                <div className={s.sidebar_friends}>
                    { friends }
                </div>
            </div>
        </nav>
    );
}

export default Nav;