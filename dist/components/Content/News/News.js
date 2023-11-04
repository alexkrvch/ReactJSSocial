"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var News_module_css_1 = __importDefault(require("./News.module.css"));
var News = function () {
    return (h("div", { className: News_module_css_1.default.news_content }, "News"));
};
exports.default = News;
