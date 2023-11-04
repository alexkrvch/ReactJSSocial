"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("./User/User"));
var Users_module_css_1 = __importDefault(require("./Users.module.css"));
var Paginator_1 = __importDefault(require("../../Common/Pagination/Paginator"));
var Users = function (_a) {
    var currentPage = _a.currentPage, onChangePage = _a.onChangePage, totalCount = _a.totalCount, pageSize = _a.pageSize, users = _a.users, follow = _a.follow, unFollow = _a.unFollow, isFollowing = _a.isFollowing, partSize = _a.partSize;
    var usersMap = users.map(function (u) { return h(User_1.default, { key: u.id, id: u.id, name: u.name, photos: u.photos, status: u.status, followed: u.followed, follow: follow, unFollow: unFollow, isFollowing: isFollowing }); });
    return (h("div", { className: Users_module_css_1.default.users },
        h(Paginator_1.default, { currentPage: currentPage, totalCount: totalCount, pageSize: pageSize, onChangePage: onChangePage, partSize: partSize }),
        usersMap.length ? usersMap : 'Empty list'));
};
exports.default = Users;
