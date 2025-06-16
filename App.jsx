import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect, useCallback } from "react";
import { WebsimSocket, useQuery } from "@websim/use-query";
import Header from "./Header.jsx";
import AuthForm from "./auth/AuthForm.jsx";
import UserDashboard from "./dashboard/UserDashboard.jsx";
import SubscriptionTiers from "./subscription/SubscriptionTiers.jsx";
import ReferralSection from "./referral/ReferralSection.jsx";
import Notification from "./ui/Notification.jsx";
import AboutSection from "./about/AboutSection.jsx";
const room = new WebsimSocket();
const App = () => {
  const [user, setUser] = useState(null);
  const [websimUser, setWebsimUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("bufu-theme") || "light");
  const [loadingUser, setLoadingUser] = useState(true);
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("bufu-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };
  const loadAndSetCurrentUser = useCallback(async () => {
    setLoadingUser(true);
    try {
      const currentWebsimUser = await window.websim.getCurrentUser();
      setWebsimUser(currentWebsimUser);
      if (currentWebsimUser) {
        const existingUserRecords = await room.collection("users_v2").filter({ id: currentWebsimUser.id }).getList();
        if (existingUserRecords && existingUserRecords.length > 0) {
          setUser(existingUserRecords[0]);
        } else {
          setUser({ websimUserInfo: currentWebsimUser, needsProfile: true });
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error loading current user:", error);
      setUser(null);
      showNotification("Could not load user data. Please try refreshing.");
    } finally {
      setLoadingUser(false);
    }
  }, []);
  useEffect(() => {
    loadAndSetCurrentUser();
  }, [loadAndSetCurrentUser]);
  const handleJoinBufu = async (formData) => {
    if (!websimUser) {
      showNotification("Error: No Websim user identified.");
      return;
    }
    try {
      const newUserData = {
        id: websimUser.id,
        username: websimUser.username,
        email: formData.email,
        password_hash: "set",
        // Indicate password was created, without storing it
        referral_code_used: formData.referralCode || null,
        level: 1,
        votes_available: formData.referralCode ? 6 : 5,
        // 5 base, +1 for referral
        referrals_count: 0,
        badges: ["\u{1F389} First Steps", "\u{1F5F3}\uFE0F Democracy Supporter"],
        streak_days: 1
      };
      await room.collection("users_v2").upsert(newUserData);
      setUser(newUserData);
      showNotification(`Welcome to BUFU Web Hub, ${newUserData.username}!`);
    } catch (error) {
      console.error("Join BUFU error:", error);
      showNotification("Failed to create your BUFU profile. Please try again.");
    }
  };
  const handleLogout = async () => {
    setUser(null);
    setWebsimUser(null);
    showNotification("Logged out successfully!");
    loadAndSetCurrentUser();
  };
  const updateUserInStateAndDatabase = useCallback(async (updatedUser) => {
    try {
      await room.collection("users_v2").upsert(updatedUser);
      setUser(updatedUser);
    } catch (error) {
      console.error("Error updating user data:", error);
      showNotification("Failed to save user changes. Please try again.");
      loadAndSetCurrentUser();
    }
  }, [loadAndSetCurrentUser]);
  const showNotification = (message) => {
    setNotification(message);
  };
  if (loadingUser) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900", children: /* @__PURE__ */ jsxDEV("div", { className: "text-xl text-gray-700 dark:text-gray-300", children: "Loading BUFU Hub..." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 122,
      columnNumber: 17
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 121,
      columnNumber: 13
    });
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 text-gray-800 dark:text-gray-200", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-8 max-w-6xl", children: [
    /* @__PURE__ */ jsxDEV(Header, { toggleTheme, currentTheme: theme }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 130,
      columnNumber: 17
    }),
    !websimUser ? /* @__PURE__ */ jsxDEV("div", { className: "text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200", children: "Welcome to BUFU Web Hub!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 134,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 dark:text-gray-400", children: "Please sign in or create an account with Websim to continue." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 135,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => alert("Please use your Websim account to sign in. If you are signed in, refresh the page."),
          className: "mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg",
          children: "Sign In / Refresh"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 138,
          columnNumber: 25
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 133,
      columnNumber: 21
    }) : user && user.needsProfile ? /* @__PURE__ */ jsxDEV("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxDEV(
      AuthForm,
      {
        onAuth: handleJoinBufu,
        websimUsername: user.websimUserInfo.username
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 147,
        columnNumber: 25
      }
    ) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 146,
      columnNumber: 21
    }) : user ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV(
        UserDashboard,
        {
          user,
          setUser: updateUserInStateAndDatabase,
          onLogout: handleLogout,
          showNotification,
          room
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 154,
          columnNumber: 25
        }
      ),
      /* @__PURE__ */ jsxDEV(AboutSection, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 161,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV(SubscriptionTiers, { user }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 162,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV(ReferralSection, { user }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 163,
        columnNumber: 25
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 153,
      columnNumber: 21
    }) : /* @__PURE__ */ jsxDEV("div", { className: "text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-semibold mb-4", children: "Error" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 167,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV("p", { children: "Could not determine user status. Please refresh." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 168,
        columnNumber: 25
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 166,
      columnNumber: 22
    }),
    notification && /* @__PURE__ */ jsxDEV(
      Notification,
      {
        message: notification,
        onClose: () => setNotification(null)
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 173,
        columnNumber: 21
      }
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 129,
    columnNumber: 13
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 128,
    columnNumber: 9
  });
};
var stdin_default = App;
export {
  stdin_default as default
};
