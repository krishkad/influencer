import { SVGAttributes } from "react";
import { Search } from "react-feather";

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
]


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
    Label: "Campaign Management",
    href: "/tool/campaigns",
    description: "Effortlessly manage influencer marketing campaigns with our intuitive tool designed specifically for agencies.",
    miniDescription: "Effortlessly manage influencer marketing campaigns with our intuitive tool designed specifically for agencies."
  },
  {
    Label: "Contract Management",
    href: "/tool/contracts",
    description: "Simplify contract management for influencer marketing agencies with our specialized tool. Seamlessly draft, negotiate, and track contracts with influencers, ensuring compliance and smooth collaboration throughout every campaign.",
    miniDescription: "Simplify contract management for influencer marketing agencies with our specialized tool."
  },
  {
    Label: "Content Collaboration",
    href: "/tool/content",
    description: "Facilitate seamless content collaboration between influencers and marketing agencies with our dedicated tool. Streamline communication, content creation, and approval processes to ensure efficient and successful campaign execution.",
    miniDescription: "Facilitate seamless content collaboration between influencers and marketing agencies with our dedicated tool."
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
]


const CategoryForInfluencer: string[] = [
  "Beauty and Makeup",
  "Fashion",
  "Fitness",
  "Travel",
  "Food",
  "Parenting",
  "Technology",
  "Gaming",
  "Lifestyle",
  "Music and Entertainment",
  "Health and Wellness",
  "Business and Entrepreneurship",
  "Finance",
  "Education and Learning",
  "Art and Design",
  "Sports",
  "Comedy",
  "Mental Health and Self-Care",
  "Science and Technology",
  "Pets and Animals"
];

export interface Album {
  name: string
  artist: string
  cover: string
}

export const madeForYouAlbums = [
  {
    name: "Thinking Components",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "Functional Fury",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
]

export type Playlist = (typeof playlists)[number]

export const playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
]