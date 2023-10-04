import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = (props) => {


    let Dialogs = props.state.DialogData.map(u => <Dialog key={u.id} name={u.name} id={u.id} />);
    let Messages = props.state.MessageData.map(m => <Message key={m.id} text={m.text} date={m.date} />);

    return (
        <div className={s.messages_content}>
            <div className={s.messages_left}>
                { Dialogs }
            </div>
            <div className={s.messages_right}>
                { Messages }
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
