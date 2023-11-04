"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileStatus_module_css_1 = __importDefault(require("./ProfileStatus.module.css"));
var react_1 = require("react");
var ProfileStatusWithHooks = function (props) {
    var _a = react_1.useState(false), editMode = _a[0], setEditMode = _a[1];
    var _b = react_1.useState(props.status), status = _b[0], setStatus = _b[1];
    react_1.useEffect(function () {
        setStatus(props.status);
    }, [props.status]);
    var activateMode = function () {
        setEditMode(true);
    };
    var deActivateMode = function () {
        setEditMode(false);
        props.setProfileStatus(status);
    };
    var onChangeStatus = function (e) {
        setStatus(e.currentTarget.value);
    };
    return (h("div", { className: ProfileStatus_module_css_1.default.profile_status }, !editMode ?
        h("p", { onDoubleClick: activateMode }, !props.status ? 'Empty status' : props.status) :
        h("input", { autoFocus: true, onChange: onChangeStatus, onBlur: deActivateMode, value: status })));
};
exports.default = ProfileStatusWithHooks;
