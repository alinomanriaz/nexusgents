import HeroSectionMarketing from "@/components/digital-marketing/HeroSectionMarketing";
import React from "react";
import {
  BarChart,
  Calendar,
  ClipboardList,
  FileText,
  MessageCircle,
  Play,
  Settings,
  Sliders,
} from "lucide-react";
import { LuMousePointerClick } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import { FaRegCommentDots } from "react-icons/fa";

const heroSectionContent = {
  fWord: "SOCIAL",
  Ficon: SlSocialInstagram,
  Sicon: FaRegCommentDots,
  Thicon: LuMousePointerClick,
  SWord: "IMPACT",
  Text: "THAT DRIVES BRAND GROWTH",
  subheading:
    "Amplify your voice and turn scrolls into sales. We design high-performing social media campaigns that increase engagement, build community, and deliver ROI across every major platform.",
  Fbuttons: {
    link: "/contact",
    name: "Get a Free Strategy Call",
  },
  Sbuttons: {
    link: "#services",
    name: "Explore Services",
  },
};

const servicesContent = {
  titles: {
    title: "Our Social Media Services",
    subtitle:
      "Helping your brand connect, engage, and grow across leading social platforms through strategic content and creative storytelling.",
  },
  services: [
    {
      icon: ClipboardList,
      title: "Brand Discovery & Goal Setting",
      description:
        "We begin by understanding your brand's personality, goals, and audience. This ensures your social media campaigns align with your long-term vision and create meaningful impact.",
    },
    {
      icon: BarChart,
      title: "Competitor & Audience Analysis",
      description:
        "We research your competitors and target audience to uncover trends and content gaps. This helps position your brand for stronger engagement and community growth.",
    },
    {
      icon: FileText,
      title: "Content Strategy & Visual Planning",
      description:
        "We develop a detailed content calendar that blends creativity with strategy — including post formats, themes, and brand messaging tailored for each platform.",
    },
    {
      icon: Settings,
      title: "Platform Setup & Optimization",
      description:
        "From setting up new accounts to optimizing existing profiles, we ensure your social pages are professionally branded and built for conversion.",
    },
    {
      icon: Play,
      title: "Post Scheduling & Publishing",
      description:
        "We manage consistent publishing across all your active channels using optimal timing and frequency to boost reach and visibility.",
    },
    {
      icon: Calendar,
      title: "Creative Content Creation",
      description:
        "Our team designs visually appealing posts, short-form videos, carousels, and stories that resonate with your audience and reinforce your brand identity.",
    },
    {
      icon: Sliders,
      title: "Campaign Management",
      description:
        "We manage ongoing campaigns — from hashtag strategies to influencer collaborations — and ensure everything runs smoothly and delivers measurable results.",
    },
    {
      icon: MessageCircle,
      title: "Community Engagement",
      description:
        "We respond to messages, comments, and DMs to build a loyal online community. Engaging with your audience fosters trust and encourages brand advocacy.",
    },
    {
      icon: BarChart,
      title: "Insights & Monthly Reporting",
      description:
        "You’ll receive detailed reports highlighting audience growth, engagement metrics, and actionable insights to inform future strategies.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Campaigns That Go Viral",
    subtitle:
      "Explore how our social media strategies helped brands create buzz, build trust, and drive traffic in global markets.",
  },
  paraContent: [
    {
      heading: "Instagram Growth in the US",
      text: "We helped fashion and fitness brands reach over 500K followers through reel campaigns, stories, and strategic influencer partnerships.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      heading: "Canadian Brand Awareness",
      text: "Our team ran paid ad and content strategies for Canadian startups, increasing engagement by 200% in just three months.",
      image:
        "https://images.unsplash.com/photo-1568036807850-c5a8dfcd2970?auto=format&fit=crop&w=800&q=80",
    },
    {
      heading: "UAE Influencer Collaborations",
      text: "In the UAE, we launched targeted influencer campaigns and localized reels to generate brand buzz for lifestyle and tech brands.",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    },
    {
      heading: "Global Social Impact",
      text: "From meme content to product promos, we helped international brands go viral and turn engagement into sales across Instagram, TikTok, and LinkedIn.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 2500,
      text: "Social media campaigns launched with consistent ROI tracking.",
    },
    {
      number: 500000,
      text: "Followers gained across platforms through organic and paid growth.",
    },
  ],
};

const detailcontent = [
  {
    title: "The Role of Social Media in Modern Marketing:",
    description:
      "Social media has transformed the way brands connect with audiences — making it an essential component of modern marketing. From awareness and engagement to conversions and loyalty, platforms like Instagram, LinkedIn, and TikTok offer direct access to billions of users. Our approach involves creating platform-specific strategies that align with your voice, goals, and target demographic. We combine creative content with algorithm-friendly formats to ensure maximum reach and relevance. With our support, you can build trust, grow your audience, and increase brand visibility — all while staying true to your mission.",
  },
  {
    title: "Why Every Brand Needs a Social Media Strategy:",
    description:
      "Gone are the days of posting randomly — today, success requires planning, creativity, and analytics. Our social media strategy services help businesses gain clarity, consistency, and performance. We break down platform goals, user intent, and content types to design a roadmap that fits your audience and brand style. Whether you're starting from scratch or scaling up, we’ll craft an approach that gets noticed and delivers. Let your brand thrive in the conversation with curated visuals, engaging captions, and data-backed decisions.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80",
  heading: "Build an Engaged Online Community",
  description: `An engaged community can be your biggest brand asset. We help you grow a loyal following across social media platforms by combining timely interaction with authentic storytelling. Our engagement strategies include comment replies, story polls, and interactive posts that invite conversation. By consistently showing up where your audience is, we help you foster brand love and trust. We also monitor sentiment and feedback to refine your messaging and deepen relationships. This approach turns casual followers into vocal brand advocates and repeat customers.`,
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  heading: "Social Media Insights That Drive Action",
  description: `Every like, comment, and share tells a story — and we know how to read it. Our team uses advanced social analytics tools to track post performance, audience behavior, and content trends. We translate those metrics into clear, actionable strategies. Whether it's refining your posting time or adjusting visuals for better click-throughs, we act fast to keep momentum going. You’ll get transparent reports with performance KPIs and next-step suggestions tailored to your goals. By combining real-time data with creative instincts, we ensure your campaigns are always moving forward.`,
};

const page = () => {
  return (
    <div className="w-full space-y-20 mb-20">
      <HeroSectionMarketing content={heroSectionContent} />
      <Services content={servicesContent} />
      <LeftImageWithContent content={rightSideContent} />
      <RightImageWithContent content={leftSideContent} />
      <WorkExperiances content={workExperienceContent} />
      <DetailContent content={detailcontent} />
    </div>
  );
};

export default page;
