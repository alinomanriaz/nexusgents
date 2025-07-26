import React from "react";
import {
  FileText,
  RefreshCw,
  Mail,
  Navigation,
  List,
  Search,
  Phone,
  UserCheck,
  Home,
  MousePointer,
  Layers,
  Clock,
} from "lucide-react";

import Services from "@/components/common-components/Services";
import DetailContent from "@/components/common-components/DetailContent";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import WorkExperiances from "@/components/common-components/WorkExperiances";

const HeroSectionContent = {
  fheading: "Strategic Website Content That",
  sheading: "Converts Visitors to Customers",
  subheading:
    "Persuasive, SEO-optimized website copy that clearly communicates your value, builds trust, and guides users to take action.",
  list: [
    {
      Icon: MousePointer,
      text: "Higher Conversions",
    },
    {
      Icon: Search,
      text: "SEO-Optimized",
    },
    {
      Icon: Layers,
      text: "Strategic Structure",
    },
    {
      Icon: Clock,
      text: "Fast Turnaround",
    },
  ],
  fbutton: {
    link: "/website-content",
    name: "Get Website Copy",
  },
  sbutton: {
    link: "/portfolio",
    name: "See Samples",
  },
};

const servicesContent = {
  titles: {
    title: "Our Website Content Services",
    subtitle:
      "Comprehensive web copy solutions tailored to your brand voice and business goals.",
  },
  services: [
    {
      icon: Home,
      title: "Homepage Copywriting",
      description:
        "Compelling homepage content that captures attention and communicates your unique value proposition.",
    },
    {
      icon: FileText,
      title: "Service/Product Pages",
      description:
        "Persuasive pages that highlight benefits and drive conversions.",
    },
    {
      icon: UserCheck,
      title: "About Us Pages",
      description:
        "Authentic brand storytelling that builds connection and trust.",
    },
    {
      icon: Phone,
      title: "Landing Pages",
      description:
        "High-converting pages designed for specific campaigns or offers.",
    },
    {
      icon: Search,
      title: "SEO Content Strategy",
      description:
        "Keyword-optimized copy that ranks while maintaining natural flow.",
    },
    {
      icon: List,
      title: "Website Messaging Framework",
      description:
        "Core messaging development for consistent brand communication.",
    },
    {
      icon: Navigation,
      title: "Navigation & UX Copy",
      description:
        "Intuitive menu labels and microcopy that improves user experience.",
    },
    {
      icon: Mail,
      title: "Lead Capture Forms",
      description: "High-converting form copy and call-to-action optimization.",
    },
    {
      icon: RefreshCw,
      title: "Content Refresh",
      description: "Updating existing website copy to improve performance.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Website Content Success Stories",
    subtitle:
      "How our strategic web copy has helped businesses improve engagement and conversions.",
  },
  paraContent: [
    {
      heading: "SaaS Company: 40% More Signups",
      text: "Homepage and feature page rewrite increased free trial conversions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "E-Commerce: 35% Higher AOV",
      text: "Product page optimizations increased average order value.",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "Consulting Firm: 50% More Leads",
      text: "Service page restructuring improved lead generation.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      heading: "Nonprofit: 3X More Donations",
      text: "Emotional storytelling on key pages boosted donor conversion.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 200,
      text: "Websites transformed with high-converting copy",
    },
    {
      number: 45,
      text: "Average percentage increase in conversions after rewrite",
    },
  ],
};
const detailcontent = [
  {
    title: "Why Professional Website Copy Matters",
    description:
      "Visitors decide whether to stay on your website within 3 seconds. Our conversion-focused web copy immediately communicates your value, builds credibility, and guides users toward action. We combine persuasive writing techniques with UX best practices to create content that not only informs but motivates. Each page is strategically structured with clear hierarchy, scannable formatting, and compelling calls-to-action. These elements are tailored specifically to your audience and business goals. The result is a website that feels intuitive and engaging. This approach increases visitor retention and boosts conversions effectively.",
  },
  {
    title: "The High Cost of Poor Website Content",
    description:
      "Weak web copy fails to differentiate your business, confuses visitors, and kills conversions. Common issues we fix include unclear value propositions, excessive jargon, weak calls-to-action, inconsistent messaging, and poor SEO foundations. Our proven website copywriting process involves in-depth audience research, competitive analysis, and conversion psychology principles. We craft content that truly works, aligning messaging with customer needs. The result? Websites that convert visitors into customers while communicating your brand effectively. Avoid costly mistakes with copy that resonates and performs.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  heading: "Conversion-Focused Writing",
  description:
    "Our web copy includes benefit-driven headlines that grab attention and clear value propositions to engage visitors. Content is structured for easy scanning with strategic calls-to-action guiding users to act. We include trust-building elements to enhance credibility and implement SEO best practices to improve search rankings. Mobile-optimized formatting ensures a seamless experience across devices. Our approach is flexible, adapting to different industries and buyer journeys to maximize impact. The goal is to create copy that converts and supports your business growth effectively.",
};

const leftSideContent = {
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  heading: "Strategic Website Content Process",
  description:
    "Our comprehensive approach starts with discovery, researching your business, audience, and competitors thoroughly. Next, we develop a clear strategy that defines core messaging and content framework. Writing involves crafting persuasive, on-brand copy tailored to your goals. We then optimize content for conversions and SEO to maximize performance. Finally, testing through A/B experiments helps refine key elements and improve results. This methodical process ensures your website content drives measurable success. It’s a full-cycle approach designed to build lasting engagement and growth.",
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
