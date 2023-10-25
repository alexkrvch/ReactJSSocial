import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import appReducer from "./appReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer,
    Navbar: navbarReducer,
    Users: usersReducer,
    Auth: authReducer,
    App: appReducer,
    Menu: menuReducer,
    form: formReducer
});

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
    // other store enhancers if any
);
const store = createStore(reducers, enhancer);


//
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));
//
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store