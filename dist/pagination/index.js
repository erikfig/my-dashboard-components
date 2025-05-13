import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import { Typography } from '../typography';
export var Pagination = function (_a) {
    var current = _a.current, total = _a.total, perPage = _a.perPage, count = _a.count, disabled = _a.disabled, onChange = _a.onChange;
    var _b = useState(current), localCurrent = _b[0], setLocalCurrent = _b[1];
    var pages = Math.ceil(total / perPage);
    useEffect(function () {
        if (onChange) {
            onChange(localCurrent);
        }
    }, [localCurrent]);
    var handleChangePage = useCallback(function (type, page) {
        if (disabled)
            return;
        if (type === "change" && page !== undefined) {
            setLocalCurrent(page);
        }
        if (type === "increase" && localCurrent < pages) {
            setLocalCurrent(localCurrent + 1);
        }
        if (type === "decrease" && localCurrent > 1) {
            setLocalCurrent(localCurrent - 1);
        }
    }, [localCurrent, disabled]);
    var classCurrent = "cursor-default flex items-center justify-center px-3 h-8 leading-tight text-primary border border-neutral-300 bg-light-50 hover:bg-light-100 hover:text-light-700 dark:border-neutral-700 dark:bg-neutral-700";
    var classItem = "flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white";
    var classActive = "flex items-center justify-center px-3 h-8 ms-0 leading-tight text-neutral-500 border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white";
    var classDisabled = "cursor-default flex items-center justify-center px-3 h-8 ms-0 leading-tight text-neutral-700 border border-neutral-300 dark:border-neutral-700 dark:text-neutral-40";
    return (_jsxs("nav", { className: "flex justify-between items-center py-4 px-8 ".concat(disabled ? "opacity-50" : ''), children: [_jsxs(Typography, { type: 'display', className: 'text-xs', children: ["Mostrando ", count !== null && count !== void 0 ? count : 0, " de ", total] }), _jsxs("ul", { className: "flex items-center -space-x-px h-8 text-sm", children: [_jsx("li", { children: _jsxs("a", { onClick: function () { return handleChangePage("decrease"); }, className: "".concat((!disabled && localCurrent > 1) ? classActive : classDisabled, " rounded-s-lg"), children: [_jsx("span", { className: "sr-only", children: "Previous" }), _jsx("svg", { className: "w-2.5 h-2.5 rtl:rotate-180", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10", children: _jsx("path", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M5 1 1 5l4 4" }) })] }) }), Array(pages).fill(0).map(function (_, index) { return (_jsx("li", { children: _jsx("a", { onClick: function () { return handleChangePage("change", index + 1); }, className: "".concat(localCurrent === index + 1 ? classCurrent : classItem, " ").concat(disabled ? 'cursor-default' : 'cursor-pointer'), children: index + 1 }) })); }), _jsx("li", { children: _jsxs("a", { onClick: function () { return handleChangePage("increase"); }, className: "".concat((!disabled && localCurrent < pages) ? classActive : classDisabled, " rounded-e-lg"), children: [_jsx("span", { className: "sr-only", children: "Next" }), _jsx("svg", { className: "w-2.5 h-2.5 rtl:rotate-180", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10", children: _jsx("path", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m1 9 4-4-4-4" }) })] }) })] })] }));
};
