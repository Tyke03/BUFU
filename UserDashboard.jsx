import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import UserProfile from "./UserProfile.jsx";
import VotingSection from "./VotingSection.jsx";
import CommentBoard from "./voting/CommentBoard.jsx";
const UserDashboard = ({ user, setUser, onLogout, showNotification, room }) => /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-3 gap-8 mb-12", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxDEV(UserProfile, { user, onLogout }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 13
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2 flex flex-col gap-8", children: [
    /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-blue-200 dark:border-blue-900 px-0 py-0", children: /* @__PURE__ */ jsxDEV(CommentBoard, { showNotification, room }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 16,
      columnNumber: 21
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 15,
      columnNumber: 17
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV(
      VotingSection,
      {
        user,
        setUser,
        showNotification,
        room,
        fullWidth: true
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 13
      }
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 13,
    columnNumber: 9
  })
] }, void 0, true, {
  fileName: "<stdin>",
  lineNumber: 7,
  columnNumber: 5
});
var stdin_default = UserDashboard;
export {
  stdin_default as default
};
