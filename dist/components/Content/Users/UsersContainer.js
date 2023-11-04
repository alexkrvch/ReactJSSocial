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
var react_redux_1 = require("react-redux");
var usersReducer_ts_1 = require("../../../redux/usersReducer.ts");
var react_1 = __importDefault(require("react"));
var Users_1 = __importDefault(require("./Users"));
var Preloader_1 = __importDefault(require("../../Common/Preloader/Preloader"));
var redux_1 = require("redux");
var usersSelectors_1 = require("../../../redux/usersSelectors");
var UsersContainer = /** @class */ (function (_super) {
    __extends(UsersContainer, _super);
    function UsersContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.follow = function (id) {
            _this.props.followUser(id);
        };
        _this.unFollow = function (id) {
            _this.props.unFollowUser(id);
        };
        _this.onChangePage = function (p) {
            _this.props.requestUsers(p, _this.props.pageSize);
        };
        _this.render = function () {
            return (h(react_1.default.Fragment, null, _this.props.isFetching ? h(Preloader_1.default, null) : h(Users_1.default, { isFollowing: _this.props.isFollowing, users: _this.props.users, totalCount: _this.props.totalCount, partSize: _this.props.partSize, pageSize: _this.props.pageSize, follow: _this.follow, unFollow: _this.unFollow, currentPage: _this.props.currentPage, onChangePage: _this.onChangePage })));
        };
        return _this;
    }
    UsersContainer.prototype.componentDidMount = function () {
        var _a = this.props, currentPage = _a.currentPage, pageSize = _a.pageSize;
        this.props.requestUsers(currentPage, pageSize);
    };
    return UsersContainer;
}(react_1.default.Component));
var mapStateToProps = function (state) {
    return {
        users: usersSelectors_1.getUsers(state),
        pageSize: usersSelectors_1.getPageSize(state),
        totalCount: usersSelectors_1.getTotalCount(state),
        currentPage: usersSelectors_1.getCurrentPage(state),
        isFetching: usersSelectors_1.getIsFetching(state),
        isFollowing: usersSelectors_1.getIsFollowing(state),
        partSize: usersSelectors_1.getPartSize(state)
    };
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, { requestUsers: usersReducer_ts_1.requestUsers, unFollowUser: usersReducer_ts_1.unFollowUser, followUser: usersReducer_ts_1.followUser }))(UsersContainer);
