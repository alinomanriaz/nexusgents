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
  tag: "Shopify Experts",
  title: "Build Your High-Performing",
  colortitle: "Shopify Store",
  subtitle:
    "Custom Shopify solutions that convert browsers into buyers and scale with your growing business.",
  button: {
    name: "See Shopify Work",
    link: "https://dev-ale.vercel.app/shopify",
  },
  image:
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Shopify Development Services",
    subtitle: "End-to-end solutions for stores of all sizes",
  },
  services: [
    {
      icon: IoStorefront,
      title: "Shopify Store Development",
      description:
        "Custom-designed stores with premium themes or completely custom builds. Mobile-first responsive designs that load instantly. Optimized for conversions and sales growth.",
    },
    {
      icon: Rocket,
      title: "Shopify Plus Development",
      description:
        "Enterprise-grade solutions for high-volume merchants. Custom checkout extensions and wholesale channels. Scalable architecture for rapid business growth.",
    },
    {
      icon: Puzzle,
      title: "App Development",
      description:
        "Custom Shopify apps to extend your store's functionality. Private apps for unique business needs. Public apps for the Shopify App Store.",
    },
    {
      icon: CgArrowsExchange,
      title: "Theme Customization",
      description:
        "Tailored modifications to existing Shopify themes. Custom sections and templates without bloated code. Brand-aligned designs that stand out.",
    },
    {
      icon: CloudLightning,
      title: "Performance Optimization",
      description:
        "Speed enhancements for higher conversions. Lighthouse score improvements. Image optimization and lazy loading implementation.",
    },
    {
      icon: Globe,
      title: "Internationalization",
      description:
        "Multi-currency and multi-language setups. Geolocation-based store experiences. Localized payment and shipping solutions.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Shopify Success Stories",
    subtitle: "How we've helped brands dominate on Shopify",
  },
  paraContent: [
    {
      heading: "Fashion Brand: 200% Revenue Increase",
      text: "Custom Shopify Plus store with AR try-on features and VIP loyalty program",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    },
    {
      heading: "Beauty Products: #1 Best-Selling App",
      text: "Custom subscription app developed for Shopify App Store",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    },
    {
      heading: "Home Goods: 0.8s Load Time",
      text: "Performance-optimized Shopify store with custom liquid code",
      image:
        "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    },
    {
      heading: "Global Brand: 12 Localized Stores",
      text: "Multi-market Shopify implementation with currency auto-switching",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 150,
      text: "Shopify stores launched across industries",
    },
    {
      number: 92,
      text: "Average Lighthouse performance score for our stores",
    },
  ],
};

const detailcontent = [
  {
    title: "Why Choose Shopify Development",
    description:
      "Shopify is a powerhouse platform, powering 10% of all US e-commerce sales and growing rapidly thanks to its unmatched reliability and feature set. Choosing Shopify development means your store benefits from a robust technical infrastructure that virtually never experiences downtime, giving you peace of mind during critical sales periods. Our expertise ensures your Shopify store converts three times better than the average by combining strategic UX design with seamless payment processing built right into the platform at competitive rates. We also integrate your store effortlessly with a wide range of apps and third-party tools to extend functionality without slowing down performance. Security is enterprise-grade, so you can rest easy knowing your customers’ data is protected with zero maintenance required on your part. This makes Shopify an ideal choice for startups, growing brands, and enterprises looking for a scalable and dependable e-commerce foundation.",
  },
  {
    title: "Beyond Basic Shopify Templates",
    description:
      "While Shopify’s default templates provide a good starting point for beginners, growing and serious brands need custom development to truly differentiate themselves in competitive markets. We specialize in creating unique, tailor-made storefronts that perfectly reflect your brand’s identity and values. Our custom development avoids unnecessary app bloat by building only the features you need, optimizing your site to load in under one second for a seamless user experience. We develop advanced functionalities like subscription models, membership sites, and B2B portals to meet specialized business requirements. Moreover, our scalable architecture ensures your store can handle massive traffic spikes, such as during Black Friday or holiday sales, without a hitch. By pushing beyond the basics, we deliver Shopify solutions that grow with your business and stand out in the crowded e-commerce space.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Our Shopify Tech Stack",
  description:
    "We build Shopify stores using a mix of popular and cutting-edge technologies tailored to your needs. For storefronts, we work with Dawn, Debut, or fully custom themes to create visually stunning user experiences. Our development stack includes Liquid templating language along with modern frontend frameworks like React and Vue.js for dynamic interfaces. On the backend, we leverage Node.js and Ruby on Rails to create scalable and efficient server-side solutions. For content management, we integrate Shopify Sections and headless CMS options like Contentful. Search capabilities are enhanced using Shopify’s built-in search and Algolia for fast, relevant results. Payments are securely processed through Shopify Payments and Stripe, while analytics and marketing automation tools like Google Analytics and Klaviyo help track and boost your store’s performance.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Shopify Features We Build",
  description:
    "Our custom Shopify features empower your store with advanced capabilities to boost sales and customer engagement. We develop custom product configurators that allow shoppers to personalize their purchases with ease. AI-powered recommendation engines help increase average order value by showcasing relevant products. Augmented reality previews provide immersive shopping experiences for better decision-making. We build subscription and membership systems to create recurring revenue streams, as well as wholesale and B2B portals tailored to business customers. Local pickup and delivery systems enhance customer convenience, while custom checkout extensions (Shopify Plus) streamline purchase flows. We also integrate ERP and CRM systems for smooth operations, implement headless commerce solutions for ultimate frontend flexibility, and develop progressive web apps (PWA) to deliver app-like experiences on any device.",
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
