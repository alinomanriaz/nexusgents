import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";
import {
  FaUserTie,
  FaFileAlt,
  FaSearchDollar,
  FaChartLine,
  FaMagic,
} from "react-icons/fa";
import { IoMdSchool, IoMdBriefcase } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";

// Hero Section
const HeroSectionContent = {
  fheading: "Professional CVs That",
  sheading: "Get You Hired",
  subheading:
    "Stand out from the competition with expertly crafted resumes that highlight your strengths and land you interviews at top companies.",
  list: [
    {
      Icon: FaUserTie,
      text: "ATS-Optimized",
    },
    {
      Icon: FaFileAlt,
      text: "Industry-Specific",
    },
    {
      Icon: FaMagic,
      text: "Professional Design",
    },
    {
      Icon: FaSearchDollar,
      text: "Job-Targeted",
    },
  ],
  fbutton: {
    link: "/create-cv",
    name: "Build Your CV Now",
  },
  sbutton: {
    link: "/templates",
    name: "View Templates",
  },
};

// Services Content
const servicesContent = {
  titles: {
    title: "Our CV Building Services",
    subtitle: "Comprehensive solutions for career advancement",
  },
  services: [
    {
      icon: FaFileAlt,
      title: "Professional CV Writing",
      description:
        "Expertly written resumes tailored to your industry and career level by certified writers.",
    },
    {
      icon: BiAnalyse,
      title: "ATS Optimization",
      description:
        "Applicant Tracking System-friendly formatting and keyword optimization for maximum visibility.",
    },
    {
      icon: IoMdSchool,
      title: "Academic CVs",
      description:
        "Specialized formats for academic positions, research roles, and graduate school applications.",
    },
    {
      icon: IoMdBriefcase,
      title: "Executive Resumes",
      description:
        "Strategic leadership-focused CVs that highlight boardroom-ready qualifications.",
    },
    {
      icon: MdOutlineDesignServices,
      title: "Design Services",
      description:
        "Visually striking templates that maintain professionalism while standing out.",
    },
    {
      icon: FaChartLine,
      title: "Career Coaching",
      description:
        "One-on-one sessions to refine your career narrative and interview strategy.",
    },
  ],
};

// Success Stories
const workExperienceContent = {
  titles: {
    title: "CV Success Stories",
    subtitle: "Resumes that opened doors",
  },
  paraContent: [
    {
      heading: "Tech Professional: 5 Interviews in 2 Weeks",
      text: "ATS-optimized CV highlighting niche technical skills and certifications",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "Recent Graduate: First Job in Fortune 500",
      text: "Academic CV transforming coursework into professional competencies",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    },
    {
      heading: "Executive: 35% Salary Increase",
      text: "Board-ready resume quantifying leadership impact with metrics",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    },
    {
      heading: "Career Changer: Successful Industry Transition",
      text: "Skills-based CV reframing transferable experience for new field",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 92,
      text: "Interview rate increase for our clients",
      isPercentage: true,
    },
    {
      number: 24,
      text: "Average hours saved per job search",
      isHours: true,
    },
  ],
};

// Detail Content
const detailcontent = [
  {
    title: "Why Professional CVs Matter",
    description:
      "A professional CV is crucial because it creates a strong first impression and sets the tone for how potential employers perceive you. It showcases your skills, qualifications, and achievements in a clear and organized manner, making it easier for recruiters to assess your suitability for a role. A well-crafted CV highlights your strengths and tailors your experience to match job requirements, helping you stand out in a competitive job market. It reflects your attention to detail and professionalism, which are qualities valued by employers. A professional CV also increases your chances of getting shortlisted for interviews. It serves as a marketing tool that effectively communicates your career story. Moreover, it demonstrates your commitment to the job search process. Ultimately, a strong CV can be the key to unlocking new career opportunities.",
  },
  {
    title: "Beyond Basic Resumes",
    description:
      "Beyond basic resumes lies the opportunity to truly differentiate yourself in a crowded job market. While a standard resume lists your work history and education, an advanced, tailored resume goes further by strategically highlighting accomplishments, quantifiable results, and relevant skills. It incorporates modern design, industry-specific keywords, and a clear narrative that aligns with the employer's needs. Going beyond the basics also means including elements like personal branding, a professional summary, and links to portfolios or LinkedIn profiles. These additions demonstrate initiative and self-awareness. A resume that goes the extra mile shows that you're serious about your career. It tells employers that you're more than just qualified — you're prepared, polished, and proactive.",
  },
];

// Right/Left Content
const rightSideContent = {
  image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=800&q=80",
  heading: "Our CV Components",
  description: `Our CV components are thoughtfully designed to present your qualifications in the most impactful way. Each section serves a specific purpose, starting with a compelling professional summary that captures your career goals and value proposition. We include a clear, concise skills section tailored to your industry, followed by a well-structured work experience layout that emphasizes achievements over duties. Education and certifications are presented cleanly to highlight your academic background. Optional additions like volunteer work, languages, or projects add depth and personality. We also ensure strategic keyword placement for applicant tracking systems (ATS). Together, these elements create a cohesive, professional, and results-driven CV that stands out.`,
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  heading: "Format Options",
  description: `We offer a variety of CV format options to suit different industries, career stages, and personal preferences. Whether you prefer a classic, clean layout for a traditional field like law or a modern, visually engaging design for creative industries, we have formats that align with your goals. Choose from chronological, functional, or combination formats depending on how you want to highlight your experience and skills. Our templates are professionally designed for readability, balance, and visual appeal. Each format is optimized for both human readers and applicant tracking systems (ATS). We also offer customizable sections to reflect your unique career journey. With the right format, your CV becomes not just a document — but a powerful presentation of your potential.`,
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
