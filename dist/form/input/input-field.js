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
import { jsx as _jsx } from "react/jsx-runtime";
var classNameTemplate = 'bg-gray-50 border-2 border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white';
var classNameErrorTemplate = '!border-red-500 !outline-red-500';
export var resolveClassName = function (_a) {
    var className = _a.className, error = _a.error;
    var localClassName = classNameTemplate;
    if (className) {
        localClassName = "".concat(localClassName, " ").concat(className);
    }
    if (error) {
        localClassName = "".concat(localClassName, " ").concat(classNameErrorTemplate);
    }
    return localClassName;
};
export var InputField = function (_a) {
    var type = _a.type, error = _a.error, className = _a.className, props = __rest(_a, ["type", "error", "className"]);
    var localClassName = resolveClassName({ error: error, className: className });
    return (_jsx("input", __assign({ type: type !== null && type !== void 0 ? type : 'text', className: localClassName }, props)));
};
