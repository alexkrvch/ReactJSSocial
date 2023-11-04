"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Nav_1 = __importDefault(require("./Nav"));
var mapStateToProps = function (state) {
    return {
        friends: state.Navbar.Friends,
        menu: state.Menu.navItems
    };
};
var mapDispatchToProps = function (dispatch) {
    return {};
};
var NavContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Nav_1.default);
exports.default = NavContainer;
