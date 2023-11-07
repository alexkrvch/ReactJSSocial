import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {createField, GetStringKeys, Textarea} from "../../Common/FormControls/FormsControls";
import {DialogDataType, MessageDataType} from "@/types/types.ts";

const maxLength100 = maxLengthCreator(100);

type MessageFormValuesType = {
    newMessageText: string
}

type MessageFormPropertiesTypeKeys = GetStringKeys<MessageFormValuesType>
const newMessageForm:React.FC<InjectedFormProps<MessageFormValuesType>> = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={s.form}>
            {createField<MessageFormPropertiesTypeKeys>('New message', 'newMessageText', [required, maxLength100], Textarea, {type:'text'})}
            <button>Send</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm<MessageFormValuesType>({ form: 'newMessage' })(newMessageForm)

type MapStatePropsType = {
    dialogsData: DialogDataType[],
    messagesData: MessageDataType[],
}

type MapDispatchPropsType = {
    sendMessage: (newMessageText:string) => void
}

type OwnPropsType = {
    data: string
}

type PropsType = MapStatePropsType & OwnPropsType & MapDispatchPropsType;

const Messages:React.FC<PropsType> = ({dialogsData, messagesData, sendMessage}) => {

    let dialogsElements = dialogsData.map(u => <Dialog key={u.id} name={u.name} id={u.id} />);
    let messagesElements = messagesData.map(m => <Message key={m.id} text={m.text} date={m.date} img={m.img} />);

    let onSendMessage = (data:MessageFormValuesType) => {
        sendMessage(data.newMessageText)
    }

    return (
        <div className={s.messages_content}>
            <div className={s.messages_left}>
                { dialogsElements }
            </div>
            <div className={s.messages_right}>
                { messagesElements }
                <hr />
                <NewMessageReduxForm onSubmit={onSendMessage} />
            </div>
        </div>
    );
}

export default Messages;
