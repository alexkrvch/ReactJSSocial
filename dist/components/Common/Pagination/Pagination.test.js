"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Paginator_1 = __importDefault(require("./Paginator"));
var react_test_renderer_1 = require("react-test-renderer");
describe('Paginator', function () {
    test('Show pagination buttons', function () {
        var component = react_test_renderer_1.create(h(Paginator_1.default, { partSize: 20, pageSize: 20, totalCount: 10000, currentPage: 5 }));
        var root = component.root;
        var spans = root.findAllByType('span');
        expect(spans.length).toBe(20);
    });
    test('Show next / prev buttons', function () {
        var component = react_test_renderer_1.create(h(Paginator_1.default, { partSize: 20, pageSize: 20, totalCount: 10000, currentPage: 20 }));
        var root = component.root;
        var buttons = root.findAllByType('button');
        expect(buttons.length).toBe(2);
    });
});
