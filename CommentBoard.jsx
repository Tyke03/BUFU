import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import { useQuery } from "@websim/use-query";
const CommentBoard = ({ showNotification, room }) => {
  const { data: comments = [], loading: commentsLoading } = useQuery(
    room.collection("post").filter({ type: "public_comment" })
  );
  const [commentText, setCommentText] = useState("");
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const submitComment = async () => {
    if (!commentText.trim()) {
      showNotification("Please enter something to comment.");
      return;
    }
    setIsSubmittingComment(true);
    try {
      await room.collection("post").create({
        type: "public_comment",
        text: commentText
      });
      setCommentText("");
      showNotification("Comment posted!");
    } catch (error) {
      showNotification("Failed to post comment. Try again.");
    }
    setIsSubmittingComment(false);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "max-w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-2", children: "\u{1F4AC} Community Comment Board" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 32,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("p", { className: "text-center text-gray-500 dark:text-gray-400 mb-4", children: "Chat, meet, or leave feedback! (No spamming or hate speech. All posts public.)" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-4 flex gap-3", children: [
      /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          className: "flex-1 px-4 py-2 border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-700/60 rounded-lg text-gray-800 dark:text-gray-100 focus:border-blue-500 focus:outline-none resize-none",
          rows: 2,
          placeholder: "Say something cool, introduce yourself, or leave feedback...",
          value: commentText,
          onChange: (e) => setCommentText(e.target.value),
          disabled: isSubmittingComment,
          maxLength: 420,
          onKeyDown: (e) => {
            if (e.ctrlKey && e.key === "Enter") submitComment();
          }
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 39,
          columnNumber: 17
        }
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: submitComment,
          disabled: isSubmittingComment,
          className: "bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-green-600 active:scale-95 transition-all",
          children: isSubmittingComment ? "Posting..." : "Post"
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
      lineNumber: 38,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "max-h-[380px] overflow-y-auto rounded-xl bg-white/40 dark:bg-black/20 border border-gray-100 dark:border-gray-800 p-6 shadow-inner", children: [
      !commentsLoading && comments.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "text-center text-gray-400 italic p-4", children: "No comments yet. Be the first!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 21
      }),
      commentsLoading && /* @__PURE__ */ jsxDEV("div", { className: "text-center text-gray-400 py-6", children: "Loading comments..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 66,
        columnNumber: 21
      }),
      comments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((comment) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-6 last:mb-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: `https://images.websim.com/avatar/${comment.username}`,
            alt: "",
            className: "w-10 h-10 rounded-full object-cover border border-blue-300 dark:border-blue-900",
            onError: (e) => {
              e.target.onerror = null;
              e.target.src = "https://images.websim.com/avatar/default";
            }
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 72,
            columnNumber: 29
          }
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-blue-700 dark:text-blue-400", children: [
              "@",
              comment.username
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 80,
              columnNumber: 37
            }),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-gray-500 dark:text-gray-400 ml-2", children: new Date(comment.created_at).toLocaleString() }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 83,
              columnNumber: 37
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 79,
            columnNumber: 33
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "text-gray-700 dark:text-gray-200 mt-1 break-words whitespace-pre-wrap", children: comment.text }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 87,
            columnNumber: 33
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 78,
          columnNumber: 29
        })
      ] }, comment.id, true, {
        fileName: "<stdin>",
        lineNumber: 71,
        columnNumber: 25
      }))
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 59,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 31,
    columnNumber: 9
  });
};
var stdin_default = CommentBoard;
export {
  stdin_default as default
};
