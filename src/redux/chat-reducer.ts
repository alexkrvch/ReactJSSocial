import {CommonThunkType, InferActionsTypes} from "@/redux/redux-store";
import {chatAPI} from "../api/chat-api";
import {Dispatch} from "redux";


type initialStateType = {
    messages: ChatMessageType[]
}


let initialState: initialStateType = {
    messages: []
}

const chatReducer = (state:initialStateType = initialState, action:ActionsTypes):initialStateType  => {
    switch (action.type){
        case 'chat/MESSAGES_SET':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            };
        default:
            return state;
    }
}

// @ts-ignore


const actions = {
    setMessages: (messages: ChatMessageType[]) => (
        {type: 'chat/MESSAGES_SET', payload: {messages}} as const ),
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



export const startMessagesListening = ():ThunkType => async (dispatch)=> {
    chatAPI.start()
    chatAPI.subscribe( newMessageHandlerCreator(dispatch) )
}

export const stopMessagesListening = ():ThunkType => async (dispatch)=> {
    chatAPI.stop()
    chatAPI.unsubscribe( newMessageHandlerCreator(dispatch) )
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