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
  tag: "WordPress Experts",
  title: "Build Your High-Performing",
  colortitle: "WordPress Website",
  subtitle:
    "Custom WordPress solutions that engage visitors and scale with your growing business needs.",
  button: {
    name: "See WordPress Work",
    link: "https://dev-ale.vercel.app/wordpress",
  },
  image:
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our WordPress Development Services",
    subtitle: "Complete solutions for websites of all sizes",
  },
  services: [
    {
      icon: IoStorefront,
      title: "WordPress Website Development",
      description:
        "Custom-designed websites with premium themes or completely custom builds. Mobile-first responsive designs with optimal performance. SEO-optimized for better visibility.",
    },
    {
      icon: Rocket,
      title: "Enterprise WordPress",
      description:
        "High-performance solutions for large-scale websites. Custom plugins and multisite networks. Scalable architecture for high-traffic demands.",
    },
    {
      icon: Puzzle,
      title: "Plugin Development",
      description:
        "Custom WordPress plugins to extend your website's functionality. Secure, efficient code tailored to your specific business requirements.",
    },
    {
      icon: CgArrowsExchange,
      title: "Theme Customization",
      description:
        "Tailored modifications to existing WordPress themes. Custom widgets and templates without performance penalties. Brand-specific designs.",
    },
    {
      icon: CloudLightning,
      title: "Performance Optimization",
      description:
        "Speed enhancements through caching, CDN integration, and code optimization. Database optimization and image compression.",
    },
    {
      icon: Globe,
      title: "Multilingual Solutions",
      description:
        "WPML and Polylang implementations. RTL language support. Localized content strategies.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "WordPress Success Stories",
    subtitle: "How we've helped businesses succeed with WordPress",
  },
  paraContent: [
    {
      heading: "News Portal: 300% Traffic Increase",
      text: "Custom WordPress theme with advanced content organization and ad management",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    },
    {
      heading: "E-Learning Platform: 50K Active Users",
      text: "Custom LMS plugin development with membership features",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    },
    {
      heading: "Corporate Site: 0.5s Load Time",
      text: "Optimized WordPress installation with custom caching solution",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      heading: "Global NGO: 15 Language Sites",
      text: "WordPress multisite with synchronized content across languages",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 200,
      text: "WordPress websites launched across industries",
    },
    {
      number: 95,
      text: "Average Google PageSpeed score for our sites",
    },
  ],
};

const detailcontent = [
  {
    title: "Why Choose WordPress Development",
    description:
      "WordPress powers 43% of all websites worldwide, making it one of the most flexible and robust platforms available. Our deep WordPress expertise ensures your website not only looks professional but also outperforms competitors in speed and functionality. We build sites with rock-solid stability that benefit from automatic updates and seamless security patches. Thousands of plugins are available to add any feature you might need, all while maintaining complete control over your content. With our professional maintenance, your website stays secure and up-to-date. This results in a highly reliable online presence that grows with your business. Our custom solutions give you peace of mind knowing your site is future-proof and scalable. Partner with us for a WordPress site that truly works for you.",
  },
  {
    title: "Beyond Basic WordPress Templates",
    description:
      "While default WordPress themes may suffice for simple sites, serious businesses require custom development to stand out and scale. We design truly unique websites that perfectly reflect your brand identity and business goals. Our custom functionality avoids plugin bloat, resulting in faster load times and smoother user experiences. Code is meticulously optimized to load instantly on all devices, boosting engagement and SEO. We tailor solutions for ecommerce stores, membership sites, or business directories, ensuring your specific needs are met. Our architecture supports high traffic volumes, handling spikes during promotions or events without downtime. Every site is built with scalability and performance in mind. Let us help you create a powerful, custom WordPress experience that grows with your business.",
  },
];

const rightSideContent = {
  image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  heading: "Our WordPress Tech Stack",
  description:
    "We build WordPress sites using a powerful and versatile tech stack. Our theme choices include Astra, GeneratePress, or fully custom-built themes tailored to your brand. We utilize popular page builders like Elementor, Gutenberg, and Oxygen for flexible design and easy content updates. Our development stack includes PHP, JavaScript, and React to deliver dynamic, interactive experiences. MySQL databases are optimized for performance and reliability. We implement caching with Redis and Memcached to ensure fast page loads. Security is a top priority, using tools like Wordfence and Sucuri to protect your site. Hosting platforms such as WP Engine, Kinsta, and Cloudways provide scalable and reliable infrastructure. For ecommerce, we rely on WooCommerce and Easy Digital Downloads for seamless online stores.",
};

const leftSideContent = {
  image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
  heading: "WordPress Features We Build",
  description:
    "Our WordPress development services include creating custom post types and taxonomies for better content management. We build advanced custom fields solutions to extend site functionality tailored to your needs. Membership and subscription systems are designed to support recurring revenue models. Ecommerce marketplaces are built for seamless buying and selling experiences. Learning Management Systems (LMS) enable online education and training. Multisite networks allow managing multiple sites from one dashboard. REST API integrations connect WordPress with other applications for enhanced workflows. Headless WordPress setups deliver fast, decoupled frontend experiences. We create real-time data dashboards for insightful analytics. Custom Gutenberg blocks provide unique editing options for content creators.",
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
