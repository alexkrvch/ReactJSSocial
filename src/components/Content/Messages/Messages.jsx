import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = () => {
    let DialogData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Nast'},
        {id: 3, name: 'Dmitry'},
        {id: 4, name: 'Evgeny'},
        {id: 5, name: 'Yan'},
        {id: 6, name: 'Alber'},
        {id: 7, name: 'Poul'}
    ]

    let MessageData = [
        {id: 1, text: 'Hi Alex', date: '08 September 2023'},
        {id: 2, text: 'Hey Nasty, how are you?', date: '10 September 2023'},
        {id: 3, text: 'Im okay, but so busy, what about you?', date: '10 September 2023'},
        {id: 4, text: 'Im so good, im now in usa', date: '11 September 2023'},
        {id: 5, text: 'Wow, its so cool, what are you do?', date: '13 September 2023'}
    ]

    return (
        <div className={s.messages_content}>
            <div className={s.messages_left}>
                {DialogData.map(u => <Dialog name={u.name} id={u.id} />)}
            </div>
            <div className={s.messages_right}>
                {MessageData.map(m => <Message text={m.text} date={m.date} />)}
                <hr />
                <form className={s.form}>
                    <textarea placeholder='New message' ></textarea>
                    <input type='button' value='Send' />
                </form>
            </div>
        </div>
    );
}

export default Messages;
