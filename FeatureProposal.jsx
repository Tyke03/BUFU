import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import VoteButton from "../ui/VoteButton.jsx";
const FeatureProposal = ({ feature, onVote, userVotesAvailable, fullWidth }) => /* @__PURE__ */ jsxDEV("div", { className: `bg-white dark:bg-gray-700/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 p-6 ${fullWidth ? "w-full mx-auto" : ""}`, children: [
  /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start mb-4", children: [
    /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-800 dark:text-white", children: feature.title }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("span", { className: "bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium", children: [
      feature.votes || 0,
      " votes"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 8,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 dark:text-gray-300 mb-4 leading-relaxed", children: feature.description }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 14,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV(
    VoteButton,
    {
      featureId: feature.id,
      onVote,
      disabled: userVotesAvailable <= 0
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 15,
      columnNumber: 9
    }
  )
] }, void 0, true, {
  fileName: "<stdin>",
  lineNumber: 5,
  columnNumber: 5
});
var stdin_default = FeatureProposal;
export {
  stdin_default as default
};
