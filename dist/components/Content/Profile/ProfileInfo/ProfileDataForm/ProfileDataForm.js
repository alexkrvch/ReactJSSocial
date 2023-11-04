"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileInfo_module_css_1 = __importDefault(require("../ProfileInfo.module.css"));
var FormsControls_1 = require("../../../../Common/FormControls/FormsControls");
var validators_1 = require("../../../../../utils/validators/validators");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var redux_form_1 = require("redux-form");
var react_1 = require("react");
var ProfileForm = function (_a) {
    var handleSubmit = _a.handleSubmit, lookingForAJob = _a.lookingForAJob, contacts = _a.contacts, lookingForAJobDescription = _a.lookingForAJobDescription, aboutMe = _a.aboutMe, owner = _a.owner, fullName = _a.fullName, initialize = _a.initialize, error = _a.error;
    react_1.useEffect(function () {
        var data = {
            "AboutMe": aboutMe,
            "contacts": contacts,
            "lookingForAJob": lookingForAJob,
            "LookingForAJobDescription": lookingForAJobDescription,
            "FullName": fullName
        };
        initialize(data);
    }, [lookingForAJob, contacts, lookingForAJobDescription, aboutMe, owner, fullName, initialize]);
    var errorsList;
    if (error) {
        errorsList = error.map(function (error) { return "<p>Error: " + error + "</p>"; });
    }
    return (h("form", { onSubmit: handleSubmit, className: ProfileInfo_module_css_1.default.profile_content },
        owner && h("div", null,
            h("button", null, "Save")),
        h("p", null, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"),
        FormsControls_1.createField('Имя', 'FullName', [validators_1.required], FormsControls_1.Input),
        h("p", null, "\u0412 \u043F\u043E\u0438\u0441\u043A\u0435 \u0440\u0430\u0431\u043E\u0442\u044B"),
        FormsControls_1.createField('В поиске работы', 'lookingForAJob', [], FormsControls_1.Input, { type: 'checkbox' }),
        h("p", null, "\u041C\u043E\u0438 \u0441\u043A\u0438\u043B\u043B\u044B"),
        FormsControls_1.createField('Мои скилы', 'LookingForAJobDescription', [validators_1.required], FormsControls_1.Input, { type: 'text' }),
        h("p", null, "\u041E\u0431\u043E \u043C\u043D\u0435"),
        FormsControls_1.createField('Обо мне', 'AboutMe', [validators_1.required], FormsControls_1.Textarea, { type: 'text' }),
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
        h("div", null, FormsControls_1.createField('facebook', 'contacts.facebook', [], FormsControls_1.Input, { type: 'text' })),
        h("div", null, FormsControls_1.createField('github', 'contacts.github', [], FormsControls_1.Input, { type: 'text' })),
        h("div", null, FormsControls_1.createField('instagram', 'contacts.instagram', [], FormsControls_1.Input, { type: 'text' })),
        h("div", null, FormsControls_1.createField('twitter', 'contacts.twitter', [], FormsControls_1.Input, { type: 'text' })),
        h("div", null, FormsControls_1.createField('vk', 'contacts.vk', [], FormsControls_1.Input, { type: 'text' })),
        h("div", null, FormsControls_1.createField('website', 'contacts.website', [], FormsControls_1.Input, { type: 'text' })),
        h("div", null, FormsControls_1.createField('youtube', 'contacts.youtube', [], FormsControls_1.Input, { type: 'text' })),
        h("div", null, FormsControls_1.createField('mainLink', 'contacts.mainLink', [], FormsControls_1.Input, { type: 'text' })),
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
                h(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faMendeley, size: '2x' })) : ''),
        error && h("div", { className: ProfileInfo_module_css_1.default.form_error }, errorsList)));
};
var ProfileReduxForm = redux_form_1.reduxForm({
    form: 'profile'
})(ProfileForm);
exports.default = ProfileReduxForm;
