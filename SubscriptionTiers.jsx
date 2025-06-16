import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { subscriptionTiers } from "../../utils/mockData.js";
const SubscriptionTiers = ({ user }) => /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: subscriptionTiers.map((tier, index) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center", children: [
  /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-800 dark:text-white mb-4", children: tier.name }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 8,
    columnNumber: 17
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6", children: tier.price }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 17
  }),
  /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 mb-6", children: tier.features.map((feature, idx) => /* @__PURE__ */ jsxDEV("li", { className: "text-gray-600 dark:text-gray-300 flex items-center", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-green-500 mr-2", children: "\u2713" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 29
    }),
    feature
  ] }, idx, true, {
    fileName: "<stdin>",
    lineNumber: 12,
    columnNumber: 25
  })) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 17
  }),
  /* @__PURE__ */ jsxDEV(
    "button",
    {
      disabled: !tier.current,
      className: `w-full py-3 rounded-xl font-medium transition-all duration-300 ${tier.current ? "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed" : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"}`,
      children: tier.current ? "Current Plan" : "Coming Soon"
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 18,
      columnNumber: 17
    }
  )
] }, index, true, {
  fileName: "<stdin>",
  lineNumber: 7,
  columnNumber: 13
})) }, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 5,
  columnNumber: 5
});
var stdin_default = SubscriptionTiers;
export {
  stdin_default as default
};
