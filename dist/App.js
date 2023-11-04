"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var NavContainer_1 = __importDefault(require("./components/Nav/NavContainer"));
var Content_1 = __importDefault(require("./components/Content/Content"));
var Footer_tsx_1 = __importDefault(require("./components/Footer/Footer.tsx"));
var react_router_dom_1 = require("react-router-dom");
var HeaderContainer_1 = __importDefault(require("./components/Header/HeaderContainer"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var appReducer_ts_1 = require("./redux/appReducer.ts");
var Preloader_tsx_1 = __importDefault(require("./components/Common/Preloader/Preloader.tsx"));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.catchAllUnhandledErrors = function (error) {
            alert('some error');
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };
    App.prototype.componentWillUnmount = function () {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };
    App.prototype.render = function () {
        if (!this.props.initialized) {
            return h(Preloader_tsx_1.default, null);
        }
        return (h(react_router_dom_1.BrowserRouter, { basename: process.env.PUBLIC_URL },
            h("div", { className: "App" },
                h("div", { className: "App-content" },
                    h(HeaderContainer_1.default, null),
                    h("div", { className: "App-centerPage" },
                        h(NavContainer_1.default, null),
                        h(Content_1.default, null)),
                    h(Footer_tsx_1.default, null)))));
    };
    return App;
}(react_1.Component));
var mapStateToProps = function (state) { return ({
    initialized: state.App.initialized
}); };
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, { initializeApp: appReducer_ts_1.initializeApp }))(App);
