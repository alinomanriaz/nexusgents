// import HeroSectionMarketing from '@/components/digital-marketing/HeroSectionMarketing'
import React from "react";
import {
  Zap,
  BarChart,
  Calendar,
  Film,
  ShoppingCart,
  UserCheck,
  PlayCircle,
  Mic,
  Smartphone,
  Tv,
  Video,
} from "lucide-react";

import Services from "@/components/common-components/Services";
// import WorkExperiances from '@/components/common-components/WorkExperiances'
import DetailContent from "@/components/common-components/DetailContent";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import WorkExperiances from "@/components/common-components/WorkExperiances";

const HeroSectionContent = {
  fheading: "Captivating Video Content That",
  sheading: "Engages & Converts",
  subheading:
    "Professional video production and strategy that tells your brand story, boosts engagement, and drives measurable business results.",
  list: [
    {
      Icon: Video,
      text: "Full Production",
    },
    {
      Icon: Smartphone,
      text: "Multi-Platform",
    },
    {
      Icon: BarChart,
      text: "Performance Focused",
    },
    {
      Icon: Zap,
      text: "Fast Turnaround",
    },
  ],
  fbutton: {
    link: "/video-production",
    name: "Get Started",
  },
  sbutton: {
    link: "/portfolio",
    name: "View Portfolio",
  },
};

const servicesContent = {
  titles: {
    title: "Our Video Content Services",
    subtitle:
      "End-to-end video solutions from concept to distribution, tailored to your marketing goals.",
  },
  services: [
    {
      icon: Film,
      title: "Brand Story Videos",
      description:
        "Emotional brand narratives that connect with your audience and communicate your values.",
    },
    {
      icon: ShoppingCart,
      title: "Product Videos",
      description:
        "Showcase your products with demo videos that highlight features and benefits.",
    },
    {
      icon: UserCheck,
      title: "Testimonial Videos",
      description:
        "Authentic customer stories that build trust and social proof.",
    },
    {
      icon: PlayCircle,
      title: "Explainer Videos",
      description:
        "Animated or live-action videos that simplify complex ideas and services.",
    },
    {
      icon: Calendar,
      title: "Event Coverage",
      description:
        "Professional filming and editing of conferences, launches, and corporate events.",
    },
    {
      icon: Mic,
      title: "Interview Videos",
      description:
        "Expert interviews and thought leadership content for your digital channels.",
    },
    {
      icon: Smartphone,
      title: "Social Media Videos",
      description:
        "Short-form vertical videos optimized for Instagram, TikTok, and YouTube Shorts.",
    },
    {
      icon: Tv,
      title: "YouTube Series",
      description:
        "Ongoing video content strategies for building YouTube audiences.",
    },
    {
      icon: BarChart,
      title: "Video Ad Production",
      description:
        "High-converting video ads for social media and programmatic platforms.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Video Marketing Success Stories",
    subtitle:
      "How our strategic video content has helped brands stand out and achieve results.",
  },
  paraContent: [
    {
      heading: "SaaS Company: 300% More Demos",
      text: "Explainer video series increased free trial sign-ups by 3X.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "E-Commerce: 50% Higher Conversion",
      text: "Product videos on PDPs boosted add-to-cart rates by 50%.",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "Nonprofit: 2M+ Views",
      text: "Emotional storytelling video went viral, raising $250K in donations.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
      heading: "B2B Service: 80% Completion Rate",
      text: "Case study videos achieved exceptional watch-through rates.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 85,
      text: "Average percentage of clients who see increased engagement with video",
    },
    {
      number: 4,
      text: "Average return on ad spend (ROAS) for video ad campaigns",
    },
  ],
};

const detailcontent = [
  {
    title: "The Power of Video Marketing",
    description:
      "Video content drives 1200% more shares than text and images combined. Our video production process blends strategic storytelling with technical precision to craft compelling assets that captivate your audience and inspire action. From pre-production planning through post-production polish, we manage every step to ensure your videos clearly communicate your message. We also adhere to platform best practices to maximize reach and engagement. This comprehensive approach helps your brand stand out and connect effectively with viewers. We focus on both creative and technical aspects to deliver videos that truly perform. The result is content that not only looks great but drives measurable results.",
  },
  {
    title: "Why Most Brand Videos Fail",
    description:
      "Most corporate videos fall flat—90% go unwatched due to weak storytelling, excessive length, or unclear value. We fix this by creating audience-focused concepts that truly resonate and keeping videos short and easy to scan. We optimize content for sound-off viewing to ensure engagement even without audio. Strong hooks and clear calls-to-action help maintain viewer interest throughout the video. Additionally, we distribute videos strategically across multiple platforms for maximum exposure. Our approach ensures your videos aren’t just produced, but actually watched and shared. This leads to better brand awareness and higher conversion rates.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800&q=80",
  heading: "Strategic Video Production",
  description:
    "Our video production process includes audience and platform research to tailor content effectively. We develop creative concepts and professional scripts that resonate with your target market. High-quality filming and engaging editing ensure polished visuals and storytelling. Motion graphics and sound design add dynamic elements that hold viewer attention. Every video is optimized for the specific platform it will be shared on. We focus on crafting videos designed to perform, not just look good. This comprehensive approach drives better engagement and ROI. Your brand’s story is communicated with clarity and impact.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
  heading: "Multi-Platform Distribution",
  description:
    "We customize videos for each platform to maximize effectiveness and reach. On YouTube, we optimize for SEO with cards and end screens. Social media videos are vertical or short-form, with captions for sound-off viewers. Embedded website videos include schema markup for better indexing. Email campaigns use GIF previews and thumbnail optimization to boost open rates. Ads are tailored with platform-specific edits and aspect ratios. Plus, we track performance across all channels to measure success and refine strategies. This multi-channel distribution ensures your videos get seen by the right audiences. We help you extend your video marketing impact across the digital ecosystem.",
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
