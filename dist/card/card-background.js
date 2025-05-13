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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Img } from '../img';
export var CardBackground = function (_a) {
    var children = _a.children, src = _a.src, className = _a.className, props = __rest(_a, ["children", "src", "className"]);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute w-full h-full top-0 left-0 z-0 overflow-hidden", children: _jsx(Img, { className: 'w-full h-full object-cover', src: src }) }), children && _jsx("div", __assign({ className: "relative -m-8 p-6 ".concat(className) }, props, { children: children }))] }));
};
