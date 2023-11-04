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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveProfile = exports.savePhoto = exports.setProfileStatus = exports.getProfileStatus = exports.getProfile = exports.profileUpdateStatus = exports.savePhotoSuccess = exports.deletePost = exports.setStatus = exports.setUserId = exports.setUserProfile = exports.addPost = void 0;
var api_ts_1 = require("../api/api.ts");
var redux_form_1 = require("redux-form");
var ADD_POST = 'profile/ADD-POST';
var SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
var SET_USER_ID = 'profile/SET_USER_ID';
var SET_STATUS = 'profile/SET_STATUS';
var DELETE_POST = 'profile/DELETE_POST';
var SET_PHOTO = 'profile/SET_PHOTO';
var PROFILE_UPDATE_STATUS = 'profile/PROFILE_UPDATE_STATUS';
var initialState = {
    PostData: [
        { id: 1, header: 'First post', text: 'Nullam euismod,1 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 3, date: '09 September 2023' },
        { id: 2, header: 'Second post', text: 'Nullam euismod,2 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 5, date: '02 September 2023' },
        { id: 3, header: 'Next post', text: 'Nullam euismod,3 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 12, date: '28 August 2023' },
        { id: 4, header: 'New post', text: 'Nullam euismod,4 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 2, date: '21 August 2023' },
    ],
    profile: null,
    profileId: 1,
    status: '',
    profileUpdateStatus: 0
};
var profileReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_POST:
            var today = new Date().toLocaleDateString('en-GB');
            return __assign(__assign({}, state), { PostData: __spreadArrays(state.PostData, [{ id: 5, header: 'Def header', text: action.newPostText, countLikes: 0, date: today }]) });
        case DELETE_POST:
            return __assign(__assign({}, state), { PostData: state.PostData.filter(function (p) { return p.id !== action.id; }) });
        case SET_USER_PROFILE:
            return __assign(__assign({}, state), { profile: action.profile });
        case SET_USER_ID:
            return __assign(__assign({}, state), { profileId: action.id });
        case SET_STATUS:
            return __assign(__assign({}, state), { status: action.status });
        case SET_PHOTO:
            return __assign(__assign({}, state), { profile: __assign(__assign({}, state.profile), { photos: action.photos }) });
        case PROFILE_UPDATE_STATUS:
            return __assign(__assign({}, state), { profileUpdateStatus: action.status });
        default:
            return state;
    }
};
exports.addPost = function (newPostText) { return ({ type: ADD_POST, newPostText: newPostText }); };
exports.setUserProfile = function (profile) { return ({ type: SET_USER_PROFILE, profile: profile }); };
exports.setUserId = function (id) { return ({ type: SET_USER_ID, id: id }); };
exports.setStatus = function (status) { return ({ type: SET_STATUS, status: status }); };
exports.deletePost = function (id) { return ({ type: DELETE_POST, id: id }); };
exports.savePhotoSuccess = function (photos) { return ({ type: SET_PHOTO, photos: photos }); };
exports.profileUpdateStatus = function (status) { return ({ type: PROFILE_UPDATE_STATUS, status: status }); };
exports.getProfile = function (userId) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(exports.setUserId(userId));
                dispatch(exports.setUserProfile(null));
                return [4 /*yield*/, api_ts_1.profileAPI.getProfile(userId)];
            case 1:
                response = _a.sent();
                dispatch(exports.setUserProfile(response));
                return [2 /*return*/];
        }
    });
}); }; };
exports.getProfileStatus = function (userId) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_ts_1.profileAPI.getStatus(userId)];
            case 1:
                response = _a.sent();
                dispatch(exports.setStatus(response));
                return [2 /*return*/];
        }
    });
}); }; };
exports.setProfileStatus = function (status) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api_ts_1.profileAPI.setProfileStatus(status)];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    dispatch(exports.setStatus(status));
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.savePhoto = function (photo) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_ts_1.profileAPI.setPhoto(photo)];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    dispatch(exports.savePhotoSuccess(response.data.data.photos));
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.saveProfile = function (data, userId) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, responseProfile;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(exports.profileUpdateStatus(0));
                return [4 /*yield*/, api_ts_1.profileAPI.saveProfile(data)];
            case 1:
                response = _a.sent();
                if (!(response.data.resultCode === 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, api_ts_1.profileAPI.getProfile(userId)];
            case 2:
                responseProfile = _a.sent();
                dispatch(exports.setUserProfile(responseProfile));
                dispatch(exports.profileUpdateStatus(1));
                return [3 /*break*/, 4];
            case 3:
                dispatch(redux_form_1.stopSubmit('profile', { _error: response.data.messages }));
                dispatch(exports.profileUpdateStatus(2));
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); }; };
exports.default = profileReducer;
