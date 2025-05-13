import { jsx as _jsx } from "react/jsx-runtime";
export var Label = function (_a) {
    var name = _a.name, label = _a.label;
    return _jsx("label", { htmlFor: name, className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: label });
};
