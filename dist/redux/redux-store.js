"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var profileReducer_ts_1 = __importDefault(require("./profileReducer.ts"));
var messagesReducer_ts_1 = __importDefault(require("./messagesReducer.ts"));
var navbarReducer_ts_1 = __importDefault(require("./navbarReducer.ts"));
var usersReducer_ts_1 = __importDefault(require("./usersReducer.ts"));
var authReducer_ts_1 = __importDefault(require("./authReducer.ts"));
var menuReducer_ts_1 = __importDefault(require("./menuReducer.ts"));
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var redux_form_1 = require("redux-form");
var appReducer_ts_1 = __importDefault(require("./appReducer.ts"));
var reducers = redux_1.combineReducers({
    ProfilePage: profileReducer_ts_1.default,
    MessagesPage: messagesReducer_ts_1.default,
    Navbar: navbarReducer_ts_1.default,
    Users: usersReducer_ts_1.default,
    Auth: authReducer_ts_1.default,
    App: appReducer_ts_1.default,
    Menu: menuReducer_ts_1.default,
    form: redux_form_1.reducer
});
var composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
    })
    : redux_1.compose;
var enhancer = composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default));
var store = redux_1.createStore(reducers, enhancer);
window.store = store;
exports.default = store;
