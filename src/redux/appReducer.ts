import {auth} from "./authReducer";

const SET_INITIALIZED:string = 'initApp/SET_INITIALIZED';

let initialState: {initialized: boolean}  = {
    initialized: false
}

const appReducer = (state: {initialized: boolean} = initialState, action: {type: string}) => {
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

export const initialProject = ():{type: string} => ({type: SET_INITIALIZED})

export const initializeApp = () => async (dispatch:Function) => {
    let authPromise = dispatch(auth());

    Promise.all([authPromise]).then( ():void => {
        dispatch(initialProject())
    })
}



export default appReducer