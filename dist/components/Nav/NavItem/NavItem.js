"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NavItem_module_css_1 = __importDefault(require("./NavItem.module.css"));
var react_router_dom_1 = require("react-router-dom");
var NavItem = function (props) {
    return (h("li", { className: NavItem_module_css_1.default.menu_item },
        h(react_router_dom_1.NavLink, { to: "/" + props.link, className: function (_a) {
                var isActive = _a.isActive;
                return isActive ? NavItem_module_css_1.default.menu_active : "";
            } }, props.text)));
};
exports.default = NavItem;
