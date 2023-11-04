"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Friend_module_css_1 = __importDefault(require("./Friend.module.css"));
var Nav = function (props) {
    return (h("div", { className: Friend_module_css_1.default.friend },
        h("img", { src: props.img, alt: props.name }),
        h("span", null, props.name)));
};
exports.default = Nav;
