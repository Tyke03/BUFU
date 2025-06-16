import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
const UserProfile = ({ user, onLogout }) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl h-fit", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
    /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: `https://images.websim.com/avatar/${user.username}`,
        alt: `${user.username}'s avatar`,
        className: "w-20 h-20 rounded-full mx-auto mb-4 pulse-glow object-cover",
        onError: (e) => {
          e.target.onerror = null;
          e.target.src = "https://images.websim.com/avatar/default";
        }
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 6,
        columnNumber: 13
      }
    ),
    /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-800 dark:text-white", children: user.username }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 12,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 dark:text-gray-300", children: [
      "Level ",
      user.level,
      " - Web Builder"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 5,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4 mb-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 p-4 rounded-xl text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: user.votes_available }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 18,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-600 dark:text-gray-300 mt-1", children: "Available Votes" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 17
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 p-4 rounded-xl text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-2xl font-bold text-green-600 dark:text-green-400", children: user.referrals_count }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 22,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-600 dark:text-gray-300 mt-1", children: "Referrals" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 23,
        columnNumber: 17
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 21,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 p-4 rounded-xl text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-2xl font-bold text-purple-600 dark:text-purple-400", children: (user.badges || []).length }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 26,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-600 dark:text-gray-300 mt-1", children: "Badges" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 27,
        columnNumber: 17
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 25,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/50 dark:to-orange-800/50 p-4 rounded-xl text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-2xl font-bold text-orange-600 dark:text-orange-400", children: user.streak_days }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 30,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-600 dark:text-gray-300 mt-1", children: "Day Streak" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 31,
        columnNumber: 17
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 29,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 16,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold mb-3 text-gray-800 dark:text-white", children: "Your Badges" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: user.badges && user.badges.length > 0 ? user.badges.map((badge, index) => /* @__PURE__ */ jsxDEV("span", { className: "inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2", children: badge }, index, false, {
      fileName: "<stdin>",
      lineNumber: 39,
      columnNumber: 21
    })) : /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 dark:text-gray-400 text-sm", children: "No badges earned yet." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 43,
      columnNumber: 21
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 35,
    columnNumber: 9
  }),
  /* @__PURE__ */ jsxDEV(
    "button",
    {
      onClick: onLogout,
      className: "w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-lg",
      children: "Logout"
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 48,
      columnNumber: 9
    }
  )
] }, void 0, true, {
  fileName: "<stdin>",
  lineNumber: 4,
  columnNumber: 5
});
var stdin_default = UserProfile;
export {
  stdin_default as default
};
