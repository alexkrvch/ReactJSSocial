import {actions} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "@/redux/redux-store.ts";
import {DialogDataType, MessageDataType} from "@/types/types.ts";
import React from "react";

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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage: actions.sendMessage}),
    withAuthRedirect
)(Messages);
