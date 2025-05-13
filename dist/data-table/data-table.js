import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from '../card';
import { Pagination } from '../pagination';
import { Table } from '../table';
import { Typography } from '../typography';
export var DataTable = function (_a) {
    var title = _a.title, columns = _a.columns, rows = _a.rows, perPage = _a.perPage, current = _a.current, total = _a.total, onChange = _a.onChange, isLoading = _a.isLoading;
    return (_jsxs(Card, { className: "col-span-8 !p-0 !overflow-auto", children: [title &&
                _jsx(Typography, { type: 'h3', className: 'p-4', children: title }), _jsx(Table, { columns: columns, rows: rows, isLoading: isLoading }), _jsx(Pagination, { count: rows === null || rows === void 0 ? void 0 : rows.length, current: current !== null && current !== void 0 ? current : 1, total: total !== null && total !== void 0 ? total : 1, perPage: perPage !== null && perPage !== void 0 ? perPage : 1, onChange: onChange, disabled: isLoading })] }));
};
