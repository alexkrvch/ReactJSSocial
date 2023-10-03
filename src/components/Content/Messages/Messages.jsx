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
                <div className={s.message_item}>
                    <div className={s.message_img}>
                        <img src="https://via.placeholder.com/60" alt="Messages Picture" />
                    </div>
                    <div className={s.message_content}>
                        <div className={s.message_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, sapien sapien bibendum sapien, vel bibendum sapien sapien vel sapien.</div>
                        <time>08 September 2023</time>
                    </div>
                </div>
                <div className={s.message_item}>
                    <div className={s.message_img}>
                        <img src="https://via.placeholder.com/60" alt="Messages Picture" />
                    </div>
                    <div className={s.message_content}>
                        <div className={s.message_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, sapien sapien bibendum sapien, vel bibendum sapien sapien vel sapien.</div>
                        <time>08 September 2023</time>
                    </div>
                </div>
                <div className={s.message_item}>
                    <div className={s.message_img}>
                        <img src="https://via.placeholder.com/60" alt="Messages Picture" />
                    </div>
                    <div className={s.message_content}>
                        <div className={s.message_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, sapien sapien bibendum sapien, vel bibendum sapien sapien vel sapien.</div>
                        <time>08 September 2023</time>
                    </div>
                </div>
                <div className={s.message_item}>
                    <div className={s.message_img}>
                        <img src="https://via.placeholder.com/60" alt="Messages Picture" />
                    </div>
                    <div className={s.message_content}>
                        <div className={s.message_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, sapien sapien bibendum sapien, vel bibendum sapien sapien vel sapien.</div>
                        <time>08 September 2023</time>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;
