import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

type OwnPropsType = {
    id: number,
    name: string
}

const Messages:React.FC<OwnPropsType> = (props) => {
    return (
        <NavLink to={`/messages/${props.id}`} className={({ isActive }) => isActive ? `${s.user} ${s.active}` : s.user}>{props.name}</NavLink>
    );
}

export default Messages;
