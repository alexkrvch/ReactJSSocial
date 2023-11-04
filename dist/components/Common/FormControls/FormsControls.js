"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createField = exports.Input = exports.Textarea = void 0;
var FormsControls_module_css_1 = __importDefault(require("./FormsControls.module.css"));
var redux_form_1 = require("redux-form");
var FormControl = function (_a) {
    var input = _a.input, _b = _a.meta, touched = _b.touched, error = _b.error, props = __rest(_a, ["input", "meta"]);
    var hasError = touched && error;
    return (h("div", { className: FormsControls_module_css_1.default.form_control + " " + (hasError ? FormsControls_module_css_1.default.error : '') },
        props.children,
        hasError && h("span", null, error)));
};
exports.Textarea = function (props) {
    var input = props.input, meta = props.meta, restProps = __rest(props, ["input", "meta"]);
    return (h(FormControl, __assign({}, props),
        h("textarea", __assign({}, input, restProps))));
};
exports.Input = function (props) {
    var input = props.input, meta = props.meta, restProps = __rest(props, ["input", "meta"]);
    return (h(FormControl, __assign({}, props),
        h("input", __assign({}, input, restProps))));
};
exports.createField = function (placeholder, name, validators, component, props, text) { return h("div", null,
    h(redux_form_1.Field, __assign({ component: component, name: name }, props, { placeholder: placeholder, validate: validators })),
    " ",
    text); };
