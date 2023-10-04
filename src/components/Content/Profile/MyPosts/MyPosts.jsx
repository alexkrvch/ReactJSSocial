import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let Posts = props.PostData.map(p => <Post header={p.header} text={p.text} countLikes={p.countLikes} date={p.date} />);

    return (
        <div className={s.my_posts}>

            <form className={s.form}>
                <textarea placeholder='New post' ></textarea>
                <input type='button' value='Send' />
            </form>

            <hr />

            { Posts }
        </div>
    );
}

export default MyPosts;
