import s from './Friend.module.css'
import React from "react";

type OwnPropsType = {
    img: string,
    name: string
}

const Nav:React.FC<OwnPropsType> = ({img, name}) => {
    return (
        <div className={s.friend}>
            <img src={img} alt={name} />
            <span>{name}</span>
        </div>
    );
}

export default Nav;