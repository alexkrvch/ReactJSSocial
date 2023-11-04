"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var profileReducer_ts_1 = require("../../../../redux/profileReducer.ts");
var MyPosts_1 = __importDefault(require("./MyPosts"));
var react_redux_1 = require("react-redux");
var mapStateToProps = function (state) {
    return {
        posts: state.ProfilePage.PostData
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        onAddPost: function (newPostText) { dispatch(profileReducer_ts_1.addPost(newPostText)); }
    };
};
var MyPostsContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MyPosts_1.default);
exports.default = MyPostsContainer;
