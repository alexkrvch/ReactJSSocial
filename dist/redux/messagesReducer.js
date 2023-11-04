"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageActionCreator = void 0;
var SEND_MESSAGE = 'message/SEND-MESSAGE';
var initialState = {
    DialogData: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Nast' },
        { id: 3, name: 'Dmitry' },
        { id: 4, name: 'Evgeny' },
        { id: 5, name: 'Yan' },
        { id: 6, name: 'Alber' },
        { id: 7, name: 'Poul' }
    ],
    MessageData: [
        { id: 1, text: 'Hi Alex', date: '08 September 2023', img: 'https://via.placeholder.com/60x40' },
        { id: 2, text: 'Hey Nasty, how are you?', date: '10 September 2023', img: 'https://via.placeholder.com/60x80' },
        { id: 3, text: 'Im okay, but so busy, what about you?', date: '10 September 2023', img: 'https://via.placeholder.com/60x40' },
        { id: 4, text: 'Im so good, im now in usa', date: '11 September 2023', img: 'https://via.placeholder.com/60x80' },
        { id: 5, text: 'Wow, its so cool, what are you do?', date: '13 September 2023', img: 'https://via.placeholder.com/60x40' }
    ]
};
var messagesReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SEND_MESSAGE:
            var today = new Date().toLocaleDateString('en-GB');
            return __assign(__assign({}, state), { MessageData: __spreadArrays(state.MessageData, [{ id: 6, text: action.newMessageText, date: today, img: 'https://via.placeholder.com/60x80' }]) });
        default:
            return state;
    }
};
exports.sendMessageActionCreator = function (newMessageText) { return ({ type: SEND_MESSAGE, newMessageText: newMessageText }); };
exports.default = messagesReducer;
