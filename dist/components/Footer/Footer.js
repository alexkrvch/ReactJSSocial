"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Footer_module_css_1 = __importDefault(require("./Footer.module.css"));
var Footer = function () {
    return (h("footer", { className: Footer_module_css_1.default.footer },
        h("div", { className: Footer_module_css_1.default.footer_container },
            h("div", { className: Footer_module_css_1.default.footer_section },
                h("h3", null, "About Us"),
                h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.")),
            h("div", { className: Footer_module_css_1.default.footer_section },
                h("h3", null, "Contact Us"),
                h("p", null,
                    "123 Main Street",
                    h("br", null),
                    "Anytown, USA 12345",
                    h("br", null),
                    "Phone: (123) 456-7890",
                    h("br", null),
                    "Email: info@example.com")),
            h("div", { className: Footer_module_css_1.default.footer_section },
                h("h3", null, "Follow Us"),
                h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod"))),
        h("div", { className: Footer_module_css_1.default.footer_section },
            h("p", null, "2021 Example Company. All rights reserved."))));
};
exports.default = Footer;
