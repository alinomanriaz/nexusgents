import HeroSectionMarketing from "@/components/digital-marketing/HeroSectionMarketing";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import {
  FaAsterisk,
  FaCalendarAlt,
  FaChartBar,
  FaChartLine,
  FaDatabase,
  FaEnvelope,
  FaListAlt,
  FaMousePointer,
  FaPenFancy,
  FaShoppingCart,
  FaSitemap,
  FaTags,
} from "react-icons/fa";

const heroSectionContent = {
  fWord: "EMAIL",
  Ficon: FaEnvelope,
  Sicon: FaChartLine,
  Thicon: FaMousePointer,
  SWord: "MARKETING",
  Text: "THAT DRIVES REPEAT BUSINESS",
  subheading:
    "Turn subscribers into loyal customers. We build high-converting email strategies that nurture leads, recover abandoned carts, and boost lifetime value—with measurable ROI.",
  Fbuttons: {
    link: "/contact",
    name: "Get a Free Audit",
  },
  Sbuttons: {
    link: "#services",
    name: "See Campaign Examples",
  },
};
const servicesContent = {
  titles: {
    title: "Our Email Marketing Services",
    subtitle:
      "End-to-end email strategies that deliver the right message to the right audience at the perfect time—automated for scale.",
  },
  services: [
    {
      icon: FaListAlt,
      title: "List Growth Strategy",
      description:
        "Opt-in form optimization, lead magnet development, and targeted acquisition campaigns to build a quality subscriber base.",
    },
    {
      icon: FaSitemap,
      title: "Automation Workflows",
      description:
        "Behavior-triggered sequences for welcome series, cart abandonment, post-purchase nurture, and re-engagement.",
    },
    {
      icon: FaPenFancy,
      title: "Copywriting & Design",
      description:
        "Persuasive email copy and mobile-responsive templates that align with your brand and drive action.",
    },
    {
      icon: FaTags,
      title: "Segmentation & Personalization",
      description:
        "Dynamic content tailored by purchase history, engagement level, and demographic data for hyper-relevance.",
    },
    {
      icon: FaShoppingCart,
      title: "E-Commerce Email Strategy",
      description:
        "Product recommendation algorithms, flash sale campaigns, and loyalty program integrations.",
    },
    {
      icon: FaCalendarAlt,
      title: "Seasonal Campaign Planning",
      description:
        "Holiday promotions, event-based triggers, and annual revenue-boosting email calendars.",
    },
    {
      icon: FaAsterisk,
      title: "A/B Testing & Optimization",
      description:
        "Subject line tests, send-time experiments, and CTA placement analysis to maximize open/click rates.",
    },
    {
      icon: FaDatabase,
      title: "CRM & ESP Migration",
      description:
        "Seamless transitions between email service providers with list hygiene and template rebuilding.",
    },
    {
      icon: FaChartBar,
      title: "Performance Analytics",
      description:
        "Monthly reports tracking deliverability, revenue per email, and subscriber lifetime value.",
    },
  ],
};
const workExperienceContent = {
  titles: {
    title: "Email Campaign Results",
    subtitle:
      "Proven strategies that increased revenue, reduced churn, and built lasting customer relationships.",
  },
  paraContent: [
    {
      heading: "E-Commerce: 35% Revenue from Email",
      text: "Automated flows and segmentation drove $1.2M in annual email-attributed sales for a fashion brand.",
      image:
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80", // Open laptop with email analytics
    },
    {
      heading: "SaaS: 300% More Trial Conversions",
      text: "Behavioral email series increased paid conversions from free trials by 3X in 90 days.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // Dashboard with metrics
    },
    {
      heading: "Abandoned Cart: 22% Recovery Rate",
      text: "3-step SMS/email combo salvaged $450K in otherwise lost revenue last quarter.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", // Phone with notification
    },
    {
      heading: "Nonprofit: 50% Higher Donor Retention",
      text: "Personalized impact stories and donor nurture sequences improved repeat gift frequency.",
      image:
        "https://images.unsplash.com/photo-1578574577315-3fb0960f61d0?w=800&q=80", // Hands typing
    },
  ],
  countContent: [
    {
      number: 42,
      text: "Average percentage increase in email revenue for clients within 6 months.",
    },
    {
      number: 5,
      text: "Revenue generated for every $1 spent on email marketing (industry average).",
    },
  ],
};
const detailcontent = [
  {
    title: "Why Email Delivers the Highest Marketing ROI",
    description:
      "Email generates $42 for every $1 spent—the highest return of any channel. Unlike social media algorithms, you own your subscriber list and control the delivery. Our strategies focus on permission-based nurturing that educates, entertains, and converts. From automated behavioral triggers to segmented broadcast campaigns, we ensure every email drives measurable business value while strengthening customer relationships.",
  },
  {
    title: "The Cost of Poor Email Practices",
    description:
      "Generic blasts, inconsistent sending, and weak CTAs sabotage results. 21% of emails never reach the inbox due to deliverability issues. We audit your current program to fix list hygiene, spam risks, and engagement gaps—then implement a phased strategy that systematically increases opens, clicks, and conversions. The result? A self-sustaining revenue channel that performs 24/7.",
  },
];
const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Automation That Feels Human",
  description: `Behavioral emails sent at the perfect moment perform 3X better than generic campaigns. We design workflows that respond to user actions—like browsing specific products or abandoning carts—with timely, relevant messaging. Our AI-powered subject line tools and send-time optimization further boost engagement.`,
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  heading: "Data-Driven Email Strategy",
  description: `We track micro-conversions (link clicks, scroll depth) to identify what resonates. Heatmaps and A/B tests refine every element—from preheader text to button color—based on how your audience actually engages. Real-time dashboards show ROI per campaign and subscriber segment.`,
};

const page = () => {
  return (
    <div className="w-full space-y-20 mb-20">
      <HeroSectionMarketing content={heroSectionContent} />
      <Services content={servicesContent} />
      <LeftImageWithContent content={rightSideContent} />
      <RightImageWithContent content={leftSideContent} />
      <WorkExperiances content={workExperienceContent} />
      <DetailContent content={detailcontent} />
    </div>
  );
};

export default page;
