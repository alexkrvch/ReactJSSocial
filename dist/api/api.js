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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileAPI = exports.securityAPI = exports.accountAPI = exports.followAPI = exports.usersAPI = void 0;
var axios_1 = __importDefault(require("axios"));
var configAxios = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '9698416d-3981-4d08-944f-5e79cc4c07cc'
    }
};
var instance = axios_1.default.create(configAxios);
exports.usersAPI = {
    getUsers: function (currentPage, pageSize) {
        return instance.get("users?page=" + currentPage + "&count=" + pageSize).then(function (response) { return response.data; });
    }
};
exports.followAPI = {
    unFollow: function (id) {
        return instance.delete("follow/" + id).then(function (response) { return response.data; });
    },
    follow: function (id) {
        return instance.post("follow/" + id).then(function (response) { return response.data; });
    }
};
exports.accountAPI = {
    my: function () {
        return instance.get("auth/me").then(function (response) { return response.data; });
    },
    login: function (email, password, rememberMe, captcha) {
        if (rememberMe === void 0) { rememberMe = false; }
        if (captcha === void 0) { captcha = ''; }
        return instance.post("auth/login", { email: email, password: password, rememberMe: rememberMe, captcha: captcha }).then(function (response) { return response.data; });
    },
    logout: function () {
        return instance.delete("auth/login").then(function (response) { return response.data; });
    }
};
exports.securityAPI = {
    getCaptcha: function () {
        return instance.get("security/get-captcha-url").then(function (response) { return response.data; });
    }
};
exports.profileAPI = {
    getProfile: function (userId) {
        return instance.get("profile/" + userId).then(function (response) { return response.data; });
    },
    getStatus: function (userId) {
        return instance.get("profile/status/" + userId).then(function (response) { return response.data; });
    },
    setProfileStatus: function (status) {
        return instance.put("profile/status", {
            status: status
        });
    },
    setPhoto: function (photo) {
        var formData = new FormData();
        formData.append("image", photo);
        return instance.put("profile/photo", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile: function (data) {
        return instance.put("profile", __assign({}, data));
    }
};
