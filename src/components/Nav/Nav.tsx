import s from './Nav.module.css'
import Friend from "./Friend/Friend";
import NavItem from "./NavItem/NavItem";
import React from "react";
import {FriendType, NavType} from "@/types/types.ts";

type OwnPropsType = {
    friends: FriendType[],
    menu: NavType[]
}

const Nav:React.FC<OwnPropsType> = ({friends, menu}) => {
    let friendsList = friends.map( f => <Friend key={f.id} name={f.name} img={f.img} />)
    let navList = menu.map( n => <NavItem key={n.id} link={n.link} text={n.text} />)

    return (
        <nav className={s.sidebar_nav}>
            <div className={s.sidebar}>
                <ul className={s.sidebar_menu}>
                    { navList }
                </ul>
                <hr />
                <div className={s.sidebar_friends}>
                    { friendsList }
                </div>
            </div>
        </nav>
    );
}

export default Nav;