import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Messages = (props) => {

    debugger
    let dialogsElements = props.dialogsData.map(u => <Dialog key={u.id} name={u.name} id={u.id} />);
    let messagesElements = props.messagesData.map(m => <Message key={m.id} text={m.text} date={m.date} img={m.img} />);

    return (
        <div className={s.messages_content}>
            <div className={s.messages_left}>
                { dialogsElements }
            </div>
            <div className={s.messages_right}>
                { messagesElements }
                <hr />
                <form className={s.form}>
                    <textarea placeholder='New message' onChange={ props.onChangeMessageText } value={props.newMessageText}></textarea>
                    <input onClick={ props.onSendMessage } type='button' value='Send' />
                </form>
            </div>
        </div>
    );
}

export default Messages;
