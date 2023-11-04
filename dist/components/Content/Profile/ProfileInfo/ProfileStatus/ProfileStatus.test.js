"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileStatus_1 = __importDefault(require("./ProfileStatus"));
var react_test_renderer_1 = require("react-test-renderer");
describe('Status component', function () {
    test('it shows span with status', function () {
        var component = react_test_renderer_1.create(h(ProfileStatus_1.default, { status: 'Current status' }));
        var instance = component.getInstance();
        expect(instance.state.status).toBe('Current status');
    });
    test('show span after render with editMode false', function () {
        var component = react_test_renderer_1.create(h(ProfileStatus_1.default, { status: 'Current status' }));
        var paragraph = component.root.findByType('p');
        expect(paragraph).not.toBeNull();
    });
    test('show input after render with editMode false', function () {
        var component = react_test_renderer_1.create(h(ProfileStatus_1.default, { status: 'Current status' }));
        expect(function () {
            component.root.findByType('input');
        }).toThrow();
    });
    test('test current status in paragraph', function () {
        var component = react_test_renderer_1.create(h(ProfileStatus_1.default, { status: 'Current status' }));
        var paragraph = component.root.findByType('p');
        expect(paragraph.children[0]).toBe('Current status');
    });
    test('input should be display in editMode', function () {
        var component = react_test_renderer_1.create(h(ProfileStatus_1.default, { status: 'Current status' }));
        var paragraph = component.root.findByType('p');
        paragraph.props.onDoubleClick();
        var input = component.root.findByType('input');
        expect(input.props.value).toBe('Current status');
    });
    test('callback should be called', function () {
        var mockCallback = jest.fn();
        var component = react_test_renderer_1.create(h(ProfileStatus_1.default, { status: 'Current status', setProfileStatus: mockCallback }));
        var instance = component.getInstance();
        instance.deActivateChangeEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
