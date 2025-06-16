import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
const ReferralSection = ({ user }) => /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl p-8 text-white text-center shadow-2xl", children: [
  /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold mb-4", children: "\u{1F381} Invite Friends & Earn Votes!" }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 5,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV("p", { className: "text-lg mb-6 opacity-90", children: "Each successful referral gives you +1 vote per week permanently!" }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 6,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "bg-white bg-opacity-20 rounded-xl p-4 inline-block mb-4", children: /* @__PURE__ */ jsxDEV("code", { className: "text-xl font-mono", children: [
    "BUFU-",
    user.username.toUpperCase()
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 13
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV("p", { className: "opacity-90", children: "Share this code with friends when they sign up" }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 12,
    columnNumber: 9
  })
] }, void 0, true, {
  fileName: "<stdin>",
  lineNumber: 4,
  columnNumber: 5
});
var stdin_default = ReferralSection;
export {
  stdin_default as default
};
