"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_module_css_1 = __importDefault(require("./User.module.css"));
var react_router_dom_1 = require("react-router-dom");
var User = function (_a) {
    var id = _a.id, photos = _a.photos, name = _a.name, followed = _a.followed, follow = _a.follow, isFollowing = _a.isFollowing, unFollow = _a.unFollow, status = _a.status;
    return (h("div", { className: User_module_css_1.default.user },
        h(react_router_dom_1.NavLink, { to: "/profile/" + id },
            h("img", { className: User_module_css_1.default.img, src: photos.small != null ? photos.small : 'https://via.placeholder.com/100', alt: '' })),
        h("div", { className: User_module_css_1.default.info_center },
            h("div", { className: User_module_css_1.default.name }, name),
            h("div", { className: User_module_css_1.default.status }, status)),
        h("div", { className: User_module_css_1.default.info_right }, followed ?
            h("button", { disabled: isFollowing.some(function (ids) { return ids === id; }), onClick: function () { unFollow(id); } }, "UnFollow") :
            h("button", { disabled: isFollowing.some(function (ids) { return ids === id; }), onClick: function () { follow(id); } }, "Follow"))));
};
exports.default = User;
