import { jsx as _jsx } from "react/jsx-runtime";
import { DataTable } from './data-table';
export var DataTableAsync = function (_a) {
    var query = _a.query, columns = _a.columns, onChangePagination = _a.onChangePagination;
    var response = query.data, isPending = query.isPending, isFetching = query.isFetching, refetch = query.refetch;
    return (_jsx(DataTable, { isLoading: isPending || isFetching, columns: columns, rows: response === null || response === void 0 ? void 0 : response.data, current: response === null || response === void 0 ? void 0 : response.page, total: response === null || response === void 0 ? void 0 : response.total, perPage: response === null || response === void 0 ? void 0 : response.perPage, onChange: function (p) {
            if (onChangePagination) {
                onChangePagination(p);
            }
            refetch();
        } }));
};
