"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartSize = exports.getIsFollowing = exports.getIsFetching = exports.getCurrentPage = exports.getTotalCount = exports.getPageSize = exports.getUsers = void 0;
var reselect_1 = require("reselect");
var getUsersSelector = function (state) {
    return state.Users.UsersList;
};
exports.getUsers = reselect_1.createSelector(getUsersSelector, function (users) {
    return users.filter(function (u) { return true; });
});
exports.getPageSize = function (state) {
    return state.Users.pageSize;
};
exports.getTotalCount = function (state) {
    return state.Users.totalCount;
};
exports.getCurrentPage = function (state) {
    return state.Users.currentPage;
};
exports.getIsFetching = function (state) {
    return state.Users.isFetching;
};
exports.getIsFollowing = function (state) {
    return state.Users.followingInProgress;
};
exports.getPartSize = function (state) {
    return state.Users.partSize;
};
