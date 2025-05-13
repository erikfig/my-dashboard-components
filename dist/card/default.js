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
import { createElement } from 'react';
export var Card = function (_a) {
    var children = _a.children, type = _a.type, className = _a.className, _b = _a.overflow, overflow = _b === void 0 ? true : _b, props = __rest(_a, ["children", "type", "className", "overflow"]);
    var localType = type !== null && type !== void 0 ? type : 'div';
    var localClassName = "relative".concat(overflow ? ' overflow-hidden ' : '', "m-6 p-8 shadow-2xl rounded-2xl bg-light dark:bg-neutral-800 ").concat(className);
    return createElement(localType, __assign(__assign({}, props), { className: localClassName }), children);
};
