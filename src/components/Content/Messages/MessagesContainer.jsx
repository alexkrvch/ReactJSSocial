import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.MessagesPage.DialogData,
        messagesData: state.MessagesPage.MessageData,
        newMessageText: state.MessagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => { dispatch(sendMessageActionCreator()) },
        onChangeMessageText: (e) => { let text = e.target.value; dispatch(updateNewMessageTextActionCreator(text)) }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);
