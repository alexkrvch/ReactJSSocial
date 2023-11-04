"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
var App_tsx_1 = __importDefault(require("./App.tsx"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
var redux_store_ts_1 = __importDefault(require("./redux/redux-store.ts"));
var react_redux_1 = require("react-redux");
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(h(react_1.default.StrictMode, null,
    h(react_redux_1.Provider, { store: redux_store_ts_1.default },
        h(App_tsx_1.default, null))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1.default();
