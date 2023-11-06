import s from './Post.module.css'
import React from "react";

type OwnPropsType = {
    header: string,
    text: string,
    date: string,
    countLikes: number
}

const Post:React.FC<OwnPropsType> = ({header, text, date, countLikes}) => {
    return (
        <div className={s.post}>
            <div className={s.post_img}>
                <img src="https://via.placeholder.com/80" alt="" />
            </div>
            <div className={s.post_content}>
                <h3 className={s.post_name}>{header}</h3>
                <div className={s.post_body}>{text}</div>
                <time>{date}</time>
                <div className={s.like_section}>
                    <span><span className={s.like_count}>{countLikes}</span> Like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;
