"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MyPosts_module_css_1 = __importDefault(require("./MyPosts.module.css"));
var react_1 = __importDefault(require("react"));
var Post_1 = __importDefault(require("./Post/Post"));
var redux_form_1 = require("redux-form");
var validators_1 = require("../../../../utils/validators/validators");
var FormsControls_1 = require("../../../Common/FormControls/FormsControls");
var maxLength30 = validators_1.maxLengthCreator(30);
var NewPostForm = function (props) {
    return (h("form", { onSubmit: props.handleSubmit, className: MyPosts_module_css_1.default.form },
        h(redux_form_1.Field, { component: FormsControls_1.Textarea, placeholder: 'Post message', name: "newPostText", validate: [validators_1.required, maxLength30] }),
        h("button", null, "Send")));
};
var NewPostReduxForm = redux_form_1.reduxForm({ form: 'addPost' })(NewPostForm);
var MyPosts = react_1.default.memo(function (props) {
    var postsElements = props.posts.map(function (p) { return h(Post_1.default, { key: p.id, header: p.header, text: p.text, countLikes: p.countLikes, date: p.date }); });
    var addNewMessage = function (data) {
        props.onAddPost(data.newPostText);
    };
    return (h("div", { className: MyPosts_module_css_1.default.my_posts },
        h("hr", null),
        h(NewPostReduxForm, { onSubmit: addNewMessage }),
        h("hr", null),
        postsElements));
});
exports.default = MyPosts;
