import {auth} from "./authReducer";
import {InferActionsTypes} from "@/redux/redux-store.ts";


export type initialStateType = {
    initialized: boolean,
    globalError: null | string
}

let initialState:initialStateType = {
    initialized: false,
    globalError: null
}

const appReducer = (state:initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type){
        case 'initApp/SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    initialProject: () => ({type: 'initApp/SET_INITIALIZED'})
}

export const initializeApp = () => async (dispatch:any):Promise<void> => {
    let authPromise = dispatch(auth());

    Promise.all([authPromise]).then( ():void => {
        dispatch(actions.initialProject())
    })
}

export default appReducer