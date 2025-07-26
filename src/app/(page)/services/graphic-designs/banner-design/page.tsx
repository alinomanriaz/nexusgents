import HeroSection from "@/components/graphic-designing/HeroSection";
import React from "react";
import {
  BarChart2,
  Mail,
  Monitor,
  Share2,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";

const heroSectionContent = {
  title: "High-Converting Banner Designs That Capture Attention",
  button: {
    name: "Get Custom Banners",
    link: "/banner-design",
  },
  description:
    "Professional banner designs that boost click-through rates, enhance brand recognition, and drive conversions across all digital platforms.",
  client: [
    {
      count: 1200,
      des: "Banners designed for clients across industries",
    },
    {
      count: 85,
      des: "Average increase in click-through rates",
    },
  ],
  bannerImage:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Banner Design Services",
    subtitle:
      "Eye-catching designs optimized for performance across all platforms",
  },
  services: [
    {
      icon: Monitor,
      title: "Website Banners",
      description:
        "Hero banners, promotional banners, and CTAs designed to maximize conversions",
      features: [
        "Responsive Designs",
        "Fast Loading",
        "A/B Tested",
        "Brand Consistent",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Ads",
      description: "Vertical and square banners optimized for mobile viewing",
      features: [
        "Mobile-First Design",
        "Thumb-Friendly CTAs",
        "App Store Compliant",
        "High Visibility",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Banners",
      description: "Product banners and promotional graphics that drive sales",
      features: [
        "Product-Focused",
        "Seasonal Designs",
        "Clear Value Props",
        "Urgency Elements",
      ],
    },
    {
      icon: Share2,
      title: "Social Media Banners",
      description:
        "Platform-specific designs for Facebook, Instagram, LinkedIn, and more",
      features: [
        "Platform-Optimized",
        "Share-Worthy",
        "Engagement Focused",
        "Story Formats",
      ],
    },
    {
      icon: Mail,
      title: "Email Headers",
      description: "Professional email banners that improve open rates",
      features: [
        "Dark Mode Ready",
        "Alt-Text Optimized",
        "Mobile Responsive",
        "Brand Consistent",
      ],
    },
    {
      icon: BarChart2,
      title: "Display Ads",
      description: "IAB standard display ads for programmatic advertising",
      features: [
        "Multiple Sizes",
        "Animated Options",
        "High CTR Designs",
        "Retargeting Ready",
      ],
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Banner Design Success Stories",
    subtitle: "How our strategic designs have improved campaign performance",
  },
  paraContent: [
    {
      heading: "E-commerce: 75% Higher CTR",
      text: "Redesigned product banners increased click-through rates by 75% compared to previous versions.",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "SaaS Company: 40% More Signups",
      text: "Optimized hero banners on landing pages improved conversion rates significantly.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "Mobile App: 3X More Installs",
      text: "App store banners with clear value propositions boosted install rates.",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    },
    {
      heading: "Retail: 50% More Engagement",
      text: "Seasonal social media banners increased engagement and shares.",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 500,
      text: "Banner designs created for digital campaigns",
    },
    {
      number: 3,
      text: "Average return on ad spend (ROAS) for designed banners",
    },
  ],
};

const detailcontent = [
  {
    title: "Why Professional Banner Design Matters",
    description:
      "High-converting banners can boost click-through rates by up to 85% over generic designs. Our banner design process blends conversion psychology with visual best practices to capture attention and inspire action. We focus on a clear visual hierarchy, compelling imagery, and strategic calls-to-action tailored to your platform and audience. Every banner is crafted to communicate your message instantly and motivate engagement. This approach helps your brand stand out amid digital noise, increasing both visibility and ROI. Our designers balance creativity with data-driven insights for optimal performance. When done right, banners become powerful tools that turn viewers into customers.",
  },
  {
    title: "The Hidden Costs of Poor Banner Design",
    description:
      "Generic or outdated banners often fail to attract attention in today’s busy digital landscape, resulting in lost opportunities and wasted ad spend. Common issues we fix include unclear messaging, weak calls-to-action, poor mobile optimization, slow loading times, and inconsistent branding. Our design team creates banners that not only stand out visually but also load quickly and comply with platform standards. This ensures your ads get maximum visibility and clicks. Investing in professional banner design helps avoid the hidden costs of low engagement, enhances your brand’s credibility, and drives measurable results. We deliver banners built to perform across all channels.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800&q=80",
  heading: "Strategic Banner Design Process",
  description:
    "Our proven approach begins with in-depth audience and platform research to understand where your banners will appear and who they must engage. We craft conversion-focused layouts that highlight key messages and direct users clearly. Attention-grabbing visuals and clear value propositions work hand-in-hand with strong calls-to-action designed to motivate clicks. We create multiple A/B testing variations to find the most effective version. All banners are technically optimized to load fast and perform smoothly on every device. Ultimately, we deliver banners that are designed not just to look good, but to drive real results for your campaigns.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  heading: "Multi-Platform Optimization",
  description:
    "We optimize banners for maximum impact on every platform you use. For websites, we build fully responsive designs that look great on all screen sizes and devices. On social media, we customize dimensions and styles for each platform to ensure compliance and visual appeal. Email banners are crafted to be dark-mode compatible and include alt-text for accessibility. Display ads follow IAB standard sizes and use retina-ready graphics for sharp visuals. Mobile app banners are designed to meet app store guidelines and perform flawlessly. We also track performance across all placements, giving you data to continuously improve your campaigns.",
};

const page = () => {
  return (
    <div className="w-full space-y-20 mb-20">
      <HeroSection content={heroSectionContent} />
      <Services content={servicesContent} />
      <LeftImageWithContent content={rightSideContent} />
      <RightImageWithContent content={leftSideContent} />
      <WorkExperiances content={workExperienceContent} />
      <DetailContent content={detailcontent} />
    </div>
  );
};

export default page;
