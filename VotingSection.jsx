import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "@websim/use-query";
import FeatureProposal from "./FeatureProposal.jsx";
import FeatureSuggestionForm from "./FeatureSuggestionForm.jsx";
import CommentBoard from "./voting/CommentBoard.jsx";
import VotingIntroCards, { quoteSnippets } from "./voting/VotingIntroCards.jsx";
import { mockFeatures } from "../../utils/mockData.js";
const VotingSection = ({ user, setUser, showNotification, room, fullWidth }) => {
  useEffect(() => {
    const seedFeatures = async () => {
      try {
        const existingFeatures = await room.collection("features_v2").getList();
        if (existingFeatures.length === 0) {
          console.log("No features_v2 found, seeding database...");
          const featurePromises = mockFeatures.map(
            (feature) => room.collection("features_v2").upsert({
              id: feature.id,
              title: feature.title,
              description: feature.description,
              active: feature.active
            })
          );
          await Promise.all(featurePromises);
          console.log("Database seeded with initial features_v2.");
        }
      } catch (error) {
        console.error("Error seeding features_v2:", error);
      }
    };
    seedFeatures();
  }, [room]);
  const { data: featuresFromDB = [], loading: featuresLoading } = useQuery(
    room.collection("features_v2").filter({ active: true })
  );
  const { data: allVotesFromDB = [], loading: votesLoading } = useQuery(room.collection("votes_v2"));
  const handleVote = useCallback(async (featureId) => {
    if (!user || user.votes_available <= 0) {
      showNotification("You have no votes left!");
      return;
    }
    const updatedUser = { ...user, votes_available: user.votes_available - 1 };
    try {
      setUser(updatedUser);
      await room.collection("votes_v2").create({
        user_id: user.id,
        feature_id: featureId
      });
      showNotification("Vote cast successfully! \u{1F5F3}\uFE0F");
    } catch (error) {
      console.error("Vote error:", error);
      setUser({ ...user, votes_available: user.votes_available });
      showNotification("Failed to cast vote. Please try again.");
    }
  }, [user, setUser, room, showNotification]);
  if (featuresLoading || votesLoading) {
    return /* @__PURE__ */ jsxDEV("div", { className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "text-gray-500 dark:text-gray-400", children: "Loading features..." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 67,
      columnNumber: 17
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 66,
      columnNumber: 13
    });
  }
  const voteCounts = allVotesFromDB.reduce((acc, vote) => {
    if (vote.feature_id) {
      acc[vote.feature_id] = (acc[vote.feature_id] || 0) + 1;
    }
    return acc;
  }, {});
  const featuresWithVoteCounts = featuresFromDB.map((feature) => ({
    ...feature,
    votes: voteCounts[feature.id] || 0
  })).sort((a, b) => b.votes - a.votes);
  const interleaved = [];
  const snippetsPerSlot = quoteSnippets.length / (featuresWithVoteCounts.length + 1);
  let snippetPointer = 0;
  for (let i = 0; i <= featuresWithVoteCounts.length; ++i) {
    const nextSnippetPointer = Math.round((i + 1) * snippetsPerSlot);
    const snippetsThisSlot = quoteSnippets.slice(snippetPointer, nextSnippetPointer);
    snippetsThisSlot.forEach(
      (snippet, idx) => interleaved.push(
        /* @__PURE__ */ jsxDEV(VotingIntroCards.SectionCard, { children: snippet.content }, `snippet_${snippet.id}_${i}_${idx}`, false, {
          fileName: "<stdin>",
          lineNumber: 94,
          columnNumber: 17
        })
      )
    );
    snippetPointer = nextSnippetPointer;
    if (i < featuresWithVoteCounts.length) {
      const feature = featuresWithVoteCounts[i];
      interleaved.push(
        /* @__PURE__ */ jsxDEV(
          FeatureProposal,
          {
            feature,
            onVote: handleVote,
            userVotesAvailable: user.votes_available,
            fullWidth
          },
          `feature_${feature.id}`,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 103,
            columnNumber: 17
          }
        )
      );
    }
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-white dark:bg-gray-800 rounded-2xl px-0 py-0 shadow-2xl mb-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-2 p-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-gray-800 dark:text-white", children: "\u{1F5F3}\uFE0F Current Voting Round" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 120,
          columnNumber: 25
        }),
        /* @__PURE__ */ jsxDEV("span", { className: "bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mt-2 sm:mt-0", children: "Active - 4 days left" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 123,
          columnNumber: 25
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 119,
        columnNumber: 21
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-800 dark:text-white mb-2", children: "Week 1: Foundation Features" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 128,
          columnNumber: 25
        }),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 dark:text-gray-300", children: [
          "Help shape the future of BUFU Web Hub by voting for the features you want to see implemented first. You have ",
          user.votes_available,
          " votes remaining."
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 131,
          columnNumber: 25
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 127,
        columnNumber: 21
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 118,
      columnNumber: 17
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 117,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-8", children: interleaved.map((card, i) => /* @__PURE__ */ jsxDEV("div", { className: "w-full", children: card }, i, false, {
      fileName: "<stdin>",
      lineNumber: 140,
      columnNumber: 21
    })) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 138,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV(FeatureSuggestionForm, { user, room, showNotification }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 146,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 115,
    columnNumber: 9
  });
};
var stdin_default = VotingSection;
export {
  stdin_default as default
};
