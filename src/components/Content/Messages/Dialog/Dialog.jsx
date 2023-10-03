import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <NavLink to={`/messages/${props.id}`} className={({ isActive }) => isActive ? `${s.user} ${s.active}` : s.user}>{props.name}</NavLink>
    );
}

export default Messages;
