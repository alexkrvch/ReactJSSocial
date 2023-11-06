import {InferActionsTypes} from "@/redux/redux-store.ts";
import {DialogDataType, MessageDataType} from "@/types/types.ts";

const SEND_MESSAGE = 'message/SEND-MESSAGE';


type initialStateType = {
    DialogData: DialogDataType[];
    MessageData: MessageDataType[];
}

let initialState:initialStateType = {
    DialogData: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Nast'},
        {id: 3, name: 'Dmitry'},
        {id: 4, name: 'Evgeny'},
        {id: 5, name: 'Yan'},
        {id: 6, name: 'Alber'},
        {id: 7, name: 'Poul'}
    ],
    MessageData: [
        {id: 1, text: 'Hi Alex', date: '08 September 2023', img: 'https://via.placeholder.com/60x40'},
        {id: 2, text: 'Hey Nasty, how are you?', date: '10 September 2023', img: 'https://via.placeholder.com/60x80'},
        {id: 3, text: 'Im okay, but so busy, what about you?', date: '10 September 2023', img: 'https://via.placeholder.com/60x40'},
        {id: 4, text: 'Im so good, im now in usa', date: '11 September 2023', img: 'https://via.placeholder.com/60x80'},
        {id: 5, text: 'Wow, its so cool, what are you do?', date: '13 September 2023', img: 'https://via.placeholder.com/60x40'}
    ]
}

const messagesReducer = (state:initialStateType = initialState, action:ActionsTypes):initialStateType => {
    switch (action.type){
        case SEND_MESSAGE:
            let today:string = new Date().toLocaleDateString('en-GB');
            return {
                ...state,
                MessageData: [...state.MessageData, {id: 6, text: action.newMessageText, date: today, img: 'https://via.placeholder.com/60x80'}]
            }
        default:
            return state
    }

}


type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    sendMessage: (newMessageText:string) => ({type: SEND_MESSAGE, newMessageText} as const)
}

export default messagesReducer