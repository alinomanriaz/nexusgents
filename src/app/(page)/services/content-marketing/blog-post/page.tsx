// import HeroSectionMarketing from '@/components/digital-marketing/HeroSectionMarketing'
import React from "react";
import {
  Zap,
  BarChart,
  FileText,
  Search,
  Clock,
  Share2,
  Layers,
  TrendingUp,
  List,
  Users,
  CheckCircle,
} from "lucide-react";

import Services from "@/components/common-components/Services";
// import WorkExperiances from '@/components/common-components/WorkExperiances'
import DetailContent from "@/components/common-components/DetailContent";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import WorkExperiances from "@/components/common-components/WorkExperiances";

const HeroSectionContent = {
  fheading: "High-Impact Blog Posts That",
  sheading: "Rank & Engage Readers",
  subheading:
    "Professionally crafted blog content that boosts your search visibility, establishes authority, and converts visitors into subscribers and customers.",
  list: [
    {
      Icon: Search,
      text: "SEO-Optimized",
    },
    {
      Icon: Clock,
      text: "Fast Turnaround",
    },
    {
      Icon: FileText,
      text: "Research-Backed",
    },
    {
      Icon: Share2,
      text: "Share-Worthy",
    },
  ],
  fbutton: {
    link: "/order-blog-posts",
    name: "Order Blog Posts",
  },
  sbutton: {
    link: "/blog-samples",
    name: "See Blog Samples",
  },
};

const servicesContent = {
  titles: {
    title: "Our Blog Writing Services",
    subtitle:
      "Comprehensive blog content solutions tailored to your audience and business goals.",
  },
  services: [
    {
      icon: FileText,
      title: "SEO Blog Posts",
      description:
        "500-1,500 word articles optimized for target keywords while maintaining natural readability and flow.",
    },
    {
      icon: Layers,
      title: "Pillar Blog Posts",
      description:
        "2,000-3,000 word comprehensive guides that establish topical authority and support cluster content.",
    },
    {
      icon: TrendingUp,
      title: "Evergreen Content",
      description:
        "Timeless blog posts that continue generating traffic and leads years after publication.",
    },
    {
      icon: Zap,
      title: "Trend-Based Posts",
      description:
        "Timely articles capitalizing on current industry trends and breaking news.",
    },
    {
      icon: List,
      title: "List Posts",
      description: `Engaging listicles (e.g., "10 Best...") that are highly shareable and linkable.`,
    },
    {
      icon: Users,
      title: "Expert Roundups",
      description:
        "Curated insights from industry leaders that boost credibility and social shares.",
    },
    {
      icon: BarChart,
      title: "Case Studies",
      description:
        "Real-world success stories that demonstrate your expertise and results.",
    },
    {
      icon: CheckCircle,
      title: "Content Refreshes",
      description:
        "Updating and optimizing older blog posts to maintain rankings and relevance.",
    },
    {
      icon: Share2,
      title: "Content Promotion",
      description:
        "Strategic distribution of your blog posts through social media and email.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Blogging Success Stories",
    subtitle:
      "How our strategic blog content has helped businesses grow their audience and revenue.",
  },
  paraContent: [
    {
      heading: "SaaS Startup: 300% Traffic Boost",
      text: "Strategic blog content increased organic traffic from 8K to 32K/month in 12 months.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "E-Commerce: 60% More Sales",
      text: "Product-focused blog content generated 60% more conversions than standard product pages.",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "B2B Service: 90 New Leads/Month",
      text: "Solution-focused blog strategy generated consistent high-quality leads.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      heading: "Health Niche: #1 Rankings",
      text: "Authoritative health blog content ranked for 25+ competitive medical keywords.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 1200,
      text: "Blog posts published with average 3X ROI for clients",
    },
    {
      number: 95,
      text: "Percentage of client blogs that achieve first-page rankings",
    },
  ],
};

const detailcontent = [
  {
    title: "The Power of Strategic Blogging",
    description:
      "Businesses that blog receive 55% more website visitors and generate 67% more leads than those that don't. Our blog writing service combines SEO expertise with engaging storytelling to create content that ranks well and converts readers. Each post is crafted to address specific audience pain points while strategically incorporating keywords and conversion elements. We focus on creating blog content that builds trust, demonstrates expertise, and moves readers through the buyer's journey.",
  },
  {
    title: "Why Most Business Blogs Fail",
    description:
      "90% of business blogs never gain traction due to poor strategy, inconsistent publishing, and low-quality content. Our proven blog writing process ensures every post delivers value to both readers and search engines. We conduct thorough keyword research, competitive analysis, and audience profiling before writing a single word. The result is blog content that attracts qualified traffic, earns backlinks, and establishes your brand as an industry thought leader.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  heading: "Blogs That Rank & Convert",
  description: `Our blog posts are engineered for both search visibility and reader engagement. We combine data-driven keyword targeting with compelling storytelling to create content that ranks well and keeps readers engaged. Each post includes strategic on-page SEO elements, internal linking opportunities, and clear calls-to-action that guide readers toward conversion.`,
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Strategic Blog Planning",
  description: `We don't just write blog posts - we develop comprehensive blog strategies. Our approach includes content gap analysis, keyword clustering, and editorial calendar development to ensure your blog delivers maximum business impact. Each post is designed to work as part of a larger content ecosystem that builds authority and drives consistent organic growth.`,
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
