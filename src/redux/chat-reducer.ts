import {CommonThunkType, InferActionsTypes} from "@/redux/redux-store";
import {chatAPI} from "../api/chat-api";
import {Dispatch} from "redux";

type statusType = 'pending' | 'ready' | 'error';

type initialStateType = {
    messages: ChatMessageType[],
    status: statusType
}


let initialState: initialStateType = {
    messages: [],
    status: 'pending'
}

const chatReducer = (state:initialStateType = initialState, action:ActionsTypes):initialStateType  => {
    switch (action.type){
        case 'chat/MESSAGES_SET':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            };
        case 'chat/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
    }
}

// @ts-ignore


const actions = {
    setMessages: (messages: ChatMessageType[]) => (
        {type: 'chat/MESSAGES_SET', payload: {messages}} as const ),
    setStatus: (status: statusType) => (
        {type: 'chat/STATUS_CHANGED', payload: {status}} as const ),
}


let _newMessageHandler: ((messages: ChatMessageType) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if(_newMessageHandler === null) {
        _newMessageHandler = (messages:ChatMessageType) => {
            dispatch(actions.setMessages(messages))
        }
    }
    return _newMessageHandler;
}

let _newStatusHandler: ((status: statusType) => void) | null = null;
const newStatusHandlerCreator = (dispatch: Dispatch) => {
    if(_newStatusHandler === null) {
        _newStatusHandler = (status: statusType) => {
            dispatch(actions.setStatus(status))
        }
    }
    return _newStatusHandler;
}



export const startMessagesListening = ():ThunkType => async (dispatch)=> {
    chatAPI.start()
    chatAPI.subscribe('message-received', newMessageHandlerCreator(dispatch) )
    chatAPI.subscribe('status-changed', newStatusHandlerCreator(dispatch) )
}

export const stopMessagesListening = ():ThunkType => async (dispatch)=> {
    chatAPI.stop()
    chatAPI.unsubscribe('message-received', newMessageHandlerCreator(dispatch) )
    chatAPI.unsubscribe('status-changed', newStatusHandlerCreator(dispatch) )
}

export const sendMessage = (message:string):ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsTypes>;

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}