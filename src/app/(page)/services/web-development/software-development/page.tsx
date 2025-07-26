import React from "react";
import { CloudLightning, Globe, Puzzle, Rocket } from "lucide-react";
import HeroSection from "@/components/web-developement/HeroSection";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import { IoStorefront } from "react-icons/io5";
import { CgArrowsExchange } from "react-icons/cg";

const heroContent = {
  tag: "Software Engineering Experts",
  title: "Build Your High-Performance",
  colortitle: "Custom Software",
  subtitle:
    "Tailored software solutions that streamline operations, engage users, and scale with your evolving business needs.",
  button: {
    name: "See Our Projects",
    link: "https://dev-ale.vercel.app/software",
  },
  image:
    "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Software Development Services",
    subtitle: "End-to-end solutions for businesses of all sizes",
  },
  services: [
    {
      icon: IoStorefront,
      title: "Custom Application Development",
      description:
        "Bespoke web and mobile applications designed for your specific workflows. Cross-platform solutions with responsive UIs and intuitive UX.",
    },
    {
      icon: Rocket,
      title: "Enterprise Software",
      description:
        "Scalable systems for large organizations with complex requirements. Microservices architecture, API integrations, and legacy system modernization.",
    },
    {
      icon: Puzzle,
      title: "SaaS Development",
      description:
        "Cloud-based software products with subscription models. Multi-tenant architecture with secure data isolation.",
    },
    {
      icon: CgArrowsExchange,
      title: "System Integration",
      description:
        "Seamless connectivity between your existing software ecosystem. API development and middleware solutions.",
    },
    {
      icon: CloudLightning,
      title: "Performance Optimization",
      description:
        "Code refactoring, database optimization, and architecture improvements for existing applications.",
    },
    {
      icon: Globe,
      title: "DevOps & Cloud Solutions",
      description:
        "CI/CD pipelines, containerization, and cloud infrastructure setup (AWS, Azure, GCP).",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Software Success Stories",
    subtitle: "How we've transformed businesses with technology",
  },
  paraContent: [
    {
      heading: "Logistics Company: 70% Process Automation",
      text: "Custom fleet management system with real-time tracking and predictive analytics",
      image:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&q=80",
    },
    {
      heading: "Healthcare Platform: HIPAA-Compliant SaaS",
      text: "Patient management system with telehealth features and EHR integrations",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
      heading: "Fintech App: 500ms API Response Time",
      text: "High-frequency trading platform with WebSocket connections",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80",
    },
    {
      heading: "Global Retailer: 15 System Integrations",
      text: "Unified commerce platform connecting ERP, POS, and ecommerce systems",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 120,
      text: "Custom software projects delivered",
    },
    {
      number: 99,
      text: "Client satisfaction rate for our projects",
    },
  ],
};
const detailcontent = [
  {
    title: "Why Choose Custom Software Development",
    description:
      "Off-the-shelf software often forces you to mold your business processes to fit the tool, which can limit efficiency and growth. Our approach flips that by building custom software tailored precisely to your unique workflows and operational needs. This results in solutions that fit perfectly, provide you with a strong competitive edge through advanced technology, and are designed with future scalability in mind. You gain full ownership of your intellectual property, eliminating recurring licensing fees and reducing long-term costs. Ultimately, custom software development gives you the flexibility and control necessary to keep evolving your business without constraints.",
  },
  {
    title: "Beyond Basic CRUD Applications",
    description:
      "Many developers focus on basic Create, Read, Update, Delete (CRUD) applications, but we push the envelope by delivering sophisticated, next-generation software solutions. These include AI and machine learning-powered features that improve decision-making, real-time data processing for instant insights, and complex workflow automation to streamline operations. We create advanced data visualization dashboards that turn raw data into actionable intelligence, integrate Internet of Things (IoT) devices for connected ecosystems, and develop blockchain applications where appropriate to enhance security and transparency. Our solutions are designed to meet the most demanding and specialized business requirements.",
  },
];

const rightSideContent = {
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  heading: "Our Technology Stack",
  description:
    "Our technology stack is carefully selected to build robust, scalable, and cutting-edge software. On the frontend, we work with frameworks like React, Angular, Vue.js, and Flutter to deliver seamless and responsive user interfaces. Backend development leverages Node.js, Python, .NET Core, and Java for powerful, secure, and scalable server-side logic. For mobile applications, we use React Native, Swift, and Kotlin to build native-like experiences on multiple platforms. Our databases include PostgreSQL, MongoDB, and Redis to handle various data needs efficiently. Cloud infrastructure is managed on AWS, Azure, and Google Cloud, ensuring reliability and scalability. We implement DevOps best practices with Docker, Kubernetes, and Terraform for automated deployments and infrastructure management. For AI and machine learning, TensorFlow, PyTorch, and OpenAI tools enable us to embed intelligence into applications. Testing and quality assurance are performed using Jest, Cypress, and Selenium to deliver bug-free products.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  heading: "Software Features We Build",
  description:
    "We develop a wide range of advanced software features tailored to your business needs. This includes workflow automation engines that streamline repetitive tasks and predictive analytics dashboards that provide actionable business insights. Our real-time collaboration tools foster better team communication and productivity. We build computer vision systems to interpret and analyze visual data, and natural language processing capabilities to enable smarter user interactions. Blockchain smart contracts ensure secure and transparent transactions, while IoT device management connects and controls your hardware ecosystem. Augmented and virtual reality interfaces provide immersive experiences, voice-enabled applications offer hands-free convenience, and recommendation engines personalize user experiences to boost engagement and sales.",
};

const page = () => {
  return (
    <div className="w-full space-y-20 mb-20">
      <HeroSection content={heroContent} />
      <Services content={servicesContent} />
      <WorkExperiances content={workExperienceContent} />
      <LeftImageWithContent content={rightSideContent} />
      <RightImageWithContent content={leftSideContent} />
      <DetailContent content={detailcontent} />
    </div>
  );
};

export default page;
