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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileStatus_module_css_1 = __importDefault(require("./ProfileStatus.module.css"));
var react_1 = __importDefault(require("react"));
var ProfileStatus = /** @class */ (function (_super) {
    __extends(ProfileStatus, _super);
    function ProfileStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            editMode: false,
            status: _this.props.status
        };
        _this.onChangeStatus = function (e) {
            _this.setState({
                status: e.currentTarget.value
            });
        };
        _this.activateEditMode = function () {
            _this.setState({
                editMode: true
            });
        };
        _this.deActivateChangeEditMode = function () {
            _this.setState({
                editMode: false
            });
            _this.props.setProfileStatus(_this.state.status);
        };
        return _this;
    }
    ProfileStatus.prototype.componentDidUpdate = function (prevProps, prevState, SS) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    };
    ProfileStatus.prototype.render = function () {
        return (h("div", { className: ProfileStatus_module_css_1.default.profile_status }, !this.state.editMode ?
            h("p", { onDoubleClick: this.activateEditMode }, !this.props.status ? 'Empty status' : this.props.status) :
            h("input", { autoFocus: true, onChange: this.onChangeStatus, onBlur: this.deActivateChangeEditMode, value: this.state.status })));
    };
    return ProfileStatus;
}(react_1.default.Component));
exports.default = ProfileStatus;
