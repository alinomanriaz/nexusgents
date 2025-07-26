import HeroSectionMarketing from "@/components/digital-marketing/HeroSectionMarketing";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import {
  FaChartBar,
  FaChartLine,
  FaFileAlt,
  FaGlobe,
  FaGoogle,
  FaLaptopCode,
  FaLink,
  FaMobile,
  FaPenAlt,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

const heroSectionContent = {
  fWord: "SEO",
  Ficon: FaSearch,
  Sicon: FaChartLine,
  Thicon: FaGoogle,
  SWord: "VISIBILITY",
  Text: "THAT DRIVES ORGANIC GROWTH",
  subheading:
    "Dominate search rankings and turn clicks into customers. We engineer data-driven SEO strategies that increase organic traffic, boost domain authority, and deliver sustainable ROI.",
  Fbuttons: {
    link: "/contact",
    name: "Get a Free SEO Audit",
  },
  Sbuttons: {
    link: "#services",
    name: "See Our Results",
  },
};

const servicesContent = {
  titles: {
    title: "Our SEO Services",
    subtitle:
      "Comprehensive search engine optimization strategies tailored to your business goals, from technical fixes to content that converts.",
  },
  services: [
    {
      icon: FaSearch,
      title: "Keyword Research & Strategy",
      description:
        "We identify high-intent keywords with low competition to target, ensuring your content ranks for queries that drive qualified traffic.",
    },
    {
      icon: FaLaptopCode,
      title: "Technical SEO Audit",
      description:
        "Fix crawl errors, site speed issues, and indexing problems that hinder your search performance. Includes schema markup implementation.",
    },
    {
      icon: FaPenAlt,
      title: "On-Page Optimization",
      description:
        "Meta tags, header structures, and content optimization aligned with search intent to maximize click-through rates and dwell time.",
    },
    {
      icon: FaLink,
      title: "Link Building & Authority Growth",
      description:
        "Earn high-quality backlinks through guest posts, digital PR, and strategic partnerships to boost domain authority.",
    },
    {
      icon: FaFileAlt,
      title: "Content Strategy",
      description:
        "Data-backed content clusters and pillar pages designed to rank for commercial and informational search queries.",
    },
    {
      icon: FaMobile,
      title: "Local SEO",
      description:
        "Optimize Google Business Profiles, citations, and localized content to dominate near me searches.",
    },
    {
      icon: FaShoppingCart,
      title: "E-Commerce SEO",
      description:
        "Product page optimization, category structures, and WooCommerce/Shopify fixes to increase organic sales.",
    },
    {
      icon: FaGlobe,
      title: "International SEO",
      description:
        "Hreflang implementation and geo-targeting strategies for global market expansion.",
    },
    {
      icon: FaChartBar,
      title: "Performance Reporting",
      description:
        "Monthly reports tracking rankings, traffic growth, and conversions with actionable insights.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Proven SEO Results",
    subtitle:
      "How we helped businesses increase organic traffic, outrank competitors, and scale revenue through search engine optimization.",
  },
  paraContent: [
    {
      heading: "SaaS Startup: 400% Traffic Growth",
      text: "Technical SEO fixes + content hub strategy increased organic traffic from 5K to 25K/month in 8 months.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // Analytics dashboard
    },
    {
      heading: "E-Commerce: #1 Rankings for 50+ Keywords",
      text: "Product page optimization and link building doubled organic revenue for a skincare brand.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", // Laptop with analytics
    },
    {
      heading: "Local Business: 300% More Leads",
      text: "Google Business Profile optimization and local citations dominated city-specific searches.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", // Map pins
    },
    {
      heading: "Enterprise: 60% Traffic YoY Increase",
      text: "Site architecture overhaul and international SEO expanded global reach.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Global analytics
    },
  ],
  countContent: [
    {
      number: 1000,
      text: "Keywords ranked on Google's first page for clients.",
    },
    {
      number: 85,
      text: "Average percentage increase in organic traffic within 12 months.",
    },
  ],
};

const detailcontent = [
  {
    title: "Why SEO is the Foundation of Digital Growth",
    description:
      "Organic search drives 53% of all website traffic — more than all social media combined. Unlike paid ads, SEO delivers compounding returns: a single optimized page can generate leads for years. Our strategies focus on technical excellence, user-centric content, and authoritative backlinks to future-proof your visibility. With Google's algorithms prioritizing expertise and experience, we ensure your site meets every ranking factor while aligning with business goals.",
  },
  {
    title: "The Cost of Ignoring SEO in 2024",
    description:
      "Without SEO, you’re invisible to the 8.5 billion daily Google searches. Competitors investing in SEO capture your potential customers at every stage of the buyer’s journey. Our audits reveal missed opportunities, from indexing errors to untapped keywords. We then build a customized roadmap to close gaps, outrank competitors, and own your niche. The result? Sustainable traffic that reduces reliance on volatile ad platforms.",
  },
];

const rightSideContent = {
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  heading: "Long-Term Organic Growth",
  description: `SEO isn’t a quick fix—it’s a scalable asset. While paid ads stop working the moment you turn them off, SEO compounds over time. We focus on evergreen strategies like content hubs, technical optimizations, and authoritative backlinks to build domain equity. Our clients average 85%+ traffic growth within a year, with continued increases as their authority grows.`,
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  heading: "Data-Driven SEO Decisions",
  description: `We transform Google Search Console data, SERP analysis, and competitor gaps into actionable strategies. Every recommendation—from keyword targeting to content length—is backed by historical performance data and AI-powered forecasting. Real-time dashboards track rankings, traffic, and conversions so you always see ROI.`,
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
