import {auth} from "./authReducer";
import {AppStateType, InferActionsTypes} from "@/redux/redux-store.ts";
import {ThunkAction} from "redux-thunk";


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

export const initializeApp = ():ThunkType => async (dispatch) => {
    let authPromise = dispatch(auth());

    Promise.all([authPromise]).then( ():void => {
        dispatch(actions.initialProject())
    })
}

export default appReducer


type ThunkType = ThunkAction<Promise<void>, AppStateType, null, ActionsTypes>