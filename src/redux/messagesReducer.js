const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

let initialState = {
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
    ],
    newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
    let stateCopy = { ...state }

    switch (action.type){
        case SEND_MESSAGE:
            stateCopy.MessageData = [...state.MessageData];
            let today = new Date().toLocaleDateString('en-GB');
            let newMessage = {id: 6, text: stateCopy.newMessageText, date: today, img: 'https://via.placeholder.com/60x80'}
            stateCopy.MessageData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy
        case CHANGE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.text;
            return stateCopy
        default:
            return state
    }

}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, text: text})

export default messagesReducer