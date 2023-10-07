import Dialog from "./Dialog/Dialog";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let state = props.store.getState().MessagesPage;

    let onChangeMessageText = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return (<Messages
        onChangeMessageText={onChangeMessageText}
        onSendMessage={onSendMessage}
        dialogsData={state.DialogData}
        messagesData={state.MessageData}
        newMessageText={state.newMessageText}
    />);
}

export default MessagesContainer;
