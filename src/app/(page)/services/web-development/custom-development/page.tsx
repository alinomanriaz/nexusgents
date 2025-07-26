import React from "react";
import { Cpu, Database, Plug, Server, Workflow } from "lucide-react";
import HeroSection from "@/components/web-developement/HeroSection";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import { BiLock } from "react-icons/bi";

const heroContent = {
  tag: "Tailored Software Solutions",
  title: "Build Your Dream",
  colortitle: "Custom Application",
  subtitle:
    "From concept to deployment, we engineer bespoke software solutions designed to solve your unique business challenges and drive growth.",
  button: {
    name: "View Our Work",
    link: "https://dev-ale.vercel.app",
  },
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Custom Development Services",
    subtitle: "Bespoke software engineered for your specific business needs",
  },
  services: [
    {
      icon: Cpu,
      title: "Enterprise Software",
      description:
        "Custom business applications that automate and optimize your workflows. We build scalable solutions tailored to your operational needs. Transform legacy systems into modern, efficient platforms.",
    },
    {
      icon: Server,
      title: "Cloud-Native Development",
      description:
        "Applications designed specifically for cloud environments from inception. Leverage microservices, containers, and serverless architecture. Achieve scalability, reliability, and cost-efficiency in the cloud.",
    },
    {
      icon: Database,
      title: "Data-Driven Applications",
      description:
        "Solutions that turn your data into actionable business intelligence. Custom dashboards, analytics tools, and processing pipelines. Make smarter decisions with real-time insights from your data.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Eliminate repetitive tasks with intelligent automation systems. Custom CRM/ERP solutions and approval workflows. Streamline operations and boost productivity across your organization.",
    },
    {
      icon: BiLock,
      title: "Secure Systems",
      description:
        "Applications built with security as the foundation. Compliance-focused development with robust access controls. Protect sensitive data with enterprise-grade encryption and monitoring.",
    },
    {
      icon: Plug,
      title: "API & Integration",
      description:
        "Seamlessly connect your systems with custom middleware. Develop tailored APIs for internal and external use. Synchronize data across platforms for unified operations.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Custom Development Success Stories",
    subtitle: "How our tailored solutions have transformed businesses",
  },
  paraContent: [
    {
      heading: "Manufacturing: 60% Process Efficiency Gain",
      text: "Custom inventory management system reduced operational costs by 40%",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    },
    {
      heading: "Healthcare: 300% Faster Data Processing",
      text: "HIPAA-compliant patient management system improved clinic workflows",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
      heading: "Logistics: Real-Time Tracking System",
      text: "Custom fleet management solution reduced delivery times by 25%",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "Education: Personalized Learning Platform",
      text: "Adaptive learning system increased student engagement by 45%",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 200,
      text: "Custom systems deployed across industries",
    },
    {
      number: 50,
      text: "Average percentage efficiency improvement for clients",
    },
  ],
};

const detailcontent = [
  {
    title: "The Strategic Value of Custom Software",
    description:
      "Off-the-shelf software often forces businesses to change their workflows to fit the tool, limiting flexibility and innovation. With custom software development, we create solutions that adapt perfectly to your unique business processes, allowing you to maintain your competitive edge. This approach enables operational efficiency by automating and optimizing your exact workflows rather than compromising on functionality. Additionally, custom solutions offer unmatched scalability and integration capabilities, ensuring your system grows seamlessly with your business. Unlike packaged software, you gain full control over features, security measures, and user experience. Custom software empowers you to innovate freely and respond quickly to market changes. Ultimately, it becomes a core strategic asset that drives long-term business success and agility.",
  },
  {
    title: "When to Choose Custom Development",
    description:
      "Custom software development is the right choice when off-the-shelf options cannot meet your unique business needs. This is often the case if your workflows are complex or specialized, requiring deep integration with multiple internal and external systems. When data security, compliance, or proprietary processes are critical, custom solutions provide tailored safeguards and controls. Additionally, businesses looking to gain a technology-driven competitive advantage often turn to custom development to differentiate themselves in their industry. Our approach starts with thorough discovery to understand your challenges and goals before designing a scalable solution. We emphasize collaboration, ensuring the software evolves with your business and delivers measurable value through improved efficiency, agility, and user satisfaction.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Our Development Methodology",
  description: `Our development process is designed for transparency, collaboration, and flexibility. We begin with a deep discovery phase to thoroughly understand your business needs and goals. Next, we create a detailed technical architecture and roadmap, laying a strong foundation for success. Rapid prototyping allows us to validate concepts early, incorporating your feedback before full-scale development. During the development phase, we use agile sprints to continuously deliver and improve the product. Rigorous quality assurance testing ensures reliability and performance. Deployment is carefully managed with training to guarantee smooth adoption. Finally, we provide ongoing support and evolution services, helping your software adapt and grow with your business.`,
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Technology Stack Options",
  description: `We utilize a broad range of modern technologies tailored to your project’s requirements. For frontend development, we work with React, Angular, and Vue.js to create dynamic and responsive user interfaces. On the backend, our expertise includes Node.js, Python, and .NET Core for building robust, scalable servers and APIs. For mobile applications, we develop using React Native, Flutter, and Swift, ensuring native-like performance and smooth user experiences. We leverage PostgreSQL, MongoDB, and Firebase as database solutions to suit different data models and scalability needs. Cloud infrastructure options include AWS, Azure, and Google Cloud, providing reliable and secure hosting environments. Our DevOps practices utilize Docker, Kubernetes, and CI/CD pipelines to automate deployment and ensure rapid delivery. For AI and machine learning projects, we implement TensorFlow, PyTorch, and custom models tailored to your specific use cases.`,
};

const page = () => {
  return (
    <div className="w-full space-y-20 mb-20">
      <HeroSection content={heroContent} />
      <Services content={servicesContent} />
      <LeftImageWithContent content={rightSideContent} />
      <RightImageWithContent content={leftSideContent} />
      <WorkExperiances content={workExperienceContent} />
      <DetailContent content={detailcontent} />
    </div>
  );
};

export default page;
