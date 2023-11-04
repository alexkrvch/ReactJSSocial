"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nav_module_css_1 = __importDefault(require("./Nav.module.css"));
var Friend_1 = __importDefault(require("./Friend/Friend"));
var NavItem_1 = __importDefault(require("./NavItem/NavItem"));
var Nav = function (props) {
    var friends = props.friends.map(function (f) { return h(Friend_1.default, { key: f.id, name: f.name, id: f.id, img: f.img }); });
    var nav = props.menu.map(function (n) { return h(NavItem_1.default, { key: n.id, link: n.link, text: n.text }); });
    return (h("nav", { className: Nav_module_css_1.default.sidebar_nav },
        h("div", { className: Nav_module_css_1.default.sidebar },
            h("ul", { className: Nav_module_css_1.default.sidebar_menu }, nav),
            h("hr", null),
            h("div", { className: Nav_module_css_1.default.sidebar_friends }, friends))));
};
exports.default = Nav;
