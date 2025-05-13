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
import { resolveClassName } from '../input-field';
export var Textarea = function (_a) {
    var children = _a.children, rows = _a.rows, name = _a.name, label = _a.label, helpText = _a.helpText, className = _a.className, error = _a.error, props = __rest(_a, ["children", "rows", "name", "label", "helpText", "className", "error"]);
    var localClassName = resolveClassName({ error: error, className: className });
    return (_jsx("div", { children: _jsx("div", { className: "flex items-center mt-4", children: _jsx("textarea", __assign({ id: name, rows: rows, className: localClassName }, props, { children: children })) }) }));
};
