import HeroSection from "@/components/graphic-designing/HeroSection";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import {
  Award,
  Calendar,
  FileText,
  GraduationCap,
  ShoppingBag,
  Users,
} from "lucide-react";

const heroSectionContent = {
  title: "Professional Booklet Designs That Inform & Impress",
  button: {
    name: "Get Your Booklet Designed",
    link: "/booklet-design",
  },
  description:
    "Strategic booklet designs that communicate your message effectively, enhance brand perception, and leave a lasting impression on your audience.",
  client: [
    {
      count: 500,
      des: "Booklets designed for clients across industries",
    },
    {
      count: 92,
      des: "Client satisfaction rate with our designs",
    },
  ],
  bannerImage:
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Booklet Design Services",
    subtitle:
      "Comprehensive design solutions for impactful print and digital booklets",
  },
  services: [
    {
      icon: FileText,
      title: "Corporate Profile Booklets",
      description:
        "Professional company profiles that showcase your brand story and capabilities",
      features: [
        "Brand-Aligned Design",
        "Executive Layouts",
        "Premium Finishes",
        "Digital & Print Versions",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Product Catalogs",
      description:
        "Well-organized product showcases that drive sales and inquiries",
      features: [
        "SKU Organization",
        "High-Quality Product Shots",
        "Technical Specifications",
        "Ordering Information",
      ],
    },
    {
      icon: GraduationCap,
      title: "Training Manuals",
      description:
        "Instructional booklets that educate and engage your audience",
      features: [
        "Clear Hierarchy",
        "Step-by-Step Visuals",
        "Quick Reference Guides",
        "Durable Binding Options",
      ],
    },
    {
      icon: Calendar,
      title: "Event Programs",
      description: "Elegant event booklets that enhance attendee experience",
      features: [
        "Custom Schedules",
        "Speaker Bios",
        "Sponsor Recognition",
        "Memorable Keepsakes",
      ],
    },
    {
      icon: Award,
      title: "Annual Reports",
      description:
        "Financial and operational reports that communicate performance",
      features: [
        "Data Visualization",
        "Executive Summaries",
        "Shareholder-Focused",
        "Regulatory Compliant",
      ],
    },
    {
      icon: Users,
      title: "Brochures & Handouts",
      description: "Compact informational pieces for sales and marketing",
      features: [
        "Tri-Fold Options",
        "High-Impact Visuals",
        "Call-to-Action Focused",
        "Portable Formats",
      ],
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Booklet Design Success Stories",
    subtitle: "How our strategic designs have enhanced client communications",
  },
  paraContent: [
    {
      heading: "Tech Startup: 40% More Investor Interest",
      text: "Redesigned corporate profile helped secure Series A funding",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "Manufacturer: 25% Increase in Inquiries",
      text: "New product catalog design improved lead generation",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    },
    {
      heading: "Conference: 4.8/5 Attendee Satisfaction",
      text: "Custom event program enhanced participant experience",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
      heading: "Nonprofit: 300% More Donations",
      text: "Impact report booklet drove increased contributions",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 1000,
      text: "Pages designed with perfect typography and layout",
    },
    {
      number: 50,
      text: "Different booklet formats available for various needs",
    },
  ],
};

const detailcontent = [
  {
    title: "The Power of Professional Booklet Design",
    description:
      "Well-designed booklets can boost information retention by up to 65%, making them a powerful tool for communication. Our process merges content strategy with impactful visual storytelling to create materials that inform and persuade. Every element—from typography to imagery—is chosen with purpose. We craft seamless narratives that guide readers through your message without overwhelming them. Visual hierarchy and layout precision ensure clarity on every page. Each booklet is a balance of beauty and function, delivering your brand message memorably. Whether for sales, onboarding, or presentations, we create pieces that leave a lasting impression.",
  },
  {
    title: "Why Most Corporate Booklets Fail",
    description:
      "Most corporate booklets fail due to cluttered layouts, poor hierarchy, and a lack of visual engagement. Dense paragraphs and stock visuals often drive readers away. We solve this by organizing content for easy readability and flow. Our designers use whitespace, infographics, and visual rhythm to hold attention. Every booklet is built with high-quality materials that reflect your brand’s standards. We focus on clear communication, compelling design, and consistency across pages. Whether in print or digital formats, our booklets are optimized to perform. The result is a marketing asset that gets read—not tossed aside.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Strategic Booklet Design Process",
  description:
    "Our strategic booklet design process starts with understanding your goals, audience, and messaging. We organize content into a logical structure and build wireframes to visualize flow. From there, we apply a custom layout using purposeful typography and a cohesive color system. Our team integrates original visuals—whether custom illustrations or curated photography—to enhance storytelling. Every design is tailored for both print production and digital use. We conduct thorough checks to ensure pixel and print perfection. Whether for marketing, training, or product launches, we create booklets designed to impress and deliver results.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Premium Production Options",
  description:
    "Your booklet deserves a finish that reflects your brand's quality. We offer a variety of production enhancements to take your print materials to the next level. Choose from a wide range of paper stocks—from smooth matte to elegant textured finishes. Binding options include saddle-stitch, perfect binding, and spiral formats, tailored to your content and use case. Add visual flair with special finishes like foil stamping, spot UV, or embossing. We also provide eco-conscious choices like recycled paper and soy-based inks. For digital formats, we create interactive PDFs with clickable navigation—ideal for online sharing.",
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
