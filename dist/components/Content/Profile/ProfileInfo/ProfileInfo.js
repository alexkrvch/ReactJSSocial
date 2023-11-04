"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileInfo_module_css_1 = __importDefault(require("./ProfileInfo.module.css"));
var ProfileStatusWithHooks_1 = __importDefault(require("./ProfileStatus/ProfileStatusWithHooks"));
var react_1 = require("react");
var ProfileDataForm_1 = __importDefault(require("./ProfileDataForm/ProfileDataForm"));
var ProfileData_1 = __importDefault(require("./ProfileData/ProfileData"));
var Profile = function (_a) {
    var _b = _a.profile, photos = _b.photos, fullName = _b.fullName, lookingForAJob = _b.lookingForAJob, contacts = _b.contacts, lookingForAJobDescription = _b.lookingForAJobDescription, aboutMe = _b.aboutMe, status = _a.status, owner = _a.owner, setProfileStatus = _a.setProfileStatus, savePhoto = _a.savePhoto, saveProfile = _a.saveProfile, userId = _a.userId, profileUpSt = _a.profileUpSt;
    var _c = react_1.useState(false), editMode = _c[0], setEditMode = _c[1];
    var onEditForm = function (value) {
        setEditMode(value);
    };
    react_1.useEffect(function () {
        if (profileUpSt === 1) {
            setEditMode(false);
        }
    }, [profileUpSt]);
    var onMainPhotoSel = function (e) {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };
    var onSubmit = function (formData) {
        saveProfile(formData, userId);
    };
    return (h("div", null,
        h("div", { className: ProfileInfo_module_css_1.default.profile_back },
            h("img", { src: "https://via.placeholder.com/1456x200", alt: "" })),
        owner && h("input", { type: 'file', onChange: onMainPhotoSel }),
        h("div", { className: ProfileInfo_module_css_1.default.profile_header },
            h("img", { src: photos.large != null ? photos.large : 'https://via.placeholder.com/150', alt: "" }),
            h("h2", null, fullName),
            h(ProfileStatusWithHooks_1.default, { status: status, setProfileStatus: setProfileStatus })),
        !editMode ?
            h(ProfileData_1.default, { onEditForm: onEditForm, owner: owner, fullName: fullName, lookingForAJob: lookingForAJob, contacts: contacts, lookingForAJobDescription: lookingForAJobDescription, aboutMe: aboutMe }) :
            h(ProfileDataForm_1.default, { onSubmit: onSubmit, onEditForm: onEditForm, owner: owner, fullName: fullName, lookingForAJob: lookingForAJob, contacts: contacts, lookingForAJobDescription: lookingForAJobDescription, aboutMe: aboutMe })));
};
exports.default = Profile;
