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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pagination_module_css_1 = __importDefault(require("./Pagination.module.css"));
var react_1 = __importStar(require("react"));
var Pagination = react_1.default.memo(function (_a) {
    var totalCount = _a.totalCount, pageSize = _a.pageSize, onChangePage = _a.onChangePage, currentPage = _a.currentPage, _b = _a.partSize, partSize = _b === void 0 ? 10 : _b;
    var pagesCount = Math.ceil(totalCount / pageSize);
    var pages = [];
    for (var i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    var partCount = Math.ceil(pagesCount / partSize);
    var _c = react_1.useState(Math.floor(currentPage / partSize) + 1), partCurrent = _c[0], setPartCurrent = _c[1];
    var leftPartPageNumber = (partCurrent - 1) * partSize + 1;
    var rightPartPageNumber = partCurrent * partSize;
    return (h("div", { className: Pagination_module_css_1.default.navigation },
        partCurrent > 1 && h("button", { onClick: function () { setPartCurrent(partCurrent - 1); } }, "Prev"),
        pages.filter(function (p) { return p >= leftPartPageNumber && p <= rightPartPageNumber; }).map(function (p) { return h("span", { key: p, onClick: function () { onChangePage(p); }, className: p === currentPage ? Pagination_module_css_1.default.selNavigation : '' }, p); }),
        partCount > partCurrent && h("button", { onClick: function () { setPartCurrent(partCurrent + 1); } }, "Next")));
});
exports.default = Pagination;
