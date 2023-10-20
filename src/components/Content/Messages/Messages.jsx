import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";

const newMessageForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={s.form}>
            <Field component={'textarea'} name={'newMessageText'} placeholder={'New message'} />
            <button>Send</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({ form: 'newMessage' })(newMessageForm)

const Messages = (props) => {

    let dialogsElements = props.dialogsData.map(u => <Dialog key={u.id} name={u.name} id={u.id} />);
    let messagesElements = props.messagesData.map(m => <Message key={m.id} text={m.text} date={m.date} img={m.img} />);

    let sendMessage = (data) => {
        console.log(data)
        props.onSendMessage(data.newMessageText)
    }

    return (
        <div className={s.messages_content}>
            <div className={s.messages_left}>
                { dialogsElements }
            </div>
            <div className={s.messages_right}>
                { messagesElements }
                <hr />
                <NewMessageReduxForm onSubmit={sendMessage} />
            </div>
        </div>
    );
}

export default Messages;
