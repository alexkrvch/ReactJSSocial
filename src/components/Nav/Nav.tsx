import s from './Nav.module.css'
import Friend from "./Friend/Friend";
import NavItem from "./NavItem/NavItem";
import React from "react";
import {FriendType, NavType} from "@/types/types.ts";
import {Divider, ListItemText, MenuItem, MenuList, Paper} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check';

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

                <Paper>
                    <MenuList dense>
                        <MenuItem>
                            <ListItemText inset>1.15</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemText inset>Double</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Check />
                            </ListItemIcon>
                            Custom: 1.2
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemText>Add space before paragraph</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemText>Add space after paragraph</ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemText>Custom spacing...</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </div>
        </nav>
    );
}

export default Nav;