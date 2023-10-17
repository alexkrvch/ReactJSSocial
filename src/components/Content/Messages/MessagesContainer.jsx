import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.MessagesPage.DialogData,
        messagesData: state.MessagesPage.MessageData,
        newMessageText: state.MessagesPage.newMessageText,
        isAuth: state.Auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => { dispatch(sendMessageActionCreator()) },
        onChangeMessageText: (e) => { let text = e.target.value; dispatch(updateNewMessageTextActionCreator(text)) }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer;
