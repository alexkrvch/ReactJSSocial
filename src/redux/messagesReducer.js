const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {

    switch (action.type){
        case SEND_MESSAGE:
            let today = new Date().toLocaleDateString('en-GB');
            let newMessage = {id: 6, text: state.newMessageText, date: today, img: 'https://via.placeholder.com/60x80'}
            state.MessageData.push(newMessage);
            state.newMessageText = '';
            return state
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state
        default:
            return state
    }

}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, text: text})

export default messagesReducer