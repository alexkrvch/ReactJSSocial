import {auth} from "./authReducer";

const SET_INITIALIZED = 'initApp/SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
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

export const initialProject = () => ({type: SET_INITIALIZED})

export const initializeApp = () => async (dispatch) => {
    let authPromise = dispatch(auth());

    Promise.all([authPromise]).then( () => {
        dispatch(initialProject())
    })
}



export default appReducer