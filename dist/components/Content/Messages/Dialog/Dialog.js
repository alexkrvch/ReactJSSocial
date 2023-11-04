"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog_module_css_1 = __importDefault(require("./Dialog.module.css"));
var react_router_dom_1 = require("react-router-dom");
var Messages = function (props) {
    return (h(react_router_dom_1.NavLink, { to: "/messages/" + props.id, className: function (_a) {
            var isActive = _a.isActive;
            return isActive ? Dialog_module_css_1.default.user + " " + Dialog_module_css_1.default.active : Dialog_module_css_1.default.user;
        } }, props.name));
};
exports.default = Messages;
