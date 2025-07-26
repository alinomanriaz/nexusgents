// import HeroSectionMarketing from '@/components/digital-marketing/HeroSectionMarketing'
import React from "react";
import {
  FileSearch,
  PenTool,
  ShieldCheck,
  Zap,
  BarChart,
  FileText,
  Layers,
  BookOpen,
  TrendingUp,
  Users,
  CheckCircle,
  Share2,
} from "lucide-react";

import Services from "@/components/common-components/Services";
// import WorkExperiances from '@/components/common-components/WorkExperiances'
import DetailContent from "@/components/common-components/DetailContent";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import WorkExperiances from "@/components/common-components/WorkExperiances";

const HeroSectionContent = {
  fheading: "Premium Content That",
  sheading: "Engages & Converts",
  subheading:
    "Expertly crafted articles that boost your authority, drive organic traffic, and turn readers into customers—written by industry specialists.",
  list: [
    {
      Icon: PenTool,
      text: "SEO-Optimized Writing",
    },
    {
      Icon: Zap,
      text: "24-48 Hour Delivery",
    },
    {
      Icon: FileSearch,
      text: "In-Depth Research",
    },
    {
      Icon: ShieldCheck,
      text: "Plagiarism-Free",
    },
  ],
  fbutton: {
    link: "/order",
    name: "Order Content Now",
  },
  sbutton: {
    link: "/samples",
    name: "View Samples",
  },
};
const servicesContent = {
  titles: {
    title: "Our Article Writing Services",
    subtitle:
      "Comprehensive content solutions designed to boost your search visibility and engage your target audience.",
  },
  services: [
    {
      icon: FileText,
      title: "SEO Blog Articles",
      description:
        "Keyword-optimized blog posts that rank well in search engines while providing genuine value to readers.",
    },
    {
      icon: Layers,
      title: "Pillar Page Creation",
      description:
        "Comprehensive, in-depth content hubs that establish topical authority and support your SEO strategy.",
    },
    {
      icon: BarChart,
      title: "Commercial Content",
      description:
        "High-converting product descriptions, service pages, and landing pages that drive sales.",
    },
    {
      icon: BookOpen,
      title: "Long-Form Articles",
      description:
        "Detailed guides and whitepapers (2,000-5,000 words) that demonstrate expertise and generate leads.",
    },
    {
      icon: TrendingUp,
      title: "Evergreen Content",
      description:
        "Timeless, authoritative pieces that continue to drive traffic months and years after publication.",
    },
    {
      icon: Zap,
      title: "Newsjacking Pieces",
      description:
        "Timely articles capitalizing on current trends and breaking news in your industry.",
    },
    {
      icon: Users,
      title: "Expert Roundups",
      description:
        "Curated insights from industry leaders that boost credibility and social shares.",
    },
    {
      icon: CheckCircle,
      title: "Content Refreshes",
      description:
        "Updating and optimizing older content to maintain rankings and relevance.",
    },
    {
      icon: Share2,
      title: "Content Distribution",
      description:
        "Strategic promotion of your articles through social media and email campaigns.",
    },
  ],
};
const workExperienceContent = {
  titles: {
    title: "Content That Delivers Results",
    subtitle:
      "See how our strategic article writing has helped businesses establish authority and drive measurable growth.",
  },
  paraContent: [
    {
      heading: "SaaS Company: 400% Traffic Growth",
      text: "Comprehensive pillar page strategy increased organic traffic from 5K to 25K/month in 8 months.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "E-Commerce: 75% More Product Sales",
      text: "Optimized product descriptions and buying guides increased conversion rates by 75%.",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "B2B Service: 120 New Leads/Month",
      text: "Industry-specific whitepapers and case studies generated consistent high-quality leads.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      heading: "Healthcare: #1 Rankings",
      text: "Authoritative medical content ranked for 35+ competitive health-related keywords.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 1500,
      text: "Articles published with an average 3X ROI for clients",
    },
    {
      number: 92,
      text: "Percentage of clients who achieve first-page rankings",
    },
  ],
};
const detailcontent = [
  {
    title: "Why Professional Article Writing Matters",
    description:
      "High-quality articles generate 67% more leads than traditional marketing content. Our research-backed approach combines SEO best practices with engaging storytelling to create content that both ranks well and converts readers. Each piece is crafted by subject matter experts who understand how to present complex information in an accessible way while strategically incorporating keywords and conversion elements. We focus on creating assets that continue to deliver value long after publication through evergreen strategies and regular content refreshes.",
  },
  {
    title: "The Cost of Poor Content Quality",
    description:
      "Thin, generic content fails to rank and damages brand credibility. Google's Helpful Content Update now penalizes low-value articles, making quality more important than ever. Our rigorous editorial process ensures every piece meets the highest standards for accuracy, depth, and readability. We conduct original research, interview subject matter experts, and analyze competitor content to create pieces that truly stand out. The result? Content that earns backlinks, social shares, and rankings while establishing your brand as an industry authority.",
  },
];
const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  heading: "Content That Ranks",
  description: `Our articles are engineered for search success. We combine comprehensive keyword research with semantic SEO techniques to create content that satisfies both search algorithms and human readers. Each piece follows our proven framework for on-page optimization, including strategic header structures, natural keyword placement, and optimized metadata. We focus on creating "10X content" that outperforms competing articles in both quality and comprehensiveness.`,
};
const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Strategic Content Planning",
  description: `We don't just write articles - we build content ecosystems. Our approach begins with detailed audience research and competitive analysis to identify the most valuable content opportunities. We then develop a strategic content calendar that aligns with your business goals and buyer's journey. Each piece is designed to work as part of a larger system, with internal linking strategies that boost domain authority and keep readers engaged across your site.`,
};

const page = () => {
  return (
    <div className="w-full space-y-20 mb-20">
      <HeroSectionContentMarketing content={HeroSectionContent} />
      <Services content={servicesContent} />

      <LeftImageWithContent content={rightSideContent} />
      <RightImageWithContent content={leftSideContent} />
      <WorkExperiances content={workExperienceContent} />
      <DetailContent content={detailcontent} />
    </div>
  );
};

export default page;
