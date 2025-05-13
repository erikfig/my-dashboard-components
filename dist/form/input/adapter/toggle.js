import { jsx as _jsx } from "react/jsx-runtime";
import { Toggle as ToggleComponent } from '../../toggle';
export var Toggle = function (_a) {
    var options = _a.options, value = _a.value, onChange = _a.onChange;
    return (_jsx("div", { children: options === null || options === void 0 ? void 0 : options.map(function (opt) { return (_jsx("div", { className: "flex items-center mt-4 pl-4", children: _jsx(ToggleComponent, { checked: Array.isArray(value) ? value.includes(opt.value) : opt.value === value, onClick: function () { return onChange ? onChange({ target: { value: opt.value } }) : ''; }, children: opt.label }) }, opt.value)); }) }));
};
