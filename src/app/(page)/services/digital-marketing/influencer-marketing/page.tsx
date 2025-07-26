import HeroSectionMarketing from "@/components/digital-marketing/HeroSectionMarketing";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import {
  FaCertificate,
  FaChartLine,
  FaCreativeCommons,
  FaFileContract,
  FaHandshake,
  FaHashtag,
  FaMicrophone,
  FaRocket,
  FaSearch,
  FaSeedling,
  FaShoppingCart,
  FaUserTie,
} from "react-icons/fa";

const heroSectionContent = {
  fWord: "INFLUENCER",
  Ficon: FaUserTie,
  Sicon: FaRocket,
  Thicon: FaHandshake,
  SWord: "MARKETING",
  Text: "THAT BUILDS TRUST & DRIVES SALES",
  subheading:
    "Leverage authentic creator partnerships to reach engaged audiences. We design data-driven influencer campaigns that generate buzz, boost credibility, and deliver measurable ROI.",
  Fbuttons: {
    link: "/contact",
    name: "Get a Free Strategy Call",
  },
  Sbuttons: {
    link: "#services",
    name: "See Campaign Results",
  },
};
const servicesContent = {
  titles: {
    title: "Our Influencer Marketing Services",
    subtitle:
      "End-to-end creator partnership strategies tailored to your brand goals—from nano-influencers to celebrity collaborations.",
  },
  services: [
    {
      icon: FaSearch,
      title: "Influencer Identification",
      description:
        "Data-backed selection using engagement rates, audience demographics, and brand affinity scoring.",
    },
    {
      icon: FaFileContract,
      title: "Contract Negotiation",
      description:
        "Rate benchmarking and legal agreements that protect your interests while ensuring creator satisfaction.",
    },
    {
      icon: FaHashtag,
      title: "Campaign Strategy",
      description:
        "Platform-specific approaches (Instagram, TikTok, YouTube) with clear KPIs and content guidelines.",
    },
    {
      icon: FaCreativeCommons,
      title: "Content Amplification",
      description:
        "Repurpose influencer content across paid ads, organic social, and website to maximize ROI.",
    },
    {
      icon: FaShoppingCart,
      title: "Affiliate & Commission Programs",
      description:
        "Performance-based partnerships with trackable promo codes and affiliate links.",
    },
    {
      icon: FaMicrophone,
      title: "Influencer Events & Takeovers",
      description:
        "Live streams, product launches, and account takeovers for real-time engagement.",
    },
    {
      icon: FaChartLine,
      title: "Performance Tracking",
      description:
        "Monitor impressions, engagement, conversions, and earned media value.",
    },
    {
      icon: FaSeedling,
      title: "Long-Term Ambassador Programs",
      description:
        "Ongoing partnerships with tiered incentives for sustained brand advocacy.",
    },
    {
      icon: FaCertificate,
      title: "Compliance & Disclosure",
      description:
        "Ensure FTC/ASA compliance with proper sponsorship disclosures.",
    },
  ],
};
const workExperienceContent = {
  titles: {
    title: "Influencer Campaign Success Stories",
    subtitle:
      "How strategic creator partnerships drove brand awareness and conversions for our clients.",
  },
  paraContent: [
    {
      heading: "Beauty Brand: 20M+ Impressions",
      text: "Micro-influencer UGC campaign generated 3,500+ purchases and 12K new followers.",
      image:
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80", // Makeup application
    },
    {
      heading: "Fitness App: 300% ROI",
      text: "Tikker challenge with fitness creators drove 8,200 app downloads in 30 days.",
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80", // Gym influencer
    },
    {
      heading: "Food Brand: Viral Recipe Videos",
      text: "YouTube recipe tutorials by mid-tier creators averaged 500K+ views per video.",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80", // Cooking content
    },
    {
      heading: "Tech Startup: 45% Conversion Rate",
      text: "B2B LinkedIn influencer campaign generated 320 qualified leads.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // Office discussion
    },
  ],
  countContent: [
    {
      number: 12,
      text: "Average earned media value (EMV) for every $1 spent on influencer campaigns.",
    },
    {
      number: 68,
      text: "Percentage of consumers who trust influencer opinions over brand content.",
    },
  ],
};
const detailcontent = [
  {
    title: "Why Influencer Marketing Outperforms Traditional Advertising",
    description:
      "Influencer content delivers 11X higher ROI than traditional digital marketing channels. Authentic creator partnerships offer social proof, tap into niche communities, and overcome ad fatigue effectively. Our approach prioritizes 'right-fit' influencers—not just large followings, but engaged audiences aligned with your brand values. We measure success beyond vanity metrics by tracking real conversions from swipe-ups, promo codes, and affiliate links. This strategy ensures your campaigns are impactful, targeted, and efficient.",
  },
  {
    title: "The Pitfalls of DIY Influencer Programs",
    description:
      "Without proper vetting, brands risk working with influencers who have fake followers or low engagement, wasting resources. Our proprietary screening process assesses audience quality, brand safety, and past campaign performance thoroughly. We manage negotiations, content approvals, and FTC compliance to save you time and ensure professional execution. The outcome? Influencer campaigns that deliver measurable business results, not just inflated impressions or empty engagement.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
  heading: "Authentic Storytelling",
  description:
    "Influencers bring your brand to life with relatable, authentic narratives. We support creators in developing content that feels natural—not salesy—while guiding their audience smoothly through the buyer’s journey. Strategic calls-to-action and product demos are integrated subtly to maintain trust and maximize impact. This storytelling approach helps build genuine connections that convert.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80",
  heading: "Data-Driven Partnerships",
  description:
    "Our influencer selection process digs deeper than follower counts by analyzing: audience demographic alignment, engagement rate benchmarks, brand affinity scores, past campaign conversion data, and content quality with aesthetic fit. This data-driven approach ensures every partnership is strategically matched to your brand’s goals and delivers measurable ROI.",
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
