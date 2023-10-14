import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import menuReducer from "./menuReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer,
    Navbar: navbarReducer,
    Users: usersReducer,
    Auth: authReducer,
    Menu: menuReducer,
});

let store = createStore(reducers);

window.store = store;

export default store