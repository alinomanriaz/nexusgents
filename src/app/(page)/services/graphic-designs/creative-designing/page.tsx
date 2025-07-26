import HeroSection from "@/components/graphic-designing/HeroSection";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import {
  BarChart,
  Film,
  Layout,
  Monitor,
  Palette,
  Smartphone,
} from "lucide-react";

const heroSectionContent = {
  title: "Innovative Creative Designs That Captivate & Convert",
  button: {
    name: "Start Your Project",
    link: "/creative-design",
  },
  description:
    "Boundary-pushing creative designs that tell your brand story, engage your audience, and deliver measurable business results across all platforms.",
  client: [
    {
      count: 1500,
      des: "Creative projects delivered for global brands",
    },
    {
      count: 97,
      des: "Client satisfaction rate with our designs",
    },
  ],
  bannerImage:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Creative Design Services",
    subtitle: "Comprehensive creative solutions tailored to your brand vision",
  },
  services: [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description:
        "Complete visual identity systems that communicate your brand essence",
      features: [
        "Logo Design",
        "Color Systems",
        "Typography",
        "Brand Guidelines",
      ],
    },
    {
      icon: Layout,
      title: "Print Design",
      description: "Eye-catching designs for physical marketing materials",
      features: ["Brochures", "Packaging", "Posters", "Billboards"],
    },
    {
      icon: Monitor,
      title: "Digital Design",
      description: "Engaging designs for all digital platforms and screens",
      features: [
        "Website UI/UX",
        "Social Media Graphics",
        "Digital Ads",
        "Email Templates",
      ],
    },
    {
      icon: Film,
      title: "Motion Graphics",
      description: "Dynamic animated designs that bring your message to life",
      features: [
        "Explainer Videos",
        "Animated Logos",
        "Social Media Animations",
        "UI Animations",
      ],
    },
    {
      icon: Smartphone,
      title: "Interactive Design",
      description: "Immersive digital experiences that engage users",
      features: [
        "Micro-Interactions",
        "AR Experiences",
        "Interactive Infographics",
        "WebGL Experiences",
      ],
    },
    {
      icon: BarChart,
      title: "Data Visualization",
      description: "Complex information made beautiful and understandable",
      features: [
        "Infographics",
        "Dashboard Design",
        "Annual Reports",
        "Interactive Charts",
      ],
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Creative Design Success Stories",
    subtitle: "How our innovative designs have transformed brands",
  },
  paraContent: [
    {
      heading: "Tech Startup: 300% Brand Recall",
      text: "Rebranding with bold visual identity increased recognition",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "E-commerce: 50% Higher Engagement",
      text: "Interactive product visuals reduced bounce rates",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "Conference: 4.9/5 Attendee Feedback",
      text: "Immersive stage design enhanced event experience",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
      heading: "App: 75% More Daily Users",
      text: "UI redesign improved usability and retention",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 200,
      text: "Brand identities developed from scratch",
    },
    {
      number: 42,
      text: "Industry awards for creative excellence",
    },
  ],
};

const detailcontent = [
  {
    title: "The Power of Strategic Creative Design",
    description:
      "Exceptional creative design can increase brand recognition by up to 80% and boost conversions by 200%. But great design isn’t just about aesthetics—it’s a strategic tool. Our approach combines visual storytelling with business insight to ensure every design aligns with your brand's goals. We begin by understanding your target audience and translating your vision into compelling, high-impact visuals. Whether it's branding, marketing collateral, or digital assets, we craft each piece to resonate and perform. Every design we deliver is intentional, scalable, and built for results. It's not just about looking good—it's about making a difference through design.",
  },
  {
    title: "Why Most Corporate Design Falls Flat",
    description:
      "Many corporate designs fail because they rely on tired templates and lack emotional connection. We flip that script by creating visual experiences that speak directly to your audience. Our team crafts unique, brand-aligned designs that balance creativity and clarity. We ensure visual consistency across platforms, pushing creative boundaries without losing strategic focus. Through user testing and real-time feedback, we refine every detail to perfection. The end result is a brand identity that cuts through noise, builds trust, and drives results. No cookie-cutter designs—just bold, effective visuals with purpose.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Our Creative Process",
  description:
    "Our creative process begins with a deep discovery phase, where we align with your brand’s mission, goals, and audience. From there, we conduct thorough research and analyze current trends to uncover visual opportunities. We then explore multiple creative directions during the concepting phase. After presenting initial ideas, we refine the strongest ones based on your input. Once a final direction is chosen, we execute pixel-perfect designs with precision and flair. We deliver all assets in optimized formats ready for use. And it doesn’t stop there—we offer continued support to evolve your creative as your business grows.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Design Capabilities",
  description:
    "We offer a wide spectrum of design services tailored for modern brands. From developing complete brand strategies and visual identities to crafting packaging and print materials that leave a lasting impression. Our digital design capabilities span websites, apps, and social content, all rooted in UX best practices. We bring ideas to life through motion graphics, animation, and 3D renderings. Our environmental design expertise helps brands stand out in physical spaces like events or retail. We also provide direction for photography, custom illustrations, typography systems, and augmented reality experiences—making us a true end-to-end design partner.",
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
