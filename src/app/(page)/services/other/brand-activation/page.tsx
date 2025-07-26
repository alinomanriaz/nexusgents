import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import { FaUsers, FaMobile, FaQrcode } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";
import { MdEvent, MdOutlineCelebration } from "react-icons/md";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";

import { FaMobileAlt } from "react-icons/fa";

const HeroSectionContent = {
  fheading: "Immersive Experiences That",
  sheading: "Amplify Your Brand",
  subheading:
    "Turn passive audiences into engaged communities through unforgettable activations that drive emotional connections and measurable business results.",
  list: [
    {
      Icon: MdEvent,
      text: "Pop-Up Experiences",
    },
    {
      Icon: FaMobileAlt,
      text: "Interactive Tech Activations",
    },
    {
      Icon: IoMdMegaphone,
      text: "Influencer Collaborations",
    },
    {
      Icon: FaQrcode,
      text: "O2O Campaigns",
    },
  ],
  fbutton: {
    link: "/contact",
    name: "Plan Your Activation",
  },
  sbutton: {
    link: "/portfolio",
    name: "See Case Studies",
  },
};

const servicesContent = {
  titles: {
    title: "Our Brand Activation Services",
    subtitle: "From strategy to execution - we bring brands to life",
  },
  services: [
    {
      icon: MdEvent, // Event icon
      title: "Experiential Pop-Ups",
      description:
        "Physical/digital hybrid spaces that create Instagrammable moments and direct consumer engagement.",
    },
    {
      icon: FaMobile, // Mobile icon
      title: "Digital Activations",
      description:
        "AR filters, interactive kiosks, and gamified mobile experiences that bridge online/offline worlds.",
    },
    {
      icon: IoMdMegaphone, // Megaphone icon
      title: "Influencer Collaborations",
      description:
        "Strategic partnerships with nano/micro-influencers for authentic brand storytelling.",
    },
    {
      icon: FaQrcode, // QR code icon
      title: "O2O Campaigns",
      description:
        "Seamless offline-to-online journeys using NFC, QR codes, and location-based triggers.",
    },
    {
      icon: MdOutlineCelebration, // Celebration icon
      title: "Product Launches",
      description:
        "360° launch campaigns combining PR stunts, sampling, and digital amplification.",
    },
    {
      icon: FaUsers, // Community icon
      title: "Community Building",
      description:
        "Long-term engagement strategies that turn customers into brand advocates.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Activation Success Stories",
    subtitle: "Campaigns that moved the needle",
  },
  paraContent: [
    {
      heading: "Beverage Brand: 500K+ Samples Distributed",
      text: "College tour activation with AR selfie stations driving UGC content",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    },
    {
      heading: "Tech Launch: 1.2M Social Impressions",
      text: "Interactive pop-up with VR product demos and live-streamed influencer takeovers",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    },
    {
      heading: "Fashion Label: 300% ROI",
      text: "Secret location pop-up with NFC-enabled VIP access and digital collectibles",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    },
    {
      heading: "Nonprofit: 10K Pledges Collected",
      text: "Interactive art installation with real-time social media visualization",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 200,
      text: "Successful activations executed",
    },
    {
      number: 85,
      text: "Average increase in social engagement",
      isPercentage: true,
    },
  ],
};

const detailcontent = [
  {
    title: "Why Invest in Brand Activations?",
    description:
      "Investing in brand activations is essential for creating memorable, meaningful connections between your brand and your target audience. Unlike traditional advertising, brand activations engage consumers through interactive experiences that build emotional ties and encourage direct participation. This hands-on approach increases brand awareness, loyalty, and word-of-mouth promotion by making your message tangible and relatable. Activations can differentiate your brand in crowded markets, turning passive observers into active advocates. They also provide valuable real-time feedback and insights into consumer behavior. Ultimately, brand activations drive deeper engagement, boost sales, and create lasting impressions that help grow your brand’s presence and impact.",
  },
  {
    title: "Beyond Basic Sampling",
    description:
      "Going beyond basic sampling means transforming a simple product giveaway into an immersive brand experience that truly resonates with consumers. Instead of just handing out samples, advanced sampling strategies engage potential customers through personalized interactions, storytelling, and creative presentations. This approach builds excitement, educates audiences about product benefits, and fosters genuine connections. Enhanced sampling can include digital integration, exclusive offers, or follow-up campaigns that extend engagement beyond the initial touchpoint. By elevating sampling efforts, brands increase the likelihood of trial, conversion, and long-term loyalty — turning a basic sample into a powerful marketing tool that drives meaningful results.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80",
  heading: "Our Activation Toolkit",
  description: `Our Activation Toolkit is a comprehensive collection of resources and strategies designed to help you execute impactful brand activations with ease. It includes customizable templates for event planning, promotional materials, and digital campaigns that ensure consistent branding and messaging. The toolkit offers practical guides on audience engagement techniques, social media integration, and data collection methods to maximize reach and effectiveness. We also provide tools for tracking performance and measuring ROI, allowing you to refine and improve future activations. With our Activation Toolkit, you gain everything needed to create memorable, engaging experiences that connect your brand with your audience and drive lasting results.`,
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
  heading: "Key Activation Metrics",
  description: `Measuring the success of brand activations requires tracking key metrics that reflect both engagement and impact. Important activation metrics include attendance or reach, which shows how many people interacted with your event or campaign. Engagement rates, such as social media interactions, participation in activities, or time spent at the activation, reveal how involved your audience was. Conversion metrics track how many participants took desired actions, like signing up, making a purchase, or requesting more information. Brand awareness and sentiment can be measured through surveys or social listening tools to gauge changes in perception. ROI (Return on Investment) helps assess the financial effectiveness of the activation. Tracking these metrics enables data-driven decisions to optimize future campaigns and maximize results.`,
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
