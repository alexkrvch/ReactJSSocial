"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Post_module_css_1 = __importDefault(require("./Post.module.css"));
var Post = function (props) {
    return (h("div", { className: Post_module_css_1.default.post },
        h("div", { className: Post_module_css_1.default.post_img },
            h("img", { src: "https://via.placeholder.com/80", alt: "" })),
        h("div", { className: Post_module_css_1.default.post_content },
            h("h3", { className: Post_module_css_1.default.post_name }, props.header),
            h("div", { className: Post_module_css_1.default.post_body }, props.text),
            h("time", null, props.date),
            h("div", { className: Post_module_css_1.default.like_section },
                h("span", null,
                    h("span", { className: Post_module_css_1.default.like_count }, props.countLikes),
                    " Like")))));
};
exports.default = Post;
