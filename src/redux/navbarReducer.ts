import {FriendType} from "@/types/types.ts";
import {InferActionsTypes} from "@/redux/redux-store.ts";


type initialStateType = {
    Friends:FriendType[]
}

let initialState:initialStateType = {
    Friends: [
        {id: 1, name: 'Alex', img: 'https://via.placeholder.com/60'},
        {id: 2, name: 'Mike', img: 'https://via.placeholder.com/60'},
        {id: 3, name: 'Andy', img: 'https://via.placeholder.com/60'}
    ],
}

const navbarReducer = (state:initialStateType = initialState, action:ActionsTypes):initialStateType => {

    switch (action.type){
        default:
            return state
    }

}

type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    defaultAction: () => ({type: 'DEFAULT/NAVBAR'} as const)
}

export default navbarReducer