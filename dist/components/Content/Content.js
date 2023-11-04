"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Content_module_css_1 = __importDefault(require("./Content.module.css"));
var react_router_dom_1 = require("react-router-dom");
var News_1 = __importDefault(require("./News/News"));
var Music_1 = __importDefault(require("./Music/Music"));
var Settings_1 = __importDefault(require("./Settings/Settings"));
var UsersContainer_1 = __importDefault(require("./Users/UsersContainer"));
var Login_1 = __importDefault(require("./Login/Login"));
var withSuspense_1 = require("../../hoc/withSuspense");
var ProfileContainer = withSuspense_1.withSuspense(react_1.lazy(function () { return Promise.resolve().then(function () { return __importStar(require("./Profile/ProfileContainer")); }); }));
var MessagesContainer = withSuspense_1.withSuspense(react_1.lazy(function () { return Promise.resolve().then(function () { return __importStar(require("./Messages/MessagesContainer")); }); }));
var Content = function (props) {
    return (h("div", { className: Content_module_css_1.default.content_page },
        h(react_router_dom_1.Routes, null,
            h(react_router_dom_1.Route, { path: '/', element: h(react_router_dom_1.Navigate, { to: '/profile' }) }),
            h(react_router_dom_1.Route, { path: '/profile', element: h(ProfileContainer, null) }),
            h(react_router_dom_1.Route, { path: '/profile/:userId', element: h(ProfileContainer, null) }),
            h(react_router_dom_1.Route, { path: '/users', element: h(UsersContainer_1.default, null) }),
            h(react_router_dom_1.Route, { path: '/messages', element: h(MessagesContainer, null) }),
            h(react_router_dom_1.Route, { path: '/messages/:dialogid', element: h(MessagesContainer, null) }),
            h(react_router_dom_1.Route, { path: '/news', element: h(News_1.default, null) }),
            h(react_router_dom_1.Route, { path: '/music', element: h(Music_1.default, null) }),
            h(react_router_dom_1.Route, { path: '/settings', element: h(Settings_1.default, null) }),
            h(react_router_dom_1.Route, { path: '/login', element: h(Login_1.default, null) }),
            h(react_router_dom_1.Route, { path: '*', element: h("div", null, "Error 404") }))));
};
exports.default = Content;
