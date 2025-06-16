import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect } from "react";
const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3e3);
    return () => clearTimeout(timer);
  }, [onClose]);
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-slideIn", children: message }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 9
  });
};
var stdin_default = Notification;
export {
  stdin_default as default
};
