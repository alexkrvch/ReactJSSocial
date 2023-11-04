"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
function WithRouter(Component) {
    function ComponentWithRouterProp(props) {
        var location = react_router_dom_1.useLocation();
        var navigate = react_router_dom_1.useNavigate();
        var params = react_router_dom_1.useParams();
        return (h(Component, __assign({}, props, { location: location, params: params, navigate: navigate })));
    }
    return ComponentWithRouterProp;
}
exports.default = WithRouter;
