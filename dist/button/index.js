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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement } from 'react';
import { Spinner } from '../spinner';
export var Button = function (_a) {
    var children = _a.children, className = _a.className, color = _a.color, isLoading = _a.isLoading, props = __rest(_a, ["children", "className", "color", "isLoading"]);
    var tag = 'button';
    var localClassName = 'text-white disabled:bg-dark hover:bg-dark font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-300';
    var localChildren = children;
    if (props.href) {
        tag = 'a';
    }
    if (className) {
        localClassName = "".concat(localClassName, " ").concat(className);
    }
    if (isLoading) {
        localChildren = (_jsxs("div", { className: 'flex gap-2 items-center', children: [_jsx(Spinner, {}), _jsx("div", { children: children })] }));
    }
    localClassName = "".concat(localClassName, " ").concat(color ? color : "bg-primary");
    return createElement(tag, __assign(__assign({}, props), { className: localClassName }), localChildren);
};
