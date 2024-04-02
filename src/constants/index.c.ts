

export const NavLinks: { Label: string; href: string; description: string }[] = [
  {
    Label: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    Label: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    Label: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    Label: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    Label: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    Label: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const ToolNavbar: { Label: string, href: string, description: string, miniDescription: string }[] = [
  {
    Label: "Dashboard",
    href: "/tool/dashboard",
    description: "Find Influencer with Custom filters, get time advantage and aqurate influencers for your client/brand Image. In-depth analytics are provided.",
    miniDescription: "Find Influencer with Custom filters, get time advantage and aqurate influencers for your client/brand Image."
  },
  {
    Label: "Find Influencer",
    href: "/tool/influencers",
    description: "Find Influencer with Custom filters, get time advantage and aqurate influencers for your client/brand Image. In-depth analytics are provided.",
    miniDescription: "Find Influencer with Custom filters, get time advantage and aqurate influencers for your client/brand Image."
  },
  {
    Label: "Contract Generation",
    href: "/tool/contract",
    description: "Simplify contract management for influencer marketing agencies with our specialized tool. Seamlessly draft, negotiate, and track contracts with influencers, ensuring compliance and smooth collaboration throughout every campaign.",
    miniDescription: "Simplify contract management for influencer marketing agencies with our specialized tool."
  },
  {
    Label: "Trend Identification",
    href: "/tool/trends",
    description: "Stay ahead of the curve with our trend identification tool designed for influencer marketing agencies. Analyze data, monitor social media platforms, and identify emerging trends to optimize influencer selection and campaign strategies for maximum impact.",
    miniDescription: "Stay ahead of the curve with our trend identification tool designed for influencer marketing agencies."
  },
  {
    Label: "Report Generation",
    href: "/tool/reports",
    description: "Effortlessly generate comprehensive reports for influencer marketing campaigns with our specialized tool. Track performance metrics, analyze engagement data, and showcase campaign success with professional reports tailored for agencies.",
    miniDescription: "Effortlessly generate comprehensive reports for influencer marketing campaigns with our specialized tool."
  },
  {
    Label: "AI Approaching",
    href: "/tool/approach",
    description: "Experience the future of influencer marketing with our AI-powered approach tool for agencies.",
    miniDescription: "Experience the future of influencer marketing with our AI-powered approach tool for agencies."
  },
];

export const influencerCategories: { label: string, value: string }[] = [
  { label: "Fashion", value: "fashion" },
  { label: "Beauty", value: "beauty" },
  { label: "Fitness", value: "fitness" },
  { label: "Travel", value: "travel" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Food", value: "food" },
  { label: "Parenting", value: "parenting" },
  { label: "Gaming", value: "gaming" },
  { label: "Tech", value: "tech" },
  { label: "Health & Wellness", value: "health_and_wellness" },
  { label: "Home Decor", value: "home_decor" },
  { label: "DIY & Crafts", value: "diy_and_crafts" },
  { label: "Business & Entrepreneurship", value: "business_and_entrepreneurship" },
  { label: "Finance", value: "finance" },
  { label: "Education", value: "education" },
  { label: "Pets", value: "pets" },
  { label: "Books & Literature", value: "books_and_literature" },
  { label: "Art & Design", value: "art_and_design" },
  { label: "Photography", value: "photography" },
  { label: "Music", value: "music" },
  { label: "Comedy", value: "comedy" },
  { label: "Social Issues & Activism", value: "social_issues_and_activism" },
  { label: "Entertainment", value: "entertainment" }
];

export const followerCounts: { label: string, value: string }[] = [
  { label: "0 - 1k", value: "0 - 1000" },
  { label: "1k - 10k", value: "1001 - 10000" },
  { label: "10k - 50k", value: "10001 - 50000" },
  { label: "50k - 100k", value: "50001 - 100000" },
  { label: "100k - 500k", value: "100001 - 500000" },
  { label: "500k - 1M", value: "500001 - 1000000" },
  { label: "1M - 5M", value: "1000001 - 5000000" },
  { label: "5M - 10M", value: "5000001 - 10000000" },
  { label: "10M - 50M", value: "10000001 - 50000000" },
  { label: "50M - 100M", value: "50000001 - 100000000" },
  { label: "100M+", value: "100000001+" }
];


export const influencerLocations: { label: string, value: string }[] = [
  { label: "North America", value: "North America" },
  { label: "United States", value: "United States" },
  { label: "Canada", value: "Canada" },
  { label: "Mexico", value: "Mexico" },
  { label: "South America", value: "South America" },
  { label: "Brazil", value: "Brazil" },
  { label: "Argentina", value: "Argentina" },
  { label: "Colombia", value: "Colombia" },
  { label: "Europe", value: "Europe" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "Germany", value: "Germany" },
  { label: "France", value: "France" },
  { label: "Spain", value: "Spain" },
  { label: "Italy", value: "Italy" },
  { label: "Asia", value: "Asia" },
  { label: "China", value: "China" },
  { label: "India", value: "India" },
  { label: "Japan", value: "Japan" },
  { label: "South Korea", value: "South Korea" },
  { label: "Australia", value: "Australia" },
  { label: "Africa", value: "Africa" },
  { label: "Nigeria", value: "Nigeria" },
  { label: "South Africa", value: "South Africa" },
  { label: "Kenya", value: "Kenya" },
  { label: "Online/Global", value: "Online/Global" },
  // You can add more specific locations as needed
];

export const genders: { label: string, value: string }[] = [
  { label: "All", value: "all" },
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Non-Binary", value: "Non-Binary" },
  { label: "Transgender", value: "Transgender" },
  { label: "Cisgender", value: "Cisgender" }
];

export const engagementRates: { label: string, value: string }[] = [
  { label: "0 - 1%", value: "0.01" },
  { label: "1 - 2%", value: "0.02" },
  { label: "2 - 3%", value: "0.03" },
  { label: "3 - 4%", value: "0.04" },
  { label: "4 - 5%", value: "0.05" },
  { label: "5 - 6%", value: "0.06" },
  { label: "6 - 7%", value: "0.07" },
  { label: "7 - 8%", value: "0.08" },
  { label: "8 - 9%", value: "0.09" },
  { label: "9 - 10%", value: "0.10" },
  { label: "10%+", value: "0.10+" } // assuming 10% or more
];

export const audienceIncomeLevels: { label: string, value: string }[] = [
  { label: "All", value: "all" },
  { label: "Low-income", value: "Low-income" },
  { label: "Middle-income", value: "Middle-income" },
  { label: "High-income", value: "High-income" }
];

export const audienceAgeGroups: { label: string, value: string }[] = [
  { label: "18-24 years", value: "18-24" },
  { label: "25-34 years", value: "25-34" },
  { label: "35-44 years", value: "35-44" },
  { label: "45-54 years", value: "45-54" },
  { label: "55-64 years", value: "55-64" },
  { label: "65+ years", value: "65+" }
];

export const audienceOccupations: { label: string, value: string }[] = [
  { label: "All", value: "all" },
  { label: "Student", value: "Student" },
  { label: "Professional", value: "Professional" },
  { label: "Entrepreneur", value: "Entrepreneur" },
  { label: "Homemaker", value: "Homemaker" },
  { label: "Retired", value: "Retired" }
];

export const dummyProfile: instaProfileType[] = [
  {
    imgUrl: "https://images.unsplash.com/photo-1486432155089-343c871b640f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "krrrish_",
    name: "krrish kadam",
    posts: "23",
    followers: "123",
    following: "321",
    creatorTitle: "public figure",
    averageEngagement: "3%",
    bio: [
      "😍 Living my best life. 🌟",
      "🎉 Living it up, one day at a time. 🥂",
      "🏆 Won’t stop till I drop. 💯",
      "🚀 Can’t stop, won’t stop. 🔥"
    ]
    

  },
  {
    imgUrl: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "eve_conor",
    name: "Eve Cornor",
    posts: "23",
    followers: "123",
    following: "321",
    creatorTitle: "public figure",
    averageEngagement: "3%",
   bio: [
    "🙌 Can’t stop being awesome. 😎",
    "😍 Awesome by birth. 😘",
    "💫 Dream chaser with a heart of gold. 💛",
    "🌠 Turning dreams into reality, one post at a time. 📸"
   ]
    

  },
  {
    imgUrl: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "stevehimer",
    name: "Steve Himer",
    posts: "23",
    followers: "123",
    following: "321",
    creatorTitle: "public figure",
    averageEngagement: "3%",
    bio: [
      "🌎 Adventurer in the digital realm. 🌐",
      "💕 In a committed relationship with success. 💯",
      "🌼 Simplicity with a dash of complexity. 🌶",
      "🎯 Chasing goals, not trends. 🙅"
    ]
    

  },
  {
    imgUrl: "https://images.unsplash.com/photo-1520626337972-ebf863448db6?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "tom_mcleran",
    name: "Tom McLaren",
    posts: "23",
    followers: "123",
    following: "321",
    creatorTitle: "public figure",
    averageEngagement: "3%",
    bio: [
      "🏋 Gym enthusiast. 💦",
      "🚗 Petrolhead. 🚘",
      "🚙 Automobile enthusiast. 🚖",
      "😊 Stay positive, dream big. 🌠"
    ]

  },
];