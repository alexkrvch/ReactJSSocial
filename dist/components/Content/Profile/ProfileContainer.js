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
var react_1 = __importDefault(require("react"));
var Profile_1 = __importDefault(require("./Profile"));
var react_redux_1 = require("react-redux");
var profileReducer_ts_1 = require("../../../redux/profileReducer.ts");
var WithRouter_1 = __importDefault(require("../../Common/WithRouter/WithRouter"));
var redux_1 = require("redux");
var ProfileContainer = /** @class */ (function (_super) {
    __extends(ProfileContainer, _super);
    function ProfileContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileContainer.prototype.refreshProfile = function () {
        this.userId = !this.props.params.userId ? this.props.userId : this.props.params.userId;
        if (this.userId) {
            this.props.getProfile(this.userId);
            this.props.getProfileStatus(this.userId);
        }
        else {
            this.props.navigate('/login');
        }
    };
    ProfileContainer.prototype.componentDidMount = function () {
        this.refreshProfile();
    };
    ProfileContainer.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        this.currentID = !this.props.params.userId ? this.props.userId : this.props.params.userId;
        this.oldID = !prevProps.params.userId ? prevProps.userId : prevProps.params.userId;
        if (this.currentID !== this.oldID) {
            this.refreshProfile();
        }
    };
    ProfileContainer.prototype.render = function () {
        return (h("div", null,
            h(Profile_1.default, __assign({}, this.props, { userId: this.userId, owner: !this.props.params.userId, savePhoto: this.props.savePhoto, saveProfile: this.props.saveProfile }))));
    };
    return ProfileContainer;
}(react_1.default.Component));
var mapStateToProps = function (state) { return ({
    profile: state.ProfilePage.profile,
    userId: state.Auth.userId,
    isAuth: state.Auth.isAuth,
    status: state.ProfilePage.status,
    profileUpSt: state.ProfilePage.profileUpdateStatus
}); };
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, { getProfile: profileReducer_ts_1.getProfile, getProfileStatus: profileReducer_ts_1.getProfileStatus, setProfileStatus: profileReducer_ts_1.setProfileStatus, savePhoto: profileReducer_ts_1.savePhoto, saveProfile: profileReducer_ts_1.saveProfile }), WithRouter_1.default)(ProfileContainer);
