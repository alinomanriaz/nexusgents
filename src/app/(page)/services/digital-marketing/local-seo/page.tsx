import HeroSectionMarketing from "@/components/digital-marketing/HeroSectionMarketing";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import {
  FaBullseye,
  FaChartLine,
  FaComments,
  FaGoogle,
  FaHashtag,
  FaLink,
  FaMapMarkerAlt,
  FaMapPin,
  FaMobileAlt,
  FaPhoneAlt,
  FaSearch,
  FaVideo,
} from "react-icons/fa";

const heroSectionContent = {
  fWord: "LOCAL",
  Ficon: FaMapMarkerAlt,
  Sicon: FaSearch,
  Thicon: FaPhoneAlt,
  SWord: "DOMINATION",
  Text: "THAT DRIVES FOOT TRAFFIC & CALLS",
  subheading:
    "Get found by customers searching nearby. We optimize your online presence for local searches, Google Maps rankings, and community engagement to turn 'near me' queries into conversions.",
  Fbuttons: {
    link: "/contact",
    name: "Get a Free Local SEO Audit",
  },
  Sbuttons: {
    link: "#services",
    name: "See Local Case Studies",
  },
};
const servicesContent = {
  titles: {
    title: "Our Local SEO Services",
    subtitle:
      "Hyper-targeted strategies to dominate local search results, attract neighborhood customers, and outrank competitors in your service area.",
  },
  services: [
    {
      icon: FaGoogle,
      title: "Google Business Profile Optimization",
      description:
        "Complete GBP setup and optimization with local keywords, geo-tagged photos, Q&A management, and post scheduling to boost Map Pack rankings.",
    },
    {
      icon: FaMapPin,
      title: "Local Citations & Directory Listings",
      description:
        "Consistent NAP (Name, Address, Phone) listings across 50+ directories like Yelp, Apple Maps, and industry-specific sites to build local trust signals.",
    },
    {
      icon: FaComments,
      title: "Review Generation & Management",
      description:
        "Ethical review solicitation strategies and reputation management to maintain 4.5+ star ratings across platforms.",
    },
    {
      icon: FaHashtag,
      title: "Localized Content Strategy",
      description:
        "Neighborhood-focused blog posts, service area pages, and city/landing pages optimized for local intent keywords.",
    },
    {
      icon: FaLink,
      title: "Local Link Building",
      description:
        "Backlinks from chamber of commerce, local news sites, and community sponsorships to boost regional authority.",
    },
    {
      icon: FaMobileAlt,
      title: "Local Schema Markup",
      description:
        "Structured data implementation for businesses with multiple locations to enhance rich snippets in SERPs.",
    },
    {
      icon: FaBullseye,
      title: "Competitor Gap Analysis",
      description:
        "Identify weaknesses in competitors' local SEO to claim underserved keywords and neighborhoods.",
    },
    {
      icon: FaChartLine,
      title: "Local Rank Tracking",
      description: `Monitor rankings for zip code-specific keywords and track "near me" search performance.`,
    },
    {
      icon: FaVideo,
      title: "Local Video SEO",
      description:
        "Optimized videos showcasing your location, team, and community involvement for YouTube and Google Maps.",
    },
  ],
};
const workExperienceContent = {
  titles: {
    title: "Local SEO Success Stories",
    subtitle:
      "How we helped businesses dominate their local markets and convert nearby searchers into customers.",
  },
  paraContent: [
    {
      heading: "Dental Clinic: 300% More Local Calls",
      text: `GBP optimization + local service pages ranked #1 for 15+ "dentist near me" keywords in 6 months.`,
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80", // Dentist office
    },
    {
      heading: "Restaurant: Top 3 Map Pack Rankings",
      text: "Localized menu pages and review strategy increased walk-ins by 180% for a family-owned eatery.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", // Restaurant interior
    },
    {
      heading: "HVAC Company: 500% ROI in 90 Days",
      text: "City-specific landing pages and citation cleanup generated $250K in local service contracts.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", // Technician working
    },
    {
      heading: "Retail Store: #1 for Neighborhood Keywords",
      text: "Community-focused content and local backlinks doubled foot traffic from nearby ZIP codes.",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80", // Local shop
    },
  ],
  countContent: [
    {
      number: 95,
      text: "Average percentage of clients appearing in Google's Local Pack within 3 months.",
    },
    {
      number: 400,
      text: "Local citations built per client to establish geographic relevance.",
    },
  ],
};
const detailcontent = [
  {
    title: "Why Local SEO is Non-Negotiable for Brick-and-Mortar Businesses",
    description:
      "76% of 'near me' searches result in a visit within 24 hours. Google's local algorithm prioritizes proximity, relevance, and prominence—we optimize all three. Our strategies ensure your business appears when neighbors search for your services, with accurate hours, photos, and CTAs that drive action. Unlike national SEO, local tactics deliver immediate visibility to high-intent customers ready to buy.",
  },
  {
    title: "The Hidden Costs of Neglecting Local Listings",
    description:
      "Inconsistent NAP (Name, Address, Phone) information across directories confuses both customers and search engines, hurting rankings. A single incorrect listing can reduce local traffic by 35%. We audit and clean your digital footprint, then implement geo-specific content that signals trust to Google's local algorithm. The result? More map views, directions requests, and phone calls from your ideal local audience.",
  },
];
const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Own Your Neighborhood",
  description: `Local SEO turns your physical location into a digital advantage. We optimize for hyper-specific searches like "emergency plumber [City]" or "best coffee near [Landmark]" to capture customers at the moment of intent. Our strategies also leverage community engagement signals—local news features, event sponsorships, and neighborhood keywords—that Google rewards in local rankings.`,
};
const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  heading: "Google Business Profile = Your Digital Storefront",
  description: `Your GBP listing appears before your website in 93% of local searches. We optimize every element—from categories and attributes to Google Posts and Q&A—to maximize clicks. Our proprietary method increases "Get Directions" and "Click to Call" actions by an average of 300% for clients.`,
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
