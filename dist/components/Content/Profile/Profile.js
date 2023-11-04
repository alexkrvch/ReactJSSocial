"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileInfo_1 = __importDefault(require("./ProfileInfo/ProfileInfo"));
var MyPostsContainer_1 = __importDefault(require("./MyPosts/MyPostsContainer"));
var Preloader_1 = __importDefault(require("../../Common/Preloader/Preloader"));
var Profile = function (props) {
    if (!props.profile) {
        return h(Preloader_1.default, null);
    }
    return (h("div", null,
        h(ProfileInfo_1.default, { profile: props.profile, status: props.status, savePhoto: props.savePhoto, setProfileStatus: props.setProfileStatus, owner: props.owner, saveProfile: props.saveProfile, userId: props.userId, profileUpSt: props.profileUpSt }),
        props.owner ? h(MyPostsContainer_1.default, null) : ''));
};
exports.default = Profile;
