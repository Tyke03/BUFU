import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
const FeatureSuggestionForm = ({ user, room, showNotification }) => {
  const [suggestionForm, setSuggestionForm] = useState({ title: "", description: "" });
  const handleFeatureSuggestion = async () => {
    if (!suggestionForm.title || !suggestionForm.description) {
      showNotification("Please fill in both title and description.");
      return;
    }
    try {
      await room.collection("feature_suggestions_v2").create({
        // Changed to .create for clarity with auto ID
        title: suggestionForm.title,
        description: suggestionForm.description,
        user_id: user.id
        // created_at is handled by the backend
      });
      setSuggestionForm({ title: "", description: "" });
      showNotification("Feature suggestion submitted! \u{1F4A1}");
    } catch (error) {
      console.error("Suggestion error:", error);
      showNotification("Failed to submit suggestion. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-xl p-6", children: [
    /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-800 dark:text-white mb-4", children: "\u{1F4A1} Suggest a New Feature" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: "Have an idea? Share it with the community!" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "text",
          placeholder: "Feature Title",
          value: suggestionForm.title,
          onChange: (e) => setSuggestionForm((prev) => ({ ...prev, title: e.target.value })),
          className: "w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-xl text-gray-800 dark:text-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 37,
          columnNumber: 17
        }
      ),
      /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          placeholder: "Describe your feature idea...",
          rows: "3",
          value: suggestionForm.description,
          onChange: (e) => setSuggestionForm((prev) => ({ ...prev, description: e.target.value })),
          className: "w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 rounded-xl text-gray-800 dark:text-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 44,
          columnNumber: 17
        }
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: handleFeatureSuggestion,
          className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg",
          children: "Submit Suggestion"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 51,
          columnNumber: 17
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 29,
    columnNumber: 9
  });
};
var stdin_default = FeatureSuggestionForm;
export {
  stdin_default as default
};
