import s from './Message.module.css'
import React from "react";

type OwnPropsType = {
    img: string,
    text: string,
    date: string
}

const Messages:React.FC<OwnPropsType> = (props) => {
    return (
        <div className={s.message_item}>
            <div className={s.message_img}>
                <img src={props.img} alt="" />
            </div>
            <div className={s.message_content}>
                <div className={s.message_text}>{props.text}</div>
                <time>{props.date}</time>
            </div>
        </div>
    );
}

export default Messages;
