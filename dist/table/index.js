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
export var Table = function (_a) {
    var columns = _a.columns, rows = _a.rows, isLoading = _a.isLoading;
    return (_jsxs("table", { className: "table-auto w-full text-left", children: [_jsx("thead", { className: 'border-b border-neutral-300 dark:border-neutral-800 text-xs text-neutral-700 uppercase dark:bg-neutral-700 dark:text-neutral-400', children: _jsx("tr", { children: columns.map(function (col) { return _jsx("th", { className: 'px-6 py-3 font-light', children: col.title }); }) }) }), _jsxs("tbody", { children: [!isLoading && (rows === null || rows === void 0 ? void 0 : rows.map(function (row) { return (_jsx("tr", { className: "border-b border-neutral-300 dark:border-neutral-700", children: columns.map(function (_a) {
                            var field = _a.field, render = _a.render, className = _a.className, props = __rest(_a, ["field", "render", "className"]);
                            return (_jsx("td", __assign({ className: "px-6 py-4".concat(className ? " ".concat(className) : '') }, props, { children: render ? render(row) : row[field] })));
                        }) })); })), isLoading && (_jsx("tr", { className: "border-b border-neutral-300 dark:border-neutral-700 dark:text-neutral-700 text-neutral-400 text-center", children: _jsx("td", { className: "px-6 py-4", colSpan: columns.length, children: "Carregando..." }) })), !isLoading && (!rows || rows.length === 0) && (_jsx("tr", { className: "border-b border-neutral-300 dark:border-neutral-700 dark:text-neutral-700 text-neutral-400 text-center", children: _jsx("td", { className: "px-6 py-4", colSpan: columns.length, children: "Nenhum registro encontrado" }) }))] })] }));
};
