import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from '../typography';
import { Card } from './default';
var icons = {
    danger: 'error',
    success: 'check_circle',
    warning: 'warning',
    info: 'info',
};
export var CardStatus = function (_a) {
    var title = _a.title, message = _a.message, status = _a.status;
    return (_jsxs(Card, { className: "flex flex-row justify-between !py-4 px-4 md:px-8 !bg-".concat(status, " text-white"), children: [_jsxs("div", { children: [_jsx(Typography, { type: "h5", children: title }), _jsx(Typography, { type: "h2", className: "font-bold", children: message })] }), _jsx("div", { className: "hidden md:block chart", children: _jsx("span", { className: "material-symbols-outlined !text-6xl", children: icons[status] }) })] }));
};
