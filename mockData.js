export const mockFeatures = [
    {
        id: 'feature_avatar_customization', // Ensure IDs are unique and descriptive
        title: '🎨 User Avatar Customization',
        description: 'Allow users to upload custom avatars and choose from preset designs to personalize their profiles.',
        active: true
    },
    {
        id: 'feature_basic_chat',
        title: '💬 Basic Chat System',
        description: 'Real-time messaging system for users to communicate and discuss feature proposals.',
        active: true
    },
    {
        id: 'feature_advanced_achievements',
        title: '🏆 Advanced Achievement System',
        description: 'Expanded badge system with progress tracking and special rewards for community contributions.',
        active: true
    },
    {
        id: 'feature_voting_history',
        title: '📊 Voting History Dashboard',
        description: 'View past voting rounds, results, and track your voting participation over time.',
        active: true
    }
];

export const subscriptionTiers = [
    {
        name: 'Free Builder',
        price: '$0',
        features: ['1 vote per week', 'Basic badges', 'Referral bonuses', 'Community access'],
        current: true
    },
    {
        name: 'Supporter',
        price: '$1/mo',
        features: ['1 vote per day', 'Supporter badge', 'Early voting results', 'All free features']
    },
    {
        name: 'Advocate',
        price: '$5/mo',
        features: ['Daily streak bonuses', 'Up to 21+ votes/week', 'Advanced badges', 'Priority support']
    },
    {
        name: 'Architect',
        price: '$20/mo',
        features: ['Direct feature implementation', 'Double vote multipliers', '30-day trial features', 'Exclusive channels']
    }
];