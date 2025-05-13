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
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, } from 'react-hook-form';
import { Input } from './input';
export var InputController = function (_a) {
    var name = _a.name, control = _a.control, errors = _a.errors, size = _a.size, props = __rest(_a, ["name", "control", "errors", "size"]);
    return (_jsx(Controller, { name: name !== null && name !== void 0 ? name : '', control: control, render: function (_a) {
            var _b;
            var _c = _a.field, value = _c.value, onChange = _c.onChange;
            return (_jsx(Input, __assign({ name: name, value: value || '', error: !!(errors === null || errors === void 0 ? void 0 : errors[name]), helpText: _jsx(_Fragment, { children: (_b = errors === null || errors === void 0 ? void 0 : errors[name]) === null || _b === void 0 ? void 0 : _b.message }), onChange: onChange, width: size ? '100%' : props.width }, props)));
        } }));
};
