import {auth} from "./authReducer";

const SET_INITIALIZED = 'initApp/SET_INITIALIZED';


export type initialStateType = {
    initialized: boolean,
    globalError: null | string
}

let initialState:initialStateType = {
    initialized: false,
    globalError: null
}

const appReducer = (state:initialStateType = initialState, action: any): initialStateType => {
    switch (action.type){
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

type initialProjectActionType = {type: typeof SET_INITIALIZED}

export const initialProject = ():initialProjectActionType => ({type: SET_INITIALIZED})

export const initializeApp = () => async (dispatch:any):Promise<void> => {
    let authPromise = dispatch(auth());

    Promise.all([authPromise]).then( ():void => {
        dispatch(initialProject())
    })
}



export default appReducer