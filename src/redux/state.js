import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

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

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.MessagesPage = messagesReducer(this._state.MessagesPage, action)

        this._callSubscriber(this);
    }
}


window.store = store;

export default store;
