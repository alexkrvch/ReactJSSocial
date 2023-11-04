"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var messagesReducer_ts_1 = require("../../../redux/messagesReducer.ts");
var Messages_1 = __importDefault(require("./Messages"));
var react_redux_1 = require("react-redux");
var withAuthRedirect_1 = require("../../../hoc/withAuthRedirect");
var redux_1 = require("redux");
var mapStateToProps = function (state) {
    return {
        dialogsData: state.MessagesPage.DialogData,
        messagesData: state.MessagesPage.MessageData
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        onSendMessage: function (newMessageText) { dispatch(messagesReducer_ts_1.sendMessageActionCreator(newMessageText)); }
    };
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps), withAuthRedirect_1.withAuthRedirect)(Messages_1.default);
