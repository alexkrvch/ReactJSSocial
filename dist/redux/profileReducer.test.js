"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var profileReducer_1 = __importStar(require("./profileReducer"));
var state = {
    PostData: [
        { id: 1, header: 'First post', text: 'Nullam euismod,1 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 3, date: '09 September 2023' },
        { id: 2, header: 'Second post', text: 'Nullam euismod,2 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 5, date: '02 September 2023' },
        { id: 3, header: 'Next post', text: 'Nullam euismod,3 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 12, date: '28 August 2023' },
        { id: 4, header: 'New post', text: 'Nullam euismod,4 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 2, date: '21 August 2023' },
    ],
    profile: null,
    profileId: 1,
    status: ''
};
it('new post should be added', function () {
    // 1. test data
    var action = profileReducer_1.addPost('Hi test');
    // 2. action
    var newState = profileReducer_1.default(state, action);
    // 3. expectation
    expect(newState.PostData.length).toBe(5);
});
it("test text in the new post text", function () {
    // 1. test data
    var action = profileReducer_1.addPost('Hi test');
    // 2. action
    var newState = profileReducer_1.default(state, action);
    // 3. expectation
    expect(newState.PostData[4].text).toBe('Hi test');
});
it('delete post', function () {
    // 1. test data
    var action = profileReducer_1.deletePost(1);
    // 2. action
    var newState = profileReducer_1.default(state, action);
    // 3. expectation
    expect(newState.PostData.length).toBe(3);
});
it('after delete post dont change after incorrect ID', function () {
    // 1. test data
    var action = profileReducer_1.deletePost(200);
    // 2. action
    var newState = profileReducer_1.default(state, action);
    // 3. expectation
    expect(newState.PostData.length).toBe(4);
});