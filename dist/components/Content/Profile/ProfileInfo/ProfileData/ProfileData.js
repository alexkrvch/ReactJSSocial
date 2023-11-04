"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileInfo_module_css_1 = __importDefault(require("../ProfileInfo.module.css"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var ProfileData = function (_a) {
    var lookingForAJob = _a.lookingForAJob, contacts = _a.contacts, lookingForAJobDescription = _a.lookingForAJobDescription, aboutMe = _a.aboutMe, owner = _a.owner, onEditForm = _a.onEditForm, fullName = _a.fullName;
    return (h("div", { className: ProfileInfo_module_css_1.default.profile_content },
        owner && h("div", null,
            h("button", { onClick: function () { onEditForm(true); } }, "Edit")),
        h("p", null,
            "\u0418\u043C\u044F: ",
            fullName),
        h("p", null,
            "\u041F\u043E\u0438\u0441\u043A \u0440\u0430\u0431\u043E\u0442\u044B: ",
            lookingForAJob ? 'В поиске' : 'Не ищу работу'),
        h("p", null,
            "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u043E\u0438\u0441\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u044B: ",
            lookingForAJobDescription && lookingForAJobDescription),
        h("p", null,
            "About Me: ",
            aboutMe && aboutMe),
        h("div", { className: ProfileInfo_module_css_1.default.social_block },
            contacts.facebook ? h("a", { href: contacts.facebook, target: "_blank", rel: "noreferrer", className: "facebook" },
                h(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebook, size: '2x' })) : '',
            contacts.github ? h("a", { href: contacts.github, target: "_blank", rel: "noreferrer", className: "github" },
                h(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faGithub, size: '2x' })) : '',
            contacts.instagram ? h("a", { href: contacts.instagram, target: "_blank", rel: "noreferrer", className: "instagram" },
                h(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram, size: '2x' })) : '',
            contacts.twitter ? h("a", { href: contacts.twitter, target: "_blank", rel: "noreferrer", className: "twitter" },
                h(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTwitter, size: '2x' })) : '',
            contacts.vk ? h("a", { href: contacts.vk, target: "_blank", rel: "noreferrer", className: "vk" },
                h(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faVk, size: '2x' })) : '',
            contacts.website ? h("a", { href: contacts.website, target: "_blank", rel: "noreferrer", className: "website" },
                h(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faWeibo, size: '2x' })) : '',
            contacts.youtube ? h("a", { href: contacts.youtube, target: "_blank", rel: "noreferrer", className: "website" },
                h(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faYoutube, size: '2x' })) : '',
            contacts.mainLink ? h("a", { href: contacts.mainLink, target: "_blank", rel: "noreferrer", className: "website" },
                h(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faMendeley, size: '2x' })) : '')));
};
exports.default = ProfileData;
