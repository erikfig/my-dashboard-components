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
import { useEffect, useState } from 'react';
import { InputField } from './input-field';
import { Typography } from '../../typography';
import { Adapters } from './adapter';
import { Label } from './label';
export var Input = function (_a) {
    var label = _a.label, helpText = _a.helpText, _b = _a.type, type = _b === void 0 ? 'text' : _b, options = _a.options, onChange = _a.onChange, props = __rest(_a, ["label", "helpText", "type", "options", "onChange"]);
    var _c = useState(false), hasAdapter = _c[0], setHasAdapter = _c[1];
    useEffect(function () {
        setHasAdapter(!!Adapters[type]);
    }, [type]);
    var localHelpTextClassName = 'mt-2 !mb-0 text-sm text-gray-500 dark:text-gray-400';
    if (props === null || props === void 0 ? void 0 : props.error) {
        localHelpTextClassName += ' !text-red-500';
    }
    return (_jsxs("div", { children: [label && _jsx(Label, { name: props.name, label: label }), _jsx(InputField, __assign({ type: hasAdapter ? 'hidden' : type, id: props.name, onChange: onChange }, props)), hasAdapter && Adapters[type](__assign({ label: label, helpText: helpText, type: type, options: options, onChange: onChange }, props)), helpText &&
                _jsx(Typography, { id: "helper-text-explanation", className: localHelpTextClassName, children: helpText })] }));
};
