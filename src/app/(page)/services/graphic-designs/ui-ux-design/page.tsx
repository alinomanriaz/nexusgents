import HeroSection from "@/components/graphic-designing/HeroSection";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import { Layout, Monitor, Palette, Smartphone, Users, Zap } from "lucide-react";

const heroSectionContent = {
  title: "Intuitive UI/UX Designs That Delight Users",
  button: {
    name: "Start Your Project",
    link: "/ui-ux-design",
  },
  description:
    "Human-centered digital experiences that combine beautiful interfaces with seamless functionality to drive engagement and conversions.",
  client: [
    {
      count: 500,
      des: "Digital products designed for startups to enterprises",
    },
    {
      count: 98,
      des: "Client satisfaction rate with our designs",
    },
  ],
  bannerImage:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our UI/UX Design Services",
    subtitle: "End-to-end digital product design for optimal user experiences",
  },
  services: [
    {
      icon: Users,
      title: "User Research & Strategy",
      description: "Data-driven insights to inform your product design",
      features: [
        "User Personas",
        "Journey Mapping",
        "Competitive Analysis",
        "Usability Testing",
      ],
    },
    {
      icon: Layout,
      title: "Information Architecture",
      description: "Logical structures for intuitive navigation",
      features: [
        "Sitemaps",
        "User Flows",
        "Content Strategy",
        "Taxonomy Design",
      ],
    },
    {
      icon: Smartphone,
      title: "Wireframing & Prototyping",
      description: "Interactive blueprints of your digital product",
      features: [
        "Low-Fidelity Wireframes",
        "High-Fidelity Prototypes",
        "Clickable Demos",
        "User Testing",
      ],
    },
    {
      icon: Palette,
      title: "UI Design",
      description: "Visually stunning interfaces that align with your brand",
      features: [
        "Design Systems",
        "Responsive Layouts",
        "Microinteractions",
        "Accessibility Compliance",
      ],
    },
    {
      icon: Zap,
      title: "UX Optimization",
      description: "Improving existing products for better performance",
      features: [
        "Heuristic Evaluation",
        "A/B Testing",
        "Conversion Rate Optimization",
        "Redesign Strategy",
      ],
    },
    {
      icon: Monitor,
      title: "Design Systems",
      description: "Scalable frameworks for consistent product experiences",
      features: [
        "Component Libraries",
        "Style Guides",
        "Design Tokens",
        "Developer Handoff",
      ],
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "UI/UX Design Success Stories",
    subtitle: "How our user-centered designs have transformed digital products",
  },
  paraContent: [
    {
      heading: "Fintech App: 40% More Daily Active Users",
      text: "UX redesign simplified complex financial workflows",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "E-commerce: 35% Higher Conversion",
      text: "UI overhaul reduced friction in checkout process",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "SaaS Platform: 50% Fewer Support Tickets",
      text: "Improved onboarding flows increased feature discovery",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      heading: "Mobile App: 4.8/5 App Store Rating",
      text: "Delightful microinteractions boosted user satisfaction",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 75,
      text: "Average percentage improvement in usability metrics",
    },
    {
      number: 200,
      text: "User tests conducted across all projects",
    },
  ],
};

const detailcontent = [
  {
    title: "The Business Value of Great UI/UX Design",
    description:
      "Exceptional UI/UX is more than just aesthetics—it's a direct business driver. Interfaces that are well-designed can increase conversion rates by up to 200%, while early UX investments reduce development costs by catching issues before they escalate. Our process is rooted in deep user insights, behavioral data, and business goals. We combine research, creative thinking, and usability testing to eliminate friction and add delight. The result? Intuitive, goal-driven experiences that engage users, increase retention, and boost ROI for your digital product.",
  },
  {
    title: "Why Most Digital Products Fail at UX",
    description:
      "The hard truth? Most digital products fail because they ignore real users during development. Without validation, teams build solutions for problems that don’t exist. We flip that script. Through early user research, rapid prototyping, and frequent usability testing, we make sure we’re solving the right problems the right way. Every design decision is backed by real behavior—not guesswork. From hypothesis to iteration, we test, measure, and refine. That’s how we create products people actually want to use—and keep using.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Our UI/UX Design Process",
  description:
    "We follow a user-centered, data-informed process that aligns design with real business goals. It starts with discovery—conducting in-depth user research and aligning with product strategy. Then, we define information architecture and user flows that make sense. Next comes visual design, wireframing, and high-fidelity interfaces. We prototype interactively, test with actual users, and refine based on feedback. Once validated, we prepare smooth developer handoffs and support implementation. Post-launch, we track usage and optimize continuously for long-term performance.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "UI/UX Design Principles",
  description:
    "Great digital experiences are built on rock-solid design principles. We prioritize user-centricity—creating for real people, not personas. Our designs follow predictable, consistent patterns that reduce learning curves. We ensure efficiency by minimizing steps and maximizing clarity. We build forgiving systems that prevent errors and support recovery. Accessibility is baked in, so everyone can interact with ease. Beyond usability, we aim to delight—adding subtle touches that create emotional connection. And everything we do is measurable, data-driven, and continuously refined.",
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
