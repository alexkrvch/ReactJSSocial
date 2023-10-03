import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post_img}>
                <img src="https://via.placeholder.com/80" alt="Post Picture" />
            </div>
            <div className={s.post_content}>
                <h3 className={s.post_name}>{props.header}</h3>
                <div className={s.post_body}>{props.text}</div>
                <time>{props.date}</time>
                <div className={s.like_section}>
                    <span><span className={s.like_count}>{props.countLikes}</span> Like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;
