import s from './Message.module.css'

const Messages = (props) => {
    return (
        <div className={s.message_item}>
            <div className={s.message_img}>
                <img src="https://via.placeholder.com/60" alt="Messages Picture" />
            </div>
            <div className={s.message_content}>
                <div className={s.message_text}>{props.text}</div>
                <time>{props.date}</time>
            </div>
        </div>
    );
}

export default Messages;