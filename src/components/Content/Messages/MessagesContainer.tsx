import {actions} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect.jsx";
import {compose} from "redux";
import {AppStateType} from "@/redux/redux-store.ts";
import {DialogDataType, MessageDataType} from "@/types/types.ts";

type MapStatePropsType = {
    dialogsData: DialogDataType[],
    messagesData: MessageDataType[],
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        dialogsData: state.MessagesPage.DialogData,
        messagesData: state.MessagesPage.MessageData
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage: actions.sendMessage}),
    withAuthRedirect
)(Messages);
