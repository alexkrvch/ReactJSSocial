import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer.ts";
import messagesReducer from "./messagesReducer.ts";
import navbarReducer from "./navbarReducer.ts";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer.ts";
import menuReducer from "./menuReducer.ts";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import appReducer from "./appReducer.ts";

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
);
const store = createStore(reducers, enhancer);

window.store = store;

export default store