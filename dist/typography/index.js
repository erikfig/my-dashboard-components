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
export var Typography = function (_a) {
    var children = _a.children, _b = _a.type, type = _b === void 0 ? 'p' : _b, ellipsis = _a.ellipsis, props = __rest(_a, ["children", "type", "ellipsis"]);
    var localType = type;
    var typeClasses = {
        h1: 'text-3xl',
        h2: 'text-2xl',
        h3: 'text-xl',
        h4: 'text-lg',
        h5: 'text-base',
        h6: 'text-sm',
        p: 'text-base mb-6',
        span: 'text-sm',
        display: 'text-base',
    };
    var className = [typeClasses[type]];
    if (props.className) {
        className.push(props.className);
    }
    if (ellipsis) {
        className.push('text-nowrap text-ellipsis overflow-hidden');
    }
    if (type === 'display') {
        localType = 'div';
    }
    return createElement(localType, __assign(__assign({}, props), { className: className.join(' ') }), children);
};
