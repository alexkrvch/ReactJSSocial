
type initialStateType = {
    navItems:{
        id: number,
        link: string,
        text: string
    }[]
}

let initialState:initialStateType = {
    navItems: [
        {'id': 1, 'link': 'profile', 'text': 'Profile'},
        {'id': 2, 'link': 'users', 'text': 'Users'},
        {'id': 3, 'link': 'messages', 'text': 'Messages'},
        {'id': 4, 'link': 'news', 'text': 'News'},
        {'id': 5, 'link': 'music', 'text': 'Music'},
        {'id': 6, 'link': 'settings', 'text': 'Settings'}
    ]
}

const menuReducer = (state:initialStateType = initialState, action:any):initialStateType => {
    switch (action.type){
        default:
            return state;
    }
}

export default menuReducer