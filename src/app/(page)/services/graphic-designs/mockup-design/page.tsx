import HeroSection from "@/components/graphic-designing/HeroSection";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import { FileText, Film, Home, Package, Shirt, Smartphone } from "lucide-react";

const heroSectionContent = {
  title: "Stunning Mockups That Bring Designs to Life",
  button: {
    name: "Get Custom Mockups",
    link: "/mockup-design",
  },
  description:
    "Photorealistic mockups that showcase your designs in real-world contexts, helping clients visualize products and make confident decisions.",
  client: [
    {
      count: 2500,
      des: "Mockups created for global brands",
    },
    {
      count: 99,
      des: "Client satisfaction rate with our mockups",
    },
  ],
  bannerImage:
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Mockup Design Services",
    subtitle: "High-fidelity mockups for all your presentation needs",
  },
  services: [
    {
      icon: Package,
      title: "Product Packaging Mockups",
      description:
        "3D-rendered mockups showing your packaging in realistic environments",
      features: [
        "Brand-Applied Designs",
        "Multiple Angle Views",
        "Material Textures",
        "Lifestyle Contexts",
      ],
    },
    {
      icon: Smartphone,
      title: "Device Mockups",
      description: "Screens and interfaces displayed on real-looking devices",
      features: [
        "All Device Types",
        "Screen Animations",
        "Multiple Colorways",
        "Environment Reflections",
      ],
    },
    {
      icon: FileText,
      title: "Print Material Mockups",
      description: "Business collateral shown in natural usage scenarios",
      features: ["Business Cards", "Brochures", "Stationery", "Billboards"],
    },
    {
      icon: Shirt,
      title: "Apparel Mockups",
      description: "Clothing and merchandise with your designs applied",
      features: [
        "Multiple Garment Types",
        "Realistic Folds & Shadows",
        "Body Angles",
        "Fabric Textures",
      ],
    },
    {
      icon: Home,
      title: "Environmental Mockups",
      description: "Signage and branding in physical spaces",
      features: [
        "Retail Spaces",
        "Office Environments",
        "Trade Show Booths",
        "Vehicle Wraps",
      ],
    },
    {
      icon: Film,
      title: "Animated Mockups",
      description: "Moving mockups for dynamic presentations",
      features: [
        "3D Product Rotations",
        "UI Interactions",
        "Packaging Unboxing",
        "Social Media Formats",
      ],
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Mockup Design Success Stories",
    subtitle: "How our realistic mockups have helped clients win approvals",
  },
  paraContent: [
    {
      heading: "Packaging Design: 40% Faster Approvals",
      text: "Photorealistic mockups reduced client revision cycles",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "App Launch: 75% More Investor Interest",
      text: "Animated device mockups showcased UX effectively",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "Rebranding: 100% Stakeholder Buy-In",
      text: "Comprehensive mockup suite demonstrated full brand application",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
      heading: "E-commerce: 30% Fewer Returns",
      text: "Accurate product mockups set correct expectations",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 50,
      text: "Different product categories covered",
    },
    {
      number: 4,
      text: "Hours average turnaround for standard mockups",
    },
  ],
};

const detailcontent = [
  {
    title: "Why Professional Mockups Matter",
    description:
      "Mockups are more than just visuals—they're persuasive tools that help your designs sell. Professional mockups increase approval rates and drive better conversions by presenting your work in hyper-realistic settings. We use advanced 3D modeling techniques, paired with expert lighting and composition, to make your designs feel tangible and polished. Every detail matters—from how textures catch the light to how reflections behave in realistic environments. These nuances build trust with clients, elevate perceived value, and communicate your design vision clearly. Whether it’s packaging, branding, or UI, our mockups help you close deals with confidence.",
  },
  {
    title: "The Limitations of Basic Mockups",
    description:
      "Basic mockups often fall flat, using off-the-shelf templates that don’t accurately reflect your unique design or product materials. They can misrepresent colors, distort proportions, and fail to capture real-world lighting. We solve this with a premium approach: custom 3D modeling tailored to your specs, precise material and color matching, and realistic render setups that mirror actual product environments. Our process gives you multiple angles and high-resolution outputs that feel production-ready. The result? Mockups that eliminate guesswork, build client trust, and streamline the transition from concept to production.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Our Mockup Process",
  description:
    "Our mockup process is structured for both precision and visual impact. We begin by analyzing your artwork and technical requirements to determine the best approach. From there, we select or create the appropriate 3D base model. Materials and textures are applied with care, using calibrated color systems to ensure accuracy. Lighting is staged to replicate professional studio conditions or realistic environments, depending on your use case. Once rendered in high resolution, we refine the output in post-production. You’ll receive polished mockups from multiple angles, ready for client pitches, production previews, or e-commerce use.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Mockup Applications",
  description:
    "Mockups are essential across the creative lifecycle—from concept approval to marketing execution. In pitch presentations, they help clients visualize your ideas in context, dramatically improving buy-in. For e-commerce or crowdfunding, they act as product stand-ins before production begins. Designers use them to validate packaging concepts or test branding in real-world settings. They're also valuable in your portfolio, showcasing your work in polished, professional environments. On social media, custom mockups grab attention and elevate your brand’s aesthetic. Whether you're selling an idea or a product, mockups add the visual clarity that words alone can't achieve.",
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
