"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Messages_module_css_1 = __importDefault(require("./Messages.module.css"));
var Dialog_1 = __importDefault(require("./Dialog/Dialog"));
var Message_1 = __importDefault(require("./Message/Message"));
var redux_form_1 = require("redux-form");
var validators_1 = require("../../../utils/validators/validators");
var FormsControls_1 = require("../../Common/FormControls/FormsControls");
var maxLength100 = validators_1.maxLengthCreator(100);
var newMessageForm = function (props) {
    return (h("form", { onSubmit: props.handleSubmit, className: Messages_module_css_1.default.form },
        h(redux_form_1.Field, { component: FormsControls_1.Textarea, name: 'newMessageText', placeholder: 'New message', validate: [validators_1.required, maxLength100] }),
        h("button", null, "Send")));
};
var NewMessageReduxForm = redux_form_1.reduxForm({ form: 'newMessage' })(newMessageForm);
var Messages = function (props) {
    var dialogsElements = props.dialogsData.map(function (u) { return h(Dialog_1.default, { key: u.id, name: u.name, id: u.id }); });
    var messagesElements = props.messagesData.map(function (m) { return h(Message_1.default, { key: m.id, text: m.text, date: m.date, img: m.img }); });
    var sendMessage = function (data) {
        props.onSendMessage(data.newMessageText);
    };
    return (h("div", { className: Messages_module_css_1.default.messages_content },
        h("div", { className: Messages_module_css_1.default.messages_left }, dialogsElements),
        h("div", { className: Messages_module_css_1.default.messages_right },
            messagesElements,
            h("hr", null),
            h(NewMessageReduxForm, { onSubmit: sendMessage }))));
};
exports.default = Messages;
