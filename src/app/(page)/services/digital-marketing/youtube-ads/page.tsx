import HeroSectionMarketing from "@/components/digital-marketing/HeroSectionMarketing";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import {
  FaBullseye,
  FaChartLine,
  FaChartPie,
  FaFilm,
  FaHashtag,
  FaMobileAlt,
  FaMoneyBillWave,
  FaRetweet,
  FaShoppingCart,
  FaSyncAlt,
  FaVideo,
  FaYoutube,
} from "react-icons/fa";
const heroSectionContent = {
  fWord: "YOUTUBE",
  Ficon: FaYoutube,
  Sicon: FaChartLine,
  Thicon: FaVideo,
  SWord: "ADVERTISING",
  Text: "THAT CAPTURES ATTENTION & CONVERTS",
  subheading:
    "Harness the power of video to engage your audience where they're most receptive. We create data-driven YouTube ad campaigns that drive brand awareness, leads, and sales.",
  Fbuttons: {
    link: "/contact",
    name: "Get a Free Strategy Session",
  },
  Sbuttons: {
    link: "#services",
    name: "See Our Results",
  },
};
const servicesContent = {
  titles: {
    title: "Our YouTube Advertising Services",
    subtitle:
      "End-to-end YouTube ad solutions from creative production to precision targeting and optimization.",
  },
  services: [
    {
      icon: FaFilm,
      title: "Ad Creative Production",
      description:
        "Professional video ad creation tailored to YouTube formats (skippable/non-skippable, bumper, discovery).",
    },
    {
      icon: FaBullseye,
      title: "Audience Targeting Strategy",
      description:
        "Precision targeting using custom intent audiences, affinity segments, remarketing lists, and first-party data.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Bidding Strategy Optimization",
      description:
        "Maximize conversions or target CPV with smart bidding strategies adapted to your campaign goals.",
    },
    {
      icon: FaMobileAlt,
      title: "YouTube Mobile Ads",
      description:
        "Vertical video ads optimized for mobile viewing and Stories placements.",
    },
    {
      icon: FaShoppingCart,
      title: "Product Video Ads",
      description:
        "Showcase products with shoppable YouTube ads that link directly to your product pages.",
    },
    {
      icon: FaHashtag,
      title: "Influencer Collaboration Ads",
      description:
        "Leverage influencer content in your ads through YouTube's branded content tools.",
    },
    {
      icon: FaChartPie,
      title: "Campaign Analytics",
      description:
        "Track view-through rates, audience retention, and conversion attribution across devices.",
    },
    {
      icon: FaSyncAlt,
      title: "A/B Testing",
      description:
        "Test different thumbnails, video lengths, and CTAs to identify top-performing creatives.",
    },
    {
      icon: FaRetweet,
      title: "Remarketing Sequences",
      description:
        "Sequential messaging strategies to re-engage viewers across their YouTube journey.",
    },
  ],
};
const workExperienceContent = {
  titles: {
    title: "YouTube Advertising Success Stories",
    subtitle:
      "How we helped brands stand out and convert on the world's largest video platform.",
  },
  paraContent: [
    {
      heading: "E-Commerce: 5X ROAS",
      text: "TrueView shopping ads with product feeds generated $5 for every $1 spent on ad spend.",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80", // Package delivery
    },
    {
      heading: "App Install: 70% Lower CPI",
      text: "Mobile-optimized app install ads reduced cost-per-install by 70% compared to other networks.",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80", // Phone with app
    },
    {
      heading: "B2B: 300% More Leads",
      text: "15-second bumper ads combined with discovery ads filled the sales pipeline cost-effectively.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // Analytics dashboard
    },
    {
      heading: "Brand Awareness: 2M+ Views",
      text: "Non-skippable ads placed in relevant content achieved 92% completion rates.",
      image:
        "https://images.unsplash.com/photo-1611162616475-46592b32151a?w=800&q=80", // Video production
    },
  ],
  countContent: [
    {
      number: 85,
      text: "Average percentage of clients who achieve lower CPV than industry benchmarks.",
    },
    {
      number: 3,
      text: "Average return on ad spend (ROAS) for eCommerce YouTube campaigns.",
    },
  ],
};
const detailcontent = [
  {
    title: "Why YouTube Ads Outperform Other Video Platforms",
    description:
      "YouTube reaches more 18-49 year-olds than all TV networks combined, making it an unparalleled advertising channel. With Google’s intent-based targeting, your ads appear alongside content viewers actively choose to watch. Our strategies leverage sight, sound, and motion with precise audience segmentation, delivering 84% higher attention rates than typical social media videos. From skippable TrueView campaigns to unskippable bumper ads, we expertly match ad format to marketing objective. This ensures maximum engagement and return on your ad spend across diverse campaign goals.",
  },
  {
    title: "The Cost of Poor YouTube Ad Creative",
    description:
      "Seventy-five percent of YouTube ad success depends on the creative quality. Generic stock footage and weak openings cause viewers to skip instantly, wasting your budget. We produce thumb-stopping video ads that hook viewers within the first 5 seconds and sustain engagement with compelling storytelling. Strategic calls-to-action drive viewers toward desired actions effectively. Our data-driven approach continuously tests and optimizes creative elements to improve view-through rates and conversions, ensuring your ads perform at their best throughout the campaign lifecycle.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1611162616475-46592b32151a?w=800&q=80",
  heading: "Creative That Converts",
  description:
    "YouTube isn’t just about views—it’s about driving action. We craft video ads with strategic hooks, clear value propositions, and strong calls-to-action that convert viewers into customers. Our proprietary “Watch & Convert” framework optimizes every element for both engagement and sales. This ensures your ads not only capture attention but also generate measurable results that impact your bottom line. Creativity and strategy combine to deliver powerful video campaigns.",
};

const leftSideContent = {
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  heading: "Precision Audience Targeting",
  description:
    "Reach potential customers based on what they watch, search for, and care about. Our targeting strategies combine: custom intent audiences from recent searchers, detailed demographics and life event data, remarketing to past visitors, and lookalike modeling of your best customers. This layered approach maximizes ad relevance and improves conversion potential. By targeting users who are already interested, we increase efficiency and ROI of your YouTube campaigns across all stages of the funnel.",
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
