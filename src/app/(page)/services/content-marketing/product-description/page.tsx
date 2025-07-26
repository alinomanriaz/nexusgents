// import HeroSectionMarketing from '@/components/digital-marketing/HeroSectionMarketing'
import React from "react";
import {
  Zap,
  BarChart,
  Box,
  Award,
  Search,
  Layers,
  List,
  Tag,
  Package,
  Globe,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";

import Services from "@/components/common-components/Services";
// import WorkExperiances from '@/components/common-components/WorkExperiances'
import DetailContent from "@/components/common-components/DetailContent";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import WorkExperiances from "@/components/common-components/WorkExperiances";

const HeroSectionContent = {
  fheading: "Compelling Product Descriptions That",
  sheading: "Sell While They Inform",
  subheading:
    "Conversion-focused product copy that highlights benefits, addresses buyer concerns, and boosts sales—written by eCommerce specialists.",
  list: [
    {
      Icon: ShoppingCart,
      text: "Increase Conversions",
    },
    {
      Icon: Search,
      text: "SEO-Optimized",
    },
    {
      Icon: Zap,
      text: "Fast Turnaround",
    },
    {
      Icon: BarChart,
      text: "Proven Formulas",
    },
  ],
  fbutton: {
    link: "/order-product-descriptions",
    name: "Order Now",
  },
  sbutton: {
    link: "/samples",
    name: "See Samples",
  },
};

const servicesContent = {
  titles: {
    title: "Our Product Description Services",
    subtitle:
      "Strategic product copy that converts browsers into buyers across all eCommerce platforms.",
  },
  services: [
    {
      icon: Box,
      title: "Basic Product Descriptions",
      description:
        "Clear, concise 50-100 word descriptions that highlight key features and benefits.",
    },
    {
      icon: Award,
      title: "Premium Enhanced Descriptions",
      description:
        "200-300 word persuasive copy with emotional triggers and conversion elements.",
    },
    {
      icon: Search,
      title: "SEO-Optimized Descriptions",
      description:
        "Search-friendly product copy that ranks while maintaining natural flow.",
    },
    {
      icon: Layers,
      title: "Product Category Pages",
      description:
        "Engaging category descriptions that guide shoppers and improve navigation.",
    },
    {
      icon: List,
      title: "Bullet Point Optimizations",
      description:
        "Scannable feature lists that address buyer questions and objections.",
    },
    {
      icon: Tag,
      title: "Product Title Optimization",
      description:
        "Keyword-rich titles that improve search visibility and click-through rates.",
    },
    {
      icon: Package,
      title: "Bundle Descriptions",
      description: "Compelling copy for product sets and special packages.",
    },
    {
      icon: Globe,
      title: "Multilingual Product Copy",
      description: "Professional translations for international markets.",
    },
    {
      icon: RefreshCw,
      title: "Description Refreshes",
      description: "Updating existing copy to improve conversions and SEO.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Product Copy That Converts",
    subtitle:
      "How our strategic product descriptions have boosted sales for eCommerce businesses.",
  },
  paraContent: [
    {
      heading: "Fashion Brand: 40% Sales Increase",
      text: "Benefit-focused descriptions increased conversions by 40% on key product pages.",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    },
    {
      heading: "Electronics: 75% Less Returns",
      text: "Detailed specs and realistic expectations reduced product returns significantly.",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
    },
    {
      heading: "Home Goods: #1 Search Rankings",
      text: "SEO-optimized descriptions helped 12 products rank #1 for target keywords.",
      image:
        "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    },
    {
      heading: "Beauty Products: 3X More Add-to-Carts",
      text: "Sensory-rich descriptions increased engagement and cart additions.",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 35,
      text: "Average percentage increase in conversions after optimization",
    },
    {
      number: 5000,
      text: "Product descriptions written for eCommerce stores",
    },
  ],
};

const detailcontent = [
  {
    title: "Why Professional Product Descriptions Matter",
    description:
      "Great product descriptions do more than describe—they sell. Professionally written copy can boost conversions by up to 30%, simply by speaking directly to your customer’s needs and desires. We focus on benefits, not just specs, and use emotional triggers, power words, and formatting that makes information easy to scan. Our eCommerce writers understand how buyers think—and what drives them to click 'Add to Cart.' From sensory language to persuasive structure, we create product pages that sell confidently, reduce returns, and strengthen brand trust.",
  },
  {
    title: "The Hidden Cost of Poor Product Copy",
    description:
      "Boring, unclear, or copied descriptions cost you sales—and credibility. In fact, 78% of online shoppers abandon product pages with weak copy. We help you fix that. Instead of vague or technical text, we craft messaging that clearly communicates what makes your product stand out. We answer buyer questions before they ask, build trust through transparency, and guide the customer toward a confident decision. Every line is optimized for humans *and* search engines—so your products not only rank but convert.",
  },
];

const rightSideContent = {
  image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
  heading: "Conversion-Focused Formulas",
  description:
    "We don’t guess—we follow tested copywriting structures built for eCommerce success. Each product description is crafted with a hook, benefit-first narrative, emotional triggers, and a strong CTA. We use bullet points, short paragraphs, and bold language that helps shoppers scan fast and decide faster. Every element, from wording to SEO integration, is designed to increase clicks and conversions.",
};

const leftSideContent = {
  image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
  heading: "Strategic eCommerce Writing",
  description:
    "Our approach goes beyond writing—it's about strategy. We optimize product pages for visibility, engagement, and post-purchase satisfaction. That means keyword-rich descriptions for search, scannable formats for ease, and honest, benefit-driven copy to reduce returns. Every product page aligns with your brand’s voice while nudging the buyer toward the sale. Whether you sell tech, fashion, or handmade goods—we tailor every word for performance.",
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
