// This file is largely obsolete as user data is now fetched from the database in App.jsx.
// Keeping it in case any specific utility functions are needed later, but getUserFromWebsim is removed.

export const generateReferralCode = (username) => {
    if (!username) return 'BUFU-DEFAULT';
    return `BUFU-${username.toUpperCase()}`;
};

// Example: Function to check if user has a specific badge (if needed)
// export const hasBadge = (user, badgeName) => {
//    return user && user.badges && user.badges.includes(badgeName);
// };