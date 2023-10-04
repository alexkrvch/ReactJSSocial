import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Messages = (props) => {


    let Dialogs = props.state.DialogData.map(u => <Dialog key={u.id} name={u.name} id={u.id} />);
    let Messages = props.state.MessageData.map(m => <Message key={m.id} text={m.text} date={m.date} img={m.img} />);

    let newMessageArea = React.createRef();
    let addMessage = () => {
        let text = newMessageArea.current.value;
        alert(text)
    }

    return (
        <div className={s.messages_content}>
            <div className={s.messages_left}>
                { Dialogs }
            </div>
            <div className={s.messages_right}>
                { Messages }
                <hr />
                <form className={s.form}>
                    <textarea placeholder='New message' ref={newMessageArea} ></textarea>
                    <input onClick={ addMessage } type='button' value='Send' />
                </form>
            </div>
        </div>
    );
}

export default Messages;
