import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import { FaUsers } from "react-icons/fa";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";

import { FaMobileAlt } from "react-icons/fa";

import {
  FaBuilding,
  FaFileAlt,
  FaChartLine,
  FaGlobe,
  FaPrint,
} from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";

// Hero Section
const HeroSectionContent = {
  fheading: "Professional Profiles That",
  sheading: "Elevate Your Business",
  subheading:
    "Powerful company profiles that communicate your brand story, showcase your capabilities, and open doors to new opportunities.",
  list: [
    {
      Icon: FaBuilding,
      text: "Corporate Branding",
    },
    {
      Icon: FaFileAlt,
      text: "Investor-Ready Documents",
    },
    {
      Icon: MdOutlineDesignServices,
      text: "Custom Design",
    },
    {
      Icon: FaGlobe,
      text: "Multi-Format Delivery",
    },
  ],
  fbutton: {
    link: "/quote",
    name: "Get a Quote",
  },
  sbutton: {
    link: "/portfolio",
    name: "View Samples",
  },
};

// Services Content
const servicesContent = {
  titles: {
    title: "Our Company Profile Services",
    subtitle: "Comprehensive solutions to showcase your business",
  },
  services: [
    {
      icon: IoMdBusiness,
      title: "Corporate Profile Design",
      description:
        "Professional layouts that reflect your brand identity and corporate values.",
    },
    {
      icon: FaFileAlt,
      title: "Investor Pitch Decks",
      description:
        "Compelling presentations to attract funding and partnerships.",
    },
    {
      icon: FaUsers,
      title: "Capability Statements",
      description:
        "Detailed overviews of your services, expertise, and differentiators.",
    },
    {
      icon: FaChartLine,
      title: "Annual Reports",
      description:
        "Financial and operational summaries with engaging data visualization.",
    },
    {
      icon: FaMobileAlt,
      title: "Digital Profiles",
      description:
        "Interactive PDFs and web-based profiles with multimedia elements.",
    },
    {
      icon: FaPrint,
      title: "Print-Ready Files",
      description: "High-resolution files optimized for professional printing.",
    },
  ],
};

// Success Stories
const workExperienceContent = {
  titles: {
    title: "Profile Success Stories",
    subtitle: "Documents that made an impact",
  },
  paraContent: [
    {
      heading: "Tech Startup: Secured $2M Funding",
      text: "Investor deck that clearly communicated their IP and market potential",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "Manufacturer: 40% More RFPs Won",
      text: "Capability statement that highlighted their unique production processes",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      heading: "Consulting Firm: 3X Client Engagement",
      text: "Interactive digital profile with case study videos and testimonials",
      image:
        "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80",
    },
    {
      heading: "Nonprofit: 60% More Donations",
      text: "Annual report that effectively showcased their community impact",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 300,
      text: "Profiles developed across industries",
    },
    {
      number: 95,
      text: "Client satisfaction rate",
      isPercentage: true,
    },
  ],
};

// Detail Content
const detailcontent = [
  {
    title: "Why Professional Profiles Matter",
    description:
      "Professional profiles are vital for companies because they shape how the organization and its team are perceived by clients, partners, and potential hires. A strong company profile—along with well-crafted employee bios—builds credibility, communicates brand values, and showcases expertise across leadership and staff. These profiles reinforce trust and professionalism, helping to attract top talent, win new business, and establish industry authority. In B2B contexts, clients often research team members before signing contracts, making professional profiles a key part of the decision-making process. Internally, they promote a unified, polished image that reflects the company’s standards. Simply put, professional profiles are powerful branding tools that contribute to a company’s reputation, visibility, and long-term success.",
  },
  {
    title: "Beyond Basic Brochures",
    description:
      "Going beyond basic brochures means creating marketing materials that truly capture attention and engage your audience. Instead of just listing information, advanced brochures use compelling storytelling, striking visuals, and interactive elements to communicate your brand’s unique value. They are thoughtfully designed to guide readers through your key messages with clarity and impact. Beyond the standard fold, these brochures may include custom finishes, innovative formats, or personalized content tailored to specific clients or events. This elevated approach not only boosts brand perception but also drives stronger responses and lasting impressions. When you go beyond basic brochures, you transform a simple handout into a powerful marketing tool that reflects professionalism and creativity.",
  },
];

// Right/Left Content
const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Our Profile Components",
  description: `Our professional profiles are built with carefully selected components to showcase your strengths and tell your unique story effectively. We start with a compelling headline that grabs attention and clearly states your role or expertise. A concise summary follows, highlighting your key skills, experiences, and career goals. We include detailed sections for work history and accomplishments, emphasizing results and impact rather than just responsibilities. Education, certifications, and relevant training are presented to support your qualifications. Additionally, we incorporate endorsements, recommendations, or testimonials when available to build credibility. Optional elements like portfolio links, social media handles, or personal interests add personality and depth. Together, these components create a well-rounded, engaging profile that stands out to employers and networks alike.`,
};

const leftSideContent = {
  image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
  heading: "Output Formats",
  description: `We provide a variety of output formats to meet diverse needs and preferences, ensuring your documents are accessible and professional across platforms. Common formats include PDF for universal compatibility and easy sharing, Microsoft Word for easy editing and customization, and plain text versions optimized for online applications and applicant tracking systems (ATS). For digital portfolios or online profiles, we offer web-friendly formats such as HTML or interactive presentations. Print-ready files are also available, formatted to the highest standards for clarity and design integrity. By offering flexible output options, we make sure your CV, profile, or marketing materials look polished and perform well no matter how or where they’re viewed.`,
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
