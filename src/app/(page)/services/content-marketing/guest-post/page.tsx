// import HeroSectionMarketing from '@/components/digital-marketing/HeroSectionMarketing'
import React from "react";
import {
  PenTool,
  ShieldCheck,
  Zap,
  BarChart,
  FileText,
  Search,
  Link,
  Mail,
  Layers,
  UserCheck,
  Share2,
} from "lucide-react";

import Services from "@/components/common-components/Services";
// import WorkExperiances from '@/components/common-components/WorkExperiances'
import DetailContent from "@/components/common-components/DetailContent";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import WorkExperiances from "@/components/common-components/WorkExperiances";

const HeroSectionContent = {
  fheading: "Premium Guest Posts That",
  sheading: "Build Authority & Backlinks",
  subheading:
    "High-quality, publication-ready guest articles placed on authoritative sites in your niche to boost SEO and establish thought leadership.",
  list: [
    {
      Icon: Search,
      text: "Niche-Relevant Sites",
    },
    {
      Icon: Link,
      text: "Authoritative Backlinks",
    },
    {
      Icon: PenTool,
      text: "Expert-Level Writing",
    },
    {
      Icon: ShieldCheck,
      text: "White-Hat Only",
    },
  ],
  fbutton: {
    link: "/order-guest-posts",
    name: "Get Guest Posts",
  },
  sbutton: {
    link: "/portfolio",
    name: "See Placements",
  },
};

const servicesContent = {
  titles: {
    title: "Our Guest Post Services",
    subtitle:
      "End-to-end guest posting solutions that secure placements on high-authority websites in your industry.",
  },
  services: [
    {
      icon: Search,
      title: "Target Site Research",
      description:
        "Identification of high-DA, niche-relevant sites that accept guest posts and provide valuable backlinks.",
    },
    {
      icon: Mail,
      title: "Outreach & Negotiation",
      description:
        "Professional pitch emails and relationship building with site editors to secure placement opportunities.",
    },
    {
      icon: FileText,
      title: "Guest Article Writing",
      description:
        "Well-researched, publication-ready articles tailored to each site's audience and guidelines.",
    },
    {
      icon: Layers,
      title: "Content Adaptation",
      description:
        "Customizing content angle and style to match each publication's tone and readership.",
    },
    {
      icon: Link,
      title: "Strategic Backlinking",
      description:
        "Natural, contextual link placement that follows Google's guidelines and provides SEO value.",
    },
    {
      icon: UserCheck,
      title: "Author Bio Optimization",
      description:
        "Compelling author bios with strategic links that drive referral traffic and brand awareness.",
    },
    {
      icon: BarChart,
      title: "DA30+ Placements",
      description:
        "Focus on sites with Domain Authority 30+ for maximum SEO impact.",
    },
    {
      icon: Zap,
      title: "Fast-Turnaround Options",
      description:
        "Expedited guest post packages for time-sensitive campaigns.",
    },
    {
      icon: Share2,
      title: "Social Amplification",
      description:
        "Promotion of published guest posts through social media channels.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Guest Post Success Stories",
    subtitle:
      "How our strategic guest posting has helped clients build authority and improve search rankings.",
  },
  paraContent: [
    {
      heading: "SaaS Company: 85 Backlinks",
      text: "Secured 25 guest posts on tech publications, earning 85 quality backlinks in 6 months.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "Legal Firm: 40% Traffic Increase",
      text: "Guest posts on law blogs drove 40% more referral traffic and 12 new clients.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    },
    {
      heading: "E-commerce: Top 3 Rankings",
      text: "Strategic guest posts helped 3 product pages rank in top 3 positions.",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    },
    {
      heading: "Health Brand: DA50 Placement",
      text: "Secured guest post on major health publication (DA58) with 3 authoritative backlinks.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 500,
      text: "Guest posts published on authoritative sites",
    },
    {
      number: 95,
      text: "Client satisfaction rate with placements",
    },
  ],
};

const detailcontent = [
  {
    title: "The Power of Strategic Guest Posting",
    description:
      "Guest posting is still one of the most effective white-hat SEO strategies, helping brands grow their traffic 3.5X faster than those who ignore it. But it’s not just about backlinks—it’s about credibility. Our approach focuses on building real relationships with reputable publishers and crafting content that educates, informs, and elevates your brand. Every article is tailored to the publication’s audience, positioning you as an expert while earning high-quality, editorially placed links. The result? Long-term authority, better rankings, and increased trust from both users and search engines.",
  },
  {
    title: "Why Most Guest Posting Fails",
    description:
      "Most guest posting efforts flop because of poor targeting, generic outreach, or low-value content. Editors are flooded with pitches, and 90% get ignored for a reason. That’s where we stand apart. We start by vetting sites for quality, engagement, and relevance—not just metrics. Our outreach is personalized and built on value, not spam. And our content meets editorial standards, providing actual utility to the reader. We don’t chase links—we build partnerships. That’s how we secure placements that actually move the SEO needle.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  heading: "Quality Over Quantity",
  description:
    "In the world of guest posting, more isn't better—better is better. We focus on earning placements on sites with real audiences, editorial oversight, and topical relevance. Each post is written by subject matter experts who understand both SEO and storytelling. We integrate links naturally within content that’s crafted to inform, not just rank. Our goal is long-term SEO value, not quick wins. That’s how we build domain authority while elevating your brand’s voice in the right communities.",
};

const leftSideContent = {
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  heading: "Comprehensive Guest Post Strategy",
  description:
    "Our guest posting service is fully managed, from start to finish. First, we identify high-authority sites with engaged, niche-relevant audiences. Then, we build real relationships with editors—not just cold pitches. We craft authoritative, value-driven articles that align with each publication’s tone and standards. Every link is placed contextually to drive both SEO and referral traffic. Finally, we monitor impact—tracking performance, rankings, and visibility. It’s not just guest posting—it’s brand building through content that earns attention and authority.",
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
