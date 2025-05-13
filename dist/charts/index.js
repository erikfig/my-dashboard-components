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
import ReactApexChart from 'react-apexcharts';
import { useEffect, useState } from 'react';
export var Charts = function (_a) {
    var options = _a.options, _b = _a.isDarkMode, isDarkMode = _b === void 0 ? false : _b, props = __rest(_a, ["options", "isDarkMode"]);
    var _c = useState(0), key = _c[0], setKey = _c[1];
    var localOptions = __assign(__assign({}, options), { theme: {
            mode: isDarkMode ? 'dark' : 'light',
        }, chart: __assign({ background: 'transparent' }, options === null || options === void 0 ? void 0 : options.chart) });
    useEffect(function () {
        setKey(function (prevKey) { return prevKey + 1; });
    }, [props.type]);
    return (_jsxs("div", { children: [_jsx("div", { id: "chart", children: _jsx(ReactApexChart, __assign({ options: localOptions }, props), key) }), _jsx("div", { id: "html-dist" })] }));
};
