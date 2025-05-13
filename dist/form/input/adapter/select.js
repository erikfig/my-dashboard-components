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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ReactSelect from 'react-select';
export var Select = function (_a) {
    var options = _a.options, name = _a.name, error = _a.error, className = _a.className, label = _a.label, helpText = _a.helpText, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["options", "name", "error", "className", "label", "helpText", "value", "onChange"]);
    return (_jsx(_Fragment, { children: _jsx(ReactSelect, __assign({ id: name, options: options, value: options ? options === null || options === void 0 ? void 0 : options.filter(function (opt) { return Array.isArray(value) ? value.includes(opt.value) : opt.value === value; }) : [], onChange: function (e) {
                if (Array.isArray(e) && onChange) {
                    onChange({ target: { value: e.map(function (item) { return item.value; }) } });
                    return;
                }
                if (onChange) {
                    onChange({ target: { value: e === null || e === void 0 ? void 0 : e.value } });
                }
            }, isSearchable: true, isClearable: true, className: "react-select-container".concat(error ? ' error' : ''), classNamePrefix: "react-select" }, props)) }));
};
