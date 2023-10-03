import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.post_img}>
                <img src="https://via.placeholder.com/80" alt="Post Picture" />
            </div>
            <div className={s.post_content}>
                <h3 className={s.post_name}>Post 1</h3>
                <div className={s.post_body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, sapien sapien bibendum sapien, vel bibendum sapien sapien vel sapien. Sed euismod, velit vel bibendum bibendum, sapien sapien bibendum sapien, vel bibendum sapien sapien vel sapien. Sed euismod</div>
                <time>09 September 2023</time>
                <div className={s.like_section}>
                    <span><span className={s.like_count}>4</span> Like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;
