"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = {
    navItems: [
        { 'id': 1, 'link': 'profile', 'text': 'Profile' },
        { 'id': 2, 'link': 'users', 'text': 'Users' },
        { 'id': 3, 'link': 'messages', 'text': 'Messages' },
        { 'id': 4, 'link': 'news', 'text': 'News' },
        { 'id': 5, 'link': 'music', 'text': 'Music' },
        { 'id': 6, 'link': 'settings', 'text': 'Settings' }
    ]
};
var menuReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default:
            return state;
    }
};
exports.default = menuReducer;
