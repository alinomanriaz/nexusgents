import HeroSection from "@/components/graphic-designing/HeroSection";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import { Box, Gift, Leaf, Palette, Repeat, ShoppingCart } from "lucide-react";

const heroSectionContent = {
  title: "Impactful Packaging Designs That Sell Your Products",
  button: {
    name: "Design My Packaging",
    link: "/packaging-design",
  },
  description:
    "Strategic packaging designs that protect your product, communicate your brand, and drive purchases at the shelf.",
  client: [
    {
      count: 1200,
      des: "Packaging designs created for global brands",
    },
    {
      count: 95,
      des: "Client satisfaction rate with our designs",
    },
  ],
  bannerImage:
    "https://images.unsplash.com/photo-1602488283247-29bf1f5b148a?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Packaging Design Services",
    subtitle: "End-to-end packaging solutions from concept to production",
  },
  services: [
    {
      icon: Box,
      title: "Structural Packaging Design",
      description:
        "Custom packaging shapes that protect and showcase your product",
      features: [
        "3D Prototyping",
        "Material Selection",
        "Ergonomic Testing",
        "Production-Ready Files",
      ],
    },
    {
      icon: Palette,
      title: "Graphic Packaging Design",
      description: "Visual designs that communicate brand and product benefits",
      features: [
        "Brand-Centric Visuals",
        "Regulatory Compliance",
        "Shelf Impact Analysis",
        "Color Management",
      ],
    },
    {
      icon: Leaf,
      title: "Sustainable Packaging",
      description: "Eco-friendly solutions that reduce environmental impact",
      features: [
        "Recyclable Materials",
        "Minimalist Designs",
        "Carbon Footprint Analysis",
        "Eco-Certifications",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Packaging",
      description: "Durable designs optimized for shipping and unboxing",
      features: [
        "Protective Engineering",
        "Branded Unboxing Experience",
        "Reduced Material Waste",
        "Returns Optimization",
      ],
    },
    {
      icon: Gift,
      title: "Luxury Packaging",
      description: "Premium packaging for high-end products",
      features: [
        "Special Finishes",
        "Custom Inserts",
        "Tactile Elements",
        "Premium Materials",
      ],
    },
    {
      icon: Repeat,
      title: "Line Extensions",
      description: "Consistent packaging systems for product variants",
      features: [
        "Flavor/Variant Differentiation",
        "Size Adaptations",
        "Seasonal Versions",
        "Limited Editions",
      ],
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Packaging Design Success Stories",
    subtitle: "How our strategic packaging has driven product success",
  },
  paraContent: [
    {
      heading: "Skincare Brand: 40% Sales Increase",
      text: "Shelf-standing redesign improved visibility and premium perception",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
    },
    {
      heading: "Food Product: 75% Faster Shelf Recognition",
      text: "Bold graphic redesign cut through category clutter",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
    },
    {
      heading: "Tech Gadget: 300% Social Shares",
      text: "Innovative unboxing experience went viral",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "CPG Brand: 100% Compliance Achieved",
      text: "Packaging redesign met all new regulatory requirements",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 200,
      text: "Different packaging materials we've worked with",
    },
    {
      number: 15,
      text: "Average percentage sales lift after redesign",
    },
  ],
};

const detailcontent = [
  {
    title: "Why Professional Packaging Design Matters",
    description:
      "Packaging isn't just protection—it's your frontline salesperson. With 72% of purchase decisions made at the shelf, compelling packaging design can directly influence buying behavior and boost sales by up to 30%. Our approach merges structural integrity with brand storytelling to deliver packaging that not only looks good but performs. From shelf appeal to unboxing delight, every design is optimized for impact. We engineer packaging to reflect your brand values, connect with your audience, and drive conversions. It's design with a purpose—built to inform, inspire, and sell.",
  },
  {
    title: "The Hidden Costs of Poor Packaging",
    description:
      "Bad packaging costs more than you think—damaged goods, customer dissatisfaction, and missed opportunities. That’s why we take a strategic approach to eliminate those risks. Our process ensures your packaging is engineered for durability, standout shelf presence, and cost efficiency. We use custom structural design, eye-catching graphics, and regulatory-safe materials to protect both your product and your reputation. From reducing returns to elevating your brand experience, our packaging isn’t an expense—it’s a competitive advantage and long-term business asset.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Our Packaging Design Process",
  description:
    "We follow a comprehensive, strategy-first packaging design process. It begins with in-depth market and category research to understand trends, customer expectations, and competitors. Structural design is next—combining function with form through 3D modeling and prototyping. Visual branding is then applied with purpose-driven graphic design. We guide material selection to ensure durability and sustainability, followed by prototyping to validate the look and feel. Print-ready production files are prepared for seamless manufacturing, and we oversee quality control to ensure your final product meets the highest standards.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Packaging Design Expertise",
  description:
    "Our team brings deep cross-functional expertise to packaging design—from concept to shelf. We blend structural engineering to create sturdy, efficient formats with shelf-ready visuals that grab attention and tell your brand story. Our designs are compliant with industry regulations, sustainable by default, and built with the end-user in mind. Whether it’s creating standout unboxing moments or ensuring smooth production workflows, we cover every detail. With a focus on cost optimization and manufacturability, we deliver packaging that performs both visually and functionally—while staying aligned with your budget and goals.",
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
