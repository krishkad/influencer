declare type filterTypes = {
    platform: string;
    category: string;
    followerCounts: string;
    location: string;
    gender: string;
    engagementRate: string;
    incomeLevel: string;
    ageGroup: string;
    occupation: string;
}

declare type instaProfileType = {
    imgUrl: string;
    username: string;
    name: string;
    posts: string;
    followers: string;
    following: string;
    creatorTitle?: string;
    averageEngagement: string;
    bio?: string[];
    averageViews: string; 
}
