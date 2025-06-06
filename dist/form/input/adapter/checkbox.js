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
export var Checkbox = function (_a) {
    var options = _a.options, name = _a.name, label = _a.label, value = _a.value, props = __rest(_a, ["options", "name", "label", "value"]);
    return (_jsx("div", { children: options === null || options === void 0 ? void 0 : options.map(function (opt) { return (_jsxs("div", { className: "flex items-center mt-4 pl-4", children: [_jsx("input", __assign({ id: "".concat(name, "-").concat(opt.value), name: name, checked: Array.isArray(value) ? value.includes(opt.value) : opt.value === value, type: "checkbox", value: opt.value, className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" }, props)), _jsx("label", { htmlFor: "".concat(name, "-").concat(opt.value), className: "ms-2 text-sm font-medium text-gray-900 dark:text-gray-300", children: opt.label })] }, opt.value)); }) }));
};
