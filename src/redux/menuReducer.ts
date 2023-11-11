import {NavType} from "@/types/types.ts";
import {InferActionsTypes} from "@/redux/redux-store.ts";

type initialStateType = {
    navItems:NavType[]
}

let initialState:initialStateType = {
    navItems: [
        {'id': 1, 'link': 'profile', 'text': 'Profile'},
        {'id': 2, 'link': 'users', 'text': 'Users'},
        {'id': 3, 'link': 'messages', 'text': 'Messages'},
        {'id': 4, 'link': 'chat', 'text': 'Chat'},
        {'id': 5, 'link': 'news', 'text': 'News'},
        {'id': 6, 'link': 'music', 'text': 'Music'},
        {'id': 7, 'link': 'settings', 'text': 'Settings'}
    ]
}

const menuReducer = (state:initialStateType = initialState, action:ActionsTypes):initialStateType => {
    switch (action.type){
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    defaultAction: () => ({type: 'DEFAULT/NAVBAR'} as const)
}

export default menuReducer