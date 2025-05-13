import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var Toggle = function (_a) {
    var checked = _a.checked, onClick = _a.onClick, children = _a.children;
    return (_jsxs("label", { className: "inline-flex items-center me-5 cursor-pointer", children: [_jsx("input", { type: "checkbox", className: "sr-only peer", checked: checked, onClick: onClick }), _jsx("div", { className: "relative min-w-[44px] h-6 bg-neutral-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary" }), _jsx("span", { className: "ms-3 text-sm font-medium", children: children })] }));
};
