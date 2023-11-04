"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Music_module_css_1 = __importDefault(require("./Music.module.css"));
var Music = function () {
    return (h("div", { className: Music_module_css_1.default.music_content }, "Music"));
};
exports.default = Music;
