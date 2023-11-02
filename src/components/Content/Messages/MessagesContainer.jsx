import {sendMessageActionCreator} from "../../../redux/messagesReducer.ts";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.MessagesPage.DialogData,
        messagesData: state.MessagesPage.MessageData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (newMessageText) => { dispatch(sendMessageActionCreator(newMessageText)) }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);
