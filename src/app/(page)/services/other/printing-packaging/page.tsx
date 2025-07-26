import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import { FaQrcode } from "react-icons/fa";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";
import { FaBoxOpen, FaPalette, FaRecycle, FaShieldAlt } from "react-icons/fa";
import { IoMdPrint, IoMdColorPalette } from "react-icons/io";
import {
  MdOutlinePrecisionManufacturing,
  MdOutlineLocalShipping,
} from "react-icons/md";
import { BiPackage } from "react-icons/bi";

// Hero Section
const HeroSectionContent = {
  fheading: "Premium Packaging That",
  sheading: "Protects & Sells",
  subheading:
    "Custom packaging solutions that safeguard your products, elevate your brand, and create unboxing experiences customers remember.",
  list: [
    {
      Icon: IoMdPrint,
      text: "High-Quality Printing",
    },
    {
      Icon: FaBoxOpen,
      text: "Custom Structural Design",
    },
    {
      Icon: FaPalette,
      text: "Vibrant Color Matching",
    },
    {
      Icon: FaRecycle,
      text: "Eco-Friendly Materials",
    },
  ],
  fbutton: {
    link: "/quote",
    name: "Get a Quote",
  },
  sbutton: {
    link: "/portfolio",
    name: "See Our Work",
  },
};

// Services Content
const servicesContent = {
  titles: {
    title: "Our Packaging Services",
    subtitle: "From concept to delivery - complete packaging solutions",
  },
  services: [
    {
      icon: BiPackage,
      title: "Custom Box Printing",
      description:
        "High-impact printing on corrugated, rigid, and folding cartons with precision die-cutting.",
    },
    {
      icon: IoMdColorPalette,
      title: "Premium Labeling",
      description:
        "Pressure-sensitive, shrink sleeve, and cut & stack labels with specialty finishes.",
    },
    {
      icon: MdOutlinePrecisionManufacturing,
      title: "Prototype Development",
      description:
        "3D mockups and sample production to perfect your packaging before mass production.",
    },
    {
      icon: FaQrcode,
      title: "Smart Packaging",
      description:
        "QR codes, NFC tags, and augmented reality integration for interactive experiences.",
    },
    {
      icon: FaShieldAlt,
      title: "Sustainable Solutions",
      description:
        "Compostable, biodegradable, and recycled material options with FSC certification.",
    },
    {
      icon: MdOutlineLocalShipping,
      title: "Fulfillment Ready",
      description:
        "Barcode integration, assembly services, and direct-to-distribution packaging.",
    },
  ],
};

// Success Stories
const workExperienceContent = {
  titles: {
    title: "Packaging Success Stories",
    subtitle: "Solutions that delivered results",
  },
  paraContent: [
    {
      heading: "Skincare Brand: 40% Sales Increase",
      text: "Eco-luxury packaging with textured finishes and minimalist design",
      image:
        "https://images.unsplash.com/photo-1607602132700-068b0a6a304d?w=800&q=80",
    },
    {
      heading: "Food Product: 300K Units Shipped",
      text: "Tamper-evident packaging with smart temperature indicators",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
    },
    {
      heading: "Electronics: 60% Returns Reduction",
      text: "Custom molded foam inserts and anti-static packaging",
      image:
        "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=800&q=80",
    },
    {
      heading: "Subscription Box: 1M+ Social Shares",
      text: "Signature unboxing experience with layered reveals",
      image:
        "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 500,
      text: "Packaging projects delivered",
    },
    {
      number: 48,
      text: "Hour average turnaround for proofs",
      isHours: true,
    },
  ],
};

// Detail Content
const detailcontent = [
  {
    title: "Why Invest in Quality Packaging?",
    description:
      "Investing in quality packaging for your CV or professional documents adds a powerful finishing touch that speaks volumes about your attention to detail. First impressions matter, and well-crafted packaging instantly sets you apart by showing professionalism, care, and pride in your presentation. It protects your documents from damage, ensuring they arrive in pristine condition — especially important for in-person submissions or mailed applications. Quality packaging also reinforces your personal brand, conveying a sense of value and seriousness about the opportunity. Whether it’s a sleek folder, branded envelope, or custom cover, premium packaging turns a simple CV into a memorable, well-rounded experience for the recipient.",
  },
  {
    title: "Beyond Basic Boxes",
    description:
      "Going beyond basic boxes means delivering your documents or products in packaging that not only protects but impresses. Standard boxes may serve a functional purpose, but upgraded packaging speaks to quality, creativity, and intention. We offer custom-designed, branded, and premium box options that elevate the unboxing experience — making your CV, portfolio, or business materials stand out at first glance. With thoughtful design, rich textures, and sleek finishes, our packaging solutions go beyond utility to create a lasting impact. Whether you’re targeting a top-tier employer or showcasing your personal brand, our boxes are designed to reflect the professionalism and care behind what's inside.",
  },
];

// Right/Left Content
const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80",
  heading: "Our Printing Capabilities",
  description: `We provide high-quality printing services to ensure your CV looks as impressive in hand as it does on screen. Using premium paper stock and professional-grade printers, we deliver crisp, clean, and visually striking results that leave a lasting impression. Whether you need a classic black-and-white print for formal settings or a full-color version for creative roles, we tailor the output to suit your needs. Our printing options include various finishes such as matte, glossy, and textured, giving your CV a polished and professional feel. We also offer different sizing and binding options for portfolio-style presentations. With our reliable and detail-focused printing capabilities, your CV will stand out from the stack with quality you can see and feel.`,
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1605007493699-af65834f8a3e?w=800&q=80",
  heading: "Material Options",
  description: `We offer a range of premium material options to give your CV the perfect professional finish. Choose from high-quality paper types such as smooth matte, elegant linen, classic parchment, or sleek glossy finishes—each designed to enhance readability and presentation. For a more refined touch, we also provide textured and heavyweight cardstock that adds durability and sophistication. Eco-friendly and recycled paper options are available for those who prioritize sustainability without compromising on style. Each material is carefully selected to ensure excellent print clarity and a lasting impression. Whether you're aiming for understated elegance or bold impact, our material options help your CV reflect your personal brand with confidence and quality.`,
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
