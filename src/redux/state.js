const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        ProfilePage: {
            PostData: [
                {id: 1, header: 'First post', text: 'Nullam euismod,1 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 3, date: '09 September 2023'},
                {id: 2, header: 'Second post', text: 'Nullam euismod,2 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 5, date: '02 September 2023'},
                {id: 3, header: 'Next post', text: 'Nullam euismod,3 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 12, date: '28 August 2023'},
                {id: 4, header: 'New post', text: 'Nullam euismod,4 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 2, date: '21 August 2023'},
            ],
            newPostText: ''
        },
        MessagesPage: {
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
        },
        Navbar: {
            Friends: [
                {id: 1, name: 'Alex', img: 'https://via.placeholder.com/60'},
                {id: 2, name: 'Mike', img: 'https://via.placeholder.com/60'},
                {id: 3, name: 'Andy', img: 'https://via.placeholder.com/60'}
            ],
        },
    },

    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state;
    },

    dispatch (action) {
        let today = new Date().toLocaleDateString('en-GB');
        switch (action.type){
            case ADD_POST:
                let newPost = {id: 5, header: 'Def header', text: this._state.ProfilePage.newPostText, countLikes: 0, date: today};
                this._state.ProfilePage.PostData.push(newPost);
                this._state.ProfilePage.newPostText = '';
                break;
            case CHANGE_NEW_POST_TEXT:
                this._state.ProfilePage.newPostText = action.text;
                break;
            case SEND_MESSAGE:
                let newMessage = {id: 6, text: this._state.MessagesPage.newMessageText, date: today, img: 'https://via.placeholder.com/60x80'}
                this._state.MessagesPage.MessageData.push(newMessage);
                this._state.MessagesPage.newMessageText = '';
                break;
            case CHANGE_NEW_MESSAGE_TEXT:
                this._state.MessagesPage.newMessageText = action.text;
                break;
            default:
                alert('Default case');
                break;
        }

        this._callSubscriber(this);
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, text: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, text: text})


window.store = store;

export default store;
