import s from './Messages.module.css'

const Messages = () => {
    return (
        <div className={s.messages_content}>
            <div className={s.messages_left}>
                <a href="#" className={`${s.user} ${s.active}`}>Alex</a>
                <a href="#" className={s.user}>Nast</a>
                <a href="#" className={s.user}>Dmitry</a>
                <a href="#" className={s.user}>Evgeny</a>
                <a href="#" className={s.user}>Yan</a>
                <a href="#" className={s.user}>Alber</a>
                <a href="#" className={s.user}>Poul</a>
            </div>
            <div className={s.messages_right}>

            </div>
        </div>
    );
}

export default Messages;
