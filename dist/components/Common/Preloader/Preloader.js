"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Preloader_module_css_1 = __importDefault(require("./Preloader.module.css"));
var Preloader = function () {
    return (h("div", { className: Preloader_module_css_1.default.preloaderContainer },
        h("svg", { width: "300", height: "300", viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", stroke: "#fff" },
            h("g", { fill: "none", fillRule: "evenodd" },
                h("g", { transform: "translate(1 1)", strokeWidth: "1" },
                    h("circle", { strokeOpacity: ".05", cx: "18", cy: "18", r: "18" }),
                    h("path", { d: "M36 18c0-9.94-8.06-18-18-18" },
                        h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))))));
};
exports.default = Preloader;
