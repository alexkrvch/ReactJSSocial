"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxLengthCreator = exports.required = void 0;
exports.required = function (value) {
    if (value) {
        return undefined;
    }
    return 'Field is required';
};
exports.maxLengthCreator = function (maxLength) { return function (value) {
    if (value && value.length > maxLength)
        return "Max length is " + maxLength + " symbols";
    return undefined;
}; };
