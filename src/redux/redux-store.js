import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer,
    Navbar: navbarReducer
});

let store = createStore(reducers);

export default store