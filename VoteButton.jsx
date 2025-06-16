import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
const VoteButton = ({ featureId, onVote, disabled }) => /* @__PURE__ */ jsxDEV(
  "button",
  {
    onClick: () => onVote(featureId),
    disabled,
    className: `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${disabled ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 hover:scale-105 shadow-lg"}`,
    children: disabled ? "No Votes Left" : "Vote for This Feature"
  },
  void 0,
  false,
  {
    fileName: "<stdin>",
    lineNumber: 4,
    columnNumber: 5
  }
);
var stdin_default = VoteButton;
export {
  stdin_default as default
};
