let initialState = {
    navItems: [
        {'id': 1, 'link': 'profile', 'text': 'Profile'},
        {'id': 2, 'link': 'users', 'text': 'Users'},
        {'id': 3, 'link': 'messages', 'text': 'Messages'},
        {'id': 4, 'link': 'news', 'text': 'News'},
        {'id': 5, 'link': 'music', 'text': 'Music'},
        {'id': 6, 'link': 'settings', 'text': 'Settings'}
    ]
}

const menuReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default menuReducer