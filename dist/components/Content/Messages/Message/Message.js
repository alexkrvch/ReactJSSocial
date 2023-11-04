"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Message_module_css_1 = __importDefault(require("./Message.module.css"));
var Messages = function (props) {
    return (h("div", { className: Message_module_css_1.default.message_item },
        h("div", { className: Message_module_css_1.default.message_img },
            h("img", { src: props.img, alt: "" })),
        h("div", { className: Message_module_css_1.default.message_content },
            h("div", { className: Message_module_css_1.default.message_text }, props.text),
            h("time", null, props.date))));
};
exports.default = Messages;
