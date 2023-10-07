import Dialog from "./Dialog/Dialog";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import StoreContext from "../../../storeContext";

const MessagesContainer = (props) => {


    return (
        <StoreContext.Consumer> {
            (store) => {

                let state = store.getState().MessagesPage;

                let onChangeMessageText = (e) => {
                    let text = e.target.value;
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }

                let onSendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                return (
                <Messages
                onChangeMessageText={onChangeMessageText}
                onSendMessage={onSendMessage}
                dialogsData={state.DialogData}
                messagesData={state.MessageData}
                newMessageText={state.newMessageText}
            />
            )
            }
        }
        </StoreContext.Consumer>);
}

export default MessagesContainer;
