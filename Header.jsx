import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
const Header = ({ toggleTheme, currentTheme }) => /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 relative", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "float-animation", children: /* @__PURE__ */ jsxDEV("h1", { className: "text-6xl font-bold mb-4 gradient-text", children: "\u{1F680} BUFU Web Hub" }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 6,
    columnNumber: 13
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 5,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-gray-600 dark:text-gray-300 italic", children: '"The Future of the Web is Ours to Build\u2014One Feature at a Time"' }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV(
    "button",
    {
      onClick: toggleTheme,
      className: "absolute top-0 right-0 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-2xl transition-all duration-300 hover:scale-110",
      "aria-label": "Toggle theme",
      children: currentTheme === "light" ? "\u{1F319}" : "\u2600\uFE0F"
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 9
    }
  )
] }, void 0, true, {
  fileName: "<stdin>",
  lineNumber: 4,
  columnNumber: 5
});
var stdin_default = Header;
export {
  stdin_default as default
};
