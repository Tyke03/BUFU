import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
const AuthForm = ({ onAuth, websimUsername }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: ""
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!formData.email) {
      setError("Email is required.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    onAuth(formData);
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "glass-effect bg-white/10 dark:bg-black/20 rounded-3xl p-8 shadow-2xl", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold text-center mb-2 text-gray-800 dark:text-white", children: [
      "Welcome, ",
      websimUsername,
      "!"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 40,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("p", { className: "text-center text-gray-600 dark:text-gray-300 mb-6", children: "Complete your BUFU Hub profile to join the community." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 43,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: "block text-gray-700 dark:text-gray-300 font-semibold mb-2", children: "Email" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 49,
          columnNumber: 21
        }),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "email",
            name: "email",
            value: formData.email,
            onChange: handleChange,
            required: true,
            className: "w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-xl text-gray-800 dark:text-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 50,
            columnNumber: 21
          }
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 48,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: "block text-gray-700 dark:text-gray-300 font-semibold mb-2", children: "Password" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 61,
          columnNumber: 21
        }),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "password",
            name: "password",
            value: formData.password,
            onChange: handleChange,
            required: true,
            className: "w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-xl text-gray-800 dark:text-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 62,
            columnNumber: 21
          }
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 60,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: "block text-gray-700 dark:text-gray-300 font-semibold mb-2", children: "Confirm Password" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 73,
          columnNumber: 21
        }),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "password",
            name: "confirmPassword",
            value: formData.confirmPassword,
            onChange: handleChange,
            required: true,
            className: "w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-xl text-gray-800 dark:text-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 74,
            columnNumber: 21
          }
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 72,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: "block text-gray-700 dark:text-gray-300 font-semibold mb-2", children: "Referral Code (Optional)" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 85,
          columnNumber: 21
        }),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "text",
            name: "referralCode",
            value: formData.referralCode,
            onChange: handleChange,
            placeholder: "Enter a friend's referral code",
            className: "w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-xl text-gray-800 dark:text-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 86,
            columnNumber: 21
          }
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 84,
        columnNumber: 17
      }),
      error && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm text-center", children: error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 96,
        columnNumber: 27
      }),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          type: "submit",
          className: "w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg",
          children: "Join BUFU Hub"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 98,
          columnNumber: 17
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 47,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 39,
    columnNumber: 9
  });
};
var stdin_default = AuthForm;
export {
  stdin_default as default
};
