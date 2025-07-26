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
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";

import { LuMousePointerClick } from "react-icons/lu";
import { SlGlobe } from "react-icons/sl";
import { IoStatsChart } from "react-icons/io5";

const heroSectionContent = {
  fWord: "DIGITAL",
  Ficon: IoStatsChart,
  Sicon: SlGlobe,
  Thicon: LuMousePointerClick,
  SWord: "GROWTH",
  Text: "THAT DELIVERS RESULTS",
  subheading:
    "We help brands dominate the digital space through data-driven marketing, social media strategies, performance campaigns, and targeted content that connects.",
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
    title: "Our Services Include",
    subtitle:
      "Empowering your brand with strategic solutions — from creative content to data-driven campaigns that deliver real results.",
  },
  services: [
    {
      icon: ClipboardList,
      title: "Client Consultation & Goal Setting",
      description:
        "We start with a focused consultation to understand your goals, audience, and brand vision. This helps us set clear, measurable objectives that guide every step of your digital marketing strategy.",
    },
    {
      icon: BarChart,
      title: "Market Research & Audience Analysis",
      description: `We analyze market trends, competitors, and audience behavior to uncover growth opportunities. This ensures your campaigns speak directly to the right people with maximum impact.`,
    },
    {
      icon: FileText,
      title: "Content Strategy Development",
      description:
        "We craft tailored content plans that engage your audience and support your business goals. Our strategies ensure consistent, relevant messaging across all digital channels for maximum impact.",
    },
    {
      icon: Settings,
      title: "Platform Selection & Campaign Setup",
      description:
        "We identify the best digital channels for your brand to reach your target audience effectively. Our team handles the full campaign setup to ensure optimal performance from day one.",
    },
    {
      icon: Play,
      title: "Campaign Execution",
      description:
        "We launch and manage your marketing campaigns with precision to maximize reach and engagement. Continuous monitoring and optimization ensure your campaigns deliver the best possible results.",
    },
    {
      icon: Calendar,
      title: "Content Creation & Scheduling",
      description:
        "We produce engaging, high-quality content tailored to your audience and brand voice. Our team schedules and publishes posts strategically to maintain consistent online presence and maximize impact.",
    },
    {
      icon: Sliders,
      title: "Campaign Management",
      description:
        "We oversee your marketing campaigns from start to finish, ensuring seamless execution and real-time optimization. Our team analyzes performance data to adjust strategies and maximize your ROI continuously.",
    },
    {
      icon: MessageCircle,
      title: "Audience Engagement",
      description:
        "We build meaningful connections with your audience through interactive content and timely communication. Our strategies foster community growth, brand loyalty, and increased customer retention.",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description:
        "We track key performance metrics to measure the success of your campaigns accurately. Our detailed reports provide actionable insights to help you make data-driven marketing decisions.",
    },
  ],
};
const workExperienceContent = {
  titles: {
    title: "Digital Strategies That Drive Results",
    subtitle:
      "Explore how powerful digital media campaigns turn clicks into customers and elevate brands across the globe.",
  },
  paraContent: [
    {
      heading: "Performance Marketing in the US",
      text: "We help U.S.-based e-commerce and service brands accelerate growth with data-driven ad campaigns, content funnels, and media optimization.",
      image: "/assets/images/women-working.avif",
    },
    {
      heading: "Canadian Digital Success",
      text: "From social media management to influencer partnerships — we craft compelling digital narratives that grow Canadian businesses online.",
      image: "/assets/images/work-on-computer.jpeg",
    },
    {
      heading: "Scaling in the UAE",
      text: "Our strategies help UAE startups and enterprises break through digital clutter with localized paid ads and conversion-focused content.",
      image: "/assets/images/uae-meeting.webp",
    },
    {
      heading: "Serving a Global Audience",
      text: "We launch full-funnel marketing campaigns for global clients — from New York to Dubai — powered by analytics and creative strategy.",
      image: "/assets/images/man-working.jpg",
    },
  ],
  countContent: [
    {
      number: 1500,
      text: "Campaigns launched across industries with measurable ROI.",
    },
    {
      number: 10000,
      text: "Businesses empowered through digital marketing and automation.",
    },
  ],
};
const detailcontent = [
  {
    title: "Power of Digital Media Marketing in Business Growth:",
    description:
      "Digital media marketing plays a pivotal role in shaping a brand’s online presence and driving measurable growth. With billions of users active daily on social platforms, the opportunity to connect and convert has never been greater. A well-executed digital marketing strategy increases visibility, strengthens engagement, and fuels lead generation across multiple channels. Whether you're launching a campaign or refining your strategy, our expert team crafts custom solutions that align with your business goals. Let us help you leverage digital media to build authority, capture attention, and grow consistently.",
  },
  {
    title: "Why Every Brand Needs a Strong Digital Media Strategy:",
    description:
      "In today’s competitive market, brands that embrace digital media marketing stand out and scale faster. From social media campaigns and influencer partnerships to targeted advertising and content creation — every element plays a role in shaping brand perception and performance. Our data-driven approach ensures your campaigns not only look great but also deliver real results. We tailor each strategy to your unique audience, industry, and business model. Start turning digital interactions into meaningful business outcomes with our proven digital media strategies.",
  },
];

const rightSideContent = {
  image: "/assets/images/Empowering.jpg",
  heading: "Boost Your Online Presence",
  description: `In today's fast-paced digital landscape, establishing a strong online presence is more critical than ever. We help businesses stand out by developing innovative and customized digital marketing strategies. Our approach is designed to attract the right audience through targeted campaigns across social media, search engines, and other online platforms. By combining creative content with data-driven techniques, we ensure your brand message resonates deeply. We continuously monitor trends and adjust tactics to keep your business ahead of competitors. From increasing website traffic to improving engagement rates, our solutions deliver tangible results. We also focus on building long-term brand loyalty through consistent and meaningful interactions.`,
};
const leftSideContent = {
  image: "/assets/images/Strategy.jpg",
  heading: "Data-Driven Campaigns",
  description: `Utilizing data is key to unlocking successful marketing campaigns in today’s environment. Our team harnesses real-time analytics and performance metrics to optimize every element of your marketing efforts. From initial setup to ongoing adjustments, we focus on maximizing your return on investment. We translate complex data into clear insights, allowing for agile decision-making and more effective targeting. Our strategies include testing different messaging, creatives, and channels to discover what works best for your audience. Continuous monitoring helps us identify opportunities and challenges early on, keeping your campaigns on track. This proactive approach ensures that your budget is spent wisely and effectively. By combining technology with marketing expertise, we deliver measurable growth and meaningful engagement.`,
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
