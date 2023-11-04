"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var App_1 = __importDefault(require("./App"));
var redux_store_1 = __importDefault(require("./redux/redux-store"));
var react_redux_1 = require("react-redux");
test('renders learn react link', function () {
    var container = react_1.render(h(react_redux_1.Provider, { store: redux_store_1.default },
        h(App_1.default, null))).container;
    var box = container.getElementsByClassName('preloaderContainer');
    expect(box.length).toBe(1);
});
