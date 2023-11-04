"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logo_svg_1 = __importDefault(require("../../logo.svg"));
var Header_module_css_1 = __importDefault(require("./Header.module.css"));
var react_router_dom_1 = require("react-router-dom");
var Header = function (props) {
    return (h("header", { className: Header_module_css_1.default.header_page },
        h("img", { alt: "", className: Header_module_css_1.default.logo, src: logo_svg_1.default }),
        "WebArcticFox React",
        h("div", { className: Header_module_css_1.default.auth_section }, !props.isAuth ? h(react_router_dom_1.NavLink, { to: "/login" }, "Login") : h("div", null,
            props.login,
            " ",
            h("button", { onClick: props.logout }, "Log Out")))));
};
exports.default = Header;
