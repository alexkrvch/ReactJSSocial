"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = {
    Friends: [
        { id: 1, name: 'Alex', img: 'https://via.placeholder.com/60' },
        { id: 2, name: 'Mike', img: 'https://via.placeholder.com/60' },
        { id: 3, name: 'Andy', img: 'https://via.placeholder.com/60' }
    ],
};
var navbarReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default:
            return state;
    }
};
exports.default = navbarReducer;
