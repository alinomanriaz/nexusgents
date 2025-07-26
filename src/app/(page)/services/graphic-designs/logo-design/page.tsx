import HeroSection from "@/components/graphic-designing/HeroSection";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import {
  Award,
  Diamond,
  Globe,
  Palette,
  RefreshCw,
  Smartphone,
} from "lucide-react";

const heroSectionContent = {
  title: "Iconic Logo Designs That Define Brands",
  button: {
    name: "Design My Logo",
    link: "/logo-design",
  },
  description:
    "Strategic logo designs that capture your brand essence, communicate your values, and create instant recognition in your market.",
  client: [
    {
      count: 800,
      des: "Logos crafted for startups to enterprises",
    },
    {
      count: 98,
      des: "Client satisfaction rate with our designs",
    },
  ],
  bannerImage:
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Logo Design Services",
    subtitle: "Comprehensive logo solutions for every business need",
  },
  services: [
    {
      icon: Diamond,
      title: "Brand Identity Logo",
      description: "Primary logo that becomes the face of your company",
      features: [
        "3 Initial Concepts",
        "Unlimited Revisions",
        "Full Copyright",
        "Vector Files",
      ],
    },
    {
      icon: Smartphone,
      title: "Responsive Logo System",
      description: "Adaptable logo versions for all platforms",
      features: [
        "Primary & Secondary Logos",
        "App Icons",
        "Favicon",
        "Social Media Variations",
      ],
    },
    {
      icon: Award,
      title: "Premium Logo Design",
      description: "Luxury branding with extended deliverables",
      features: [
        "5 Initial Concepts",
        "Brand Style Guide",
        "Stationery Design",
        "3D Mockups",
      ],
    },
    {
      icon: RefreshCw,
      title: "Logo Redesign",
      description: "Modernizing existing logos while maintaining equity",
      features: [
        "Brand Audit",
        "Competitive Analysis",
        "Evolution Strategy",
        "Transition Plan",
      ],
    },
    {
      icon: Palette,
      title: "Logo Animation",
      description: "Bringing your logo to life with motion",
      features: [
        "3-5 Second Animation",
        "Multiple Style Options",
        "Social Media Formats",
        "Lottie Files",
      ],
    },
    {
      icon: Globe,
      title: "Industry-Specific Logos",
      description: "Tailored designs for your market sector",
      features: ["Tech & SaaS", "Finance & Legal", "Healthcare", "E-commerce"],
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Logo Design Success Stories",
    subtitle: "How our strategic designs have transformed brands",
  },
  paraContent: [
    {
      heading: "Fintech Startup: 300% Brand Recognition",
      text: "Abstract mark became synonymous with innovation in payments",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "Healthcare: 40% More Trust Signals",
      text: "Redesigned emblem communicated authority and care",
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80",
    },
    {
      heading: "E-commerce: 25% Higher Click-Through",
      text: "Animated logo increased engagement across digital platforms",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "Enterprise: Seamless Rebrand",
      text: "Logo evolution maintained equity while modernizing look",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 15,
      text: "International design awards won for logo work",
    },
    {
      number: 100,
      text: "Hours average research and development per logo",
    },
  ],
};

const detailcontent = [
  {
    title: "Why Professional Logo Design Matters",
    description:
      "Your logo is often the first and most lasting impression people have of your brand. A professionally designed logo not only increases brand recognition but also conveys trust, credibility, and value. We approach logo design as both an art and a strategy—merging visual aesthetics with brand positioning to craft marks that truly resonate. Whether it's a sleek wordmark or a bold symbol, our logos are built to perform across every touchpoint—from mobile apps to merchandise. They're designed to be scalable, memorable, and timeless. Ultimately, we deliver logos that align with your brand’s essence and support long-term growth.",
  },
  {
    title: "The Hidden Costs of Amateur Logo Design",
    description:
      "Cheap or DIY logos might seem cost-effective upfront, but they can damage brand perception and require expensive overhauls later. Poor design choices can confuse your audience or make your brand appear unprofessional. We prevent these issues by building logos on a solid foundation. Our process includes deep discovery, multiple creative explorations, and real-world testing to ensure every design works in practice. We don’t just deliver a symbol—we provide a complete identity system backed by detailed brand guidelines. With us, your logo becomes a long-term asset that evolves with your business instead of holding it back.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Our Logo Design Process",
  description:
    "Every great logo begins with clarity. We start by uncovering your brand’s mission, values, and audience to shape a strategic foundation. From there, we conduct market research to explore opportunities and competitive gaps. Sketching allows us to explore different visual narratives, while digital rendering sharpens the most promising ideas. We test logos across different mediums—print, web, merchandise—to ensure versatility. Once the final design is perfected, we deliver it in all essential formats (vector, PNG, etc.). You’ll also receive brand usage guidelines to maintain consistency across all future applications.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Logo Design Principles",
  description:
    "Timeless logo design rests on proven principles. We prioritize simplicity for clarity and quick recognition. A strong logo must be memorable—easily recalled after a glance. Timelessness helps it remain relevant despite changing trends. We ensure every logo works at every size, from social media avatars to building signage. Beyond form, we consider meaning—your logo should reflect your values and industry context. Our use of color psychology helps evoke the right emotion, while typography is carefully chosen or custom-built to match your tone. Every decision is intentional, balancing art and strategy to tell your brand’s story.",
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
