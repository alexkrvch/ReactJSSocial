"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAuthRedirect = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var mapStateToPropsRed = function (state) { return ({
    isAuth: state.Auth.isAuth
}); };
exports.withAuthRedirect = function (Component) {
    var RedirectComponent = /** @class */ (function (_super) {
        __extends(RedirectComponent, _super);
        function RedirectComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RedirectComponent.prototype.render = function () {
            if (!this.props.isAuth) {
                return h(react_router_dom_1.Navigate, { to: "/login" });
            }
            return h(Component, __assign({}, this.props));
        };
        return RedirectComponent;
    }(react_1.default.Component));
    return react_redux_1.connect(mapStateToPropsRed, {})(RedirectComponent);
};
