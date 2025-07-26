import React from "react";
import { Box, GalleryHorizontal, ShoppingCart } from "lucide-react";
import HeroSection from "@/components/web-developement/HeroSection";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import { IoCashOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { BiMobile } from "react-icons/bi";

const heroContent = {
  tag: "E-Commerce Solutions",
  title: "Build Your High-Converting",
  colortitle: "Online Store",
  subtitle:
    "From sleek storefronts to powerful backends, we create e-commerce experiences that drive sales and customer loyalty.",
  button: {
    name: "View E-Commerce Portfolio",
    link: "https://dev-ale.vercel.app/ecommerce",
  },
  image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our E-Commerce Development Services",
    subtitle: "Complete solutions to launch and grow your online store",
  },
  services: [
    {
      icon: ShoppingCart,
      title: "E-Commerce Store Development",
      description:
        "Custom online stores built for maximum conversions. Mobile-optimized designs with intuitive navigation. Integrated with all essential e-commerce functionalities.",
    },
    {
      icon: BiMobile,
      title: "Headless E-Commerce",
      description:
        "Decoupled frontends with CMS flexibility. API-driven architecture for omnichannel selling. Future-proof solutions with superior performance.",
    },
    {
      icon: GoGraph,
      title: "Conversion Rate Optimization",
      description:
        "Data-driven improvements to boost your sales. A/B tested layouts and checkout flows. Reduced cart abandonment strategies.",
    },
    {
      icon: GalleryHorizontal,
      title: "Platform Migration",
      description:
        "Seamless transition to better e-commerce platforms. Zero downtime data migration. Preserved SEO rankings during transfer.",
    },
    {
      icon: IoCashOutline,
      title: "Payment Gateway Integration",
      description:
        "Secure multi-payment options for global sales. PCI-compliant checkout experiences. Recurring billing and subscription support.",
    },
    {
      icon: Box,
      title: "Inventory Management",
      description:
        "Real-time stock tracking across channels. Automated purchase order generation. Barcode and warehouse integration.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "E-Commerce Success Stories",
    subtitle: "How we've helped businesses scale their online sales",
  },
  paraContent: [
    {
      heading: "Fashion Retailer: 120% Revenue Growth",
      text: "Custom Shopify Plus store with AR try-on features increased average order value",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    },
    {
      heading: "B2B Wholesale: 80% Order Automation",
      text: "Custom WooCommerce solution with tiered pricing and bulk ordering",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      heading: "Subscription Box: 300% Subscriber Growth",
      text: "Recurring payment system with personalized recommendation engine",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "Global Brand: 50% Checkout Conversion",
      text: "Streamlined international checkout with localized payment methods",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 75,
      text: "E-commerce stores launched across industries",
    },
    {
      number: 40,
      text: "Average percentage increase in conversion rates",
    },
  ],
};

const detailcontent = [
  {
    title: "Why Custom E-Commerce Development Matters",
    description:
      "Generic e-commerce platforms often restrict your growth with inflexible templates and limited functionality. Custom development puts you in full control of your user experience, brand identity, and unique features tailored to your audience. By focusing on strategic UX design and performance optimization, we build stores that convert three to five times better than typical template-based sites. This approach turns your online store into a strong competitive advantage rather than just another generic shop. Custom solutions allow seamless integration with marketing tools, analytics, and backend systems that scale as your business grows. Security, speed, and mobile responsiveness are also prioritized for an outstanding shopping experience. Ultimately, a tailored e-commerce store sets you apart and drives sustainable growth. We help you capture your market with a solution that fits your exact needs.",
  },
  {
    title: "The Complete E-Commerce Solution",
    description:
      "Our comprehensive approach covers every element required to launch and scale a successful online store. We start with strategic planning tailored to your target market and business goals. Our custom designs reflect your brand identity and focus on high-converting product pages to maximize sales. Secure and smooth checkout flows ensure customer trust and reduce cart abandonment. On the backend, we develop management systems that streamline inventory, orders, and customer data. Marketing integrations empower targeted campaigns and automation. We also provide ongoing optimization and maintenance to keep your store performing at its best as your business evolves. This end-to-end solution ensures your e-commerce platform drives sales from day one and continues to grow efficiently.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Our E-Commerce Tech Stack",
  description: `Our technology stack leverages the best platforms and tools to deliver flexible, scalable e-commerce solutions. We work with Shopify Plus, WooCommerce, Magento, and BigCommerce to suit businesses of all sizes and needs. Frontend development is powered by React, Vue.js, and Next.js, enabling dynamic and responsive user interfaces. On the backend, we use Node.js, Laravel, and .NET to build robust server-side systems and APIs. Content management is handled through headless CMS options like Contentful, Sanity, and Storyblok for seamless content delivery. We integrate powerful search engines such as Algolia and ElasticSearch to provide fast, relevant product discovery. Payment processing is secured and streamlined with Stripe, PayPal, and Braintree. Finally, analytics tools like Google Analytics, Hotjar, and Mixpanel help you monitor user behavior and optimize performance continuously.`,
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "E-Commerce Features We Implement",
  description: `We implement a wide range of advanced features to enhance your e-commerce store’s functionality and customer experience. Product configurators and customizers allow shoppers to personalize items directly on your site. AI-powered recommendation engines help increase average order value by suggesting relevant products. Augmented and virtual reality previews provide immersive product experiences, boosting engagement and confidence. Loyalty and rewards programs encourage repeat business and customer retention. Advanced filtering and search features make product discovery easy and fast. Multi-warehouse inventory management ensures accurate stock control and efficient fulfillment. Automated tax calculation simplifies compliance with local regulations. Subscription management supports recurring revenue models. We also offer headless commerce architectures for greater flexibility and PIM system integration to centralize product data efficiently.`,
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
