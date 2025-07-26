import HeroSectionMarketing from "@/components/digital-marketing/HeroSectionMarketing";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import {
  FaBullseye,
  FaChartBar,
  FaChartLine,
  FaFlask,
  FaGoogle,
  FaImage,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaMousePointer,
  FaSearch,
  FaShoppingBag,
  FaVideo,
} from "react-icons/fa";

const heroSectionContent = {
  fWord: "GOOGLE",
  Ficon: FaGoogle,
  Sicon: FaChartLine,
  Thicon: FaMousePointer,
  SWord: "ADS",
  Text: "THAT DELIVER QUALIFIED LEADS",
  subheading:
    "Dominate search results and capture high-intent buyers. We build data-driven Google Ads campaigns that maximize conversions while minimizing wasted ad spend.",
  Fbuttons: {
    link: "/contact",
    name: "Get a Free Audit",
  },
  Sbuttons: {
    link: "#services",
    name: "See Case Studies",
  },
};
const servicesContent = {
  titles: {
    title: "Our Google Ads Services",
    subtitle:
      "Comprehensive PPC management across Google's advertising ecosystem to drive targeted traffic and measurable business growth.",
  },
  services: [
    {
      icon: FaSearch,
      title: "Search Campaigns",
      description:
        "Keyword-optimized text ads that appear when potential customers search for your products/services on Google.",
    },
    {
      icon: FaImage,
      title: "Display Network",
      description:
        "Visual banner ads across millions of websites to build brand awareness and retarget visitors.",
    },
    {
      icon: FaShoppingBag,
      title: "Shopping Ads",
      description:
        "Product feed optimization for eCommerce businesses to showcase items directly in search results.",
    },
    {
      icon: FaVideo,
      title: "YouTube Advertising",
      description:
        "Pre-roll, bumper, and discovery ads to engage audiences during video content consumption.",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Local Service Ads",
      description:
        "Lead generation for service-area businesses with pay-per-lead pricing and Google guarantee.",
    },
    {
      icon: FaMobileAlt,
      title: "App Campaigns",
      description:
        "Drive installations and in-app actions for mobile applications across Google's network.",
    },
    {
      icon: FaBullseye,
      title: "Remarketing",
      description:
        "Re-engage past website visitors with targeted ads across Google's platforms.",
    },
    {
      icon: FaFlask,
      title: "A/B Testing",
      description:
        "Continuous experimentation with ad copy, landing pages, and bidding strategies.",
    },
    {
      icon: FaChartBar,
      title: "Conversion Tracking",
      description:
        "Advanced setup to measure ROI from phone calls, form fills, and eCommerce transactions.",
    },
  ],
};
const workExperienceContent = {
  titles: {
    title: "Google Ads Success Stories",
    subtitle:
      "Proven campaigns that increased leads, lowered acquisition costs, and delivered measurable ROI.",
  },
  paraContent: [
    {
      heading: "Law Firm: 50% Lower CPA",
      text: "Restructured account architecture and ad copy testing reduced cost per acquisition from $200 to $98 while maintaining case volume.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80", // Legal documents
    },
    {
      heading: "E-Commerce: 300% ROAS",
      text: "Shopping feed optimization and RLSA strategies generated $3 for every $1 spent on ad spend.",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80", // Package delivery
    },
    {
      heading: "Home Services: 80% Call Increase",
      text: "Local service ads combined with call tracking generated 120+ qualified calls monthly.",
      image:
        "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&q=80", // Technician working
    },
    {
      heading: "B2B SaaS: 40% More Demos",
      text: "Competitor keyword bidding and landing page personalization improved demo sign-up conversion rate.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // Analytics dashboard
    },
  ],
  countContent: [
    {
      number: 63,
      text: "Average percentage decrease in cost-per-lead for clients within 90 days.",
    },
    {
      number: 4.8,
      text: "Average return on ad spend (ROAS) across our managed accounts.",
    },
  ],
};
const detailcontent = [
  {
    title: "Why Google Ads Deliver Immediate Results",
    description:
      "Google Ads place your business in front of customers at the exact moment they're searching for your solutions. Unlike organic methods, PPC delivers targeted traffic immediately, with complete control over budget and messaging. Our data-driven approach combines strategic keyword selection, negative keyword filtering, and AI-powered bidding to ensure you only pay for high-quality clicks. We continuously optimize campaigns based on conversion data to maximize your advertising ROI.",
  },
  {
    title: "The Hidden Costs of Poor PPC Management",
    description:
      "Inefficient campaigns waste up to 76% of budgets on irrelevant clicks. Common pitfalls include broad match keywords without negatives, poor landing page alignment, and inadequate conversion tracking. Our audit process identifies these leaks, then implements Quality Score improvements, ad schedule optimization, and device bid adjustments. The result? Lower costs per conversion and sustainable scaling of your most profitable campaigns.",
  },
];
const rightSideContent = {
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  heading: "Performance-First Approach",
  description: `We focus on conversions—not just clicks. Every campaign element from keyword selection to ad copy is engineered to drive measurable business outcomes. Our proprietary bid strategies automatically adjust to maximize conversions within your target CPA.`,
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  heading: "Full-Funnel Strategy",
  description: `From top-of-funnel awareness campaigns to bottom-funnel retargeting, we build integrated ad sequences that guide prospects through the buyer's journey. Audience targeting combines first-party data with Google's AI to reach your ideal customers at every stage.`,
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
