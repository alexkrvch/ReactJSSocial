"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Settings_module_css_1 = __importDefault(require("./Settings.module.css"));
var Settings = function () {
    return (h("div", { className: Settings_module_css_1.default.settings_content }, "Settings"));
};
exports.default = Settings;
