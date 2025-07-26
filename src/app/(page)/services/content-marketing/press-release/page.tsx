// import HeroSectionMarketing from '@/components/digital-marketing/HeroSectionMarketing'
import React from "react";
import {
  Zap,
  BarChart,
  FileText,
  Newspaper,
  Search,
  Share2,
  TrendingUp,
  DollarSign,
  Users,
  Award,
  Globe,
  MapPin,
  FactoryIcon,
} from "lucide-react";

import Services from "@/components/common-components/Services";
// import WorkExperiances from '@/components/common-components/WorkExperiances'
import DetailContent from "@/components/common-components/DetailContent";
import HeroSectionContentMarketing from "@/components/content-marketing/HeroSectionContentMarketing";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import WorkExperiances from "@/components/common-components/WorkExperiances";

const HeroSectionContent = {
  fheading: "Newsworthy Press Releases That",
  sheading: "Get Media Attention",
  subheading:
    "Professionally crafted press releases that capture journalist interest, boost brand visibility, and drive meaningful coverage across media outlets.",
  list: [
    {
      Icon: Newspaper,
      text: "AP Style Formatting",
    },
    {
      Icon: Search,
      text: "SEO-Optimized",
    },
    {
      Icon: Share2,
      text: "Distribution Network",
    },
    {
      Icon: Zap,
      text: "24-48 Hour Turnaround",
    },
  ],
  fbutton: {
    link: "/order-press-release",
    name: "Get a Press Release",
  },
  sbutton: {
    link: "/samples",
    name: "View Samples",
  },
};

const servicesContent = {
  titles: {
    title: "Our Press Release Services",
    subtitle:
      "Comprehensive press release solutions from writing to distribution for maximum media impact.",
  },
  services: [
    {
      icon: FileText,
      title: "Standard Press Releases",
      description:
        "Traditional news announcements formatted in AP style for media pickup (400-600 words).",
    },
    {
      icon: TrendingUp,
      title: "SEO Press Releases",
      description:
        "Optimized releases with strategic keywords for both media and search visibility.",
    },
    {
      icon: DollarSign,
      title: "Financial Announcements",
      description:
        "SEC-compliant releases for earnings reports, IPOs, and corporate developments.",
    },
    {
      icon: Users,
      title: "Event Announcements",
      description:
        "Compelling releases for product launches, grand openings, and special events.",
    },
    {
      icon: Award,
      title: "Award Announcements",
      description:
        "Professional recognition releases that highlight achievements and milestones.",
    },
    {
      icon: Globe,
      title: "National Distribution",
      description:
        "Distribution to major news outlets, industry publications, and newswires.",
    },
    {
      icon: MapPin,
      title: "Local Media Targeting",
      description:
        "Hyper-local distribution to regional newspapers, TV, and radio stations.",
    },
    {
      icon: FactoryIcon,
      title: "Trade Media Placement",
      description:
        "Targeted distribution to niche industry publications and journalists.",
    },
    {
      icon: BarChart,
      title: "Media Monitoring",
      description:
        "Tracking and reporting on pickup, mentions, and coverage results.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Press Release Success Stories",
    subtitle:
      "How our professionally crafted releases have generated meaningful media coverage for clients.",
  },
  paraContent: [
    {
      heading: "Tech Startup: Featured in 15+ Outlets",
      text: "Product launch release secured coverage in TechCrunch, Wired, and industry blogs.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "Nonprofit: 300% More Donations",
      text: "Annual report release led to features in local TV and newspaper coverage.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
      heading: "Healthcare: National TV Coverage",
      text: "Medical breakthrough announcement featured on national morning shows.",
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80",
    },
    {
      heading: "Franchise: 20 Local News Features",
      text: "Grand opening campaign secured coverage in all target markets.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 1200,
      text: "Press releases distributed with 92% media pickup rate",
    },
    {
      number: 500,
      text: "Journalist relationships in our media network",
    },
  ],
};

const detailcontent = [
  {
    title: "Why Professional Press Releases Matter",
    description:
      "Press releases are more than announcements—they’re opportunities to shape perception and earn media trust. Companies that invest in professionally written releases receive 3X more coverage, simply because journalists pay attention to well-structured, newsworthy stories. Our PR experts write in AP style, include strong quotes, and develop timely, engaging angles that hook reporters. Whether it’s a product launch, executive hire, or data-driven insight, we help you tell it in a way that drives coverage. We don’t just inform—we spark media interest, build credibility, and put your brand in front of the right audiences.",
  },
  {
    title: "The High Cost of Poor Press Releases",
    description:
      "Most press releases end up in the trash—and it's usually because they read like ads, not news. Journalists are flooded with generic, over-promotional content that lacks story value. That’s why 90% of press releases go unpublished. We flip the script by uncovering the real story behind your announcement and crafting headlines that demand attention. Our team formats every release to meet newsroom standards and ensures it reaches the right reporters through a targeted distribution strategy. The result? Greater media visibility, stronger backlinks, and real ROI from every release.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  heading: "Media-Ready Writing",
  description:
    "Journalists don’t rewrite releases—they publish the ones that are ready. That’s why we write every piece to newsroom standards: clean AP style formatting, clear headlines, strong intros, and impactful quotes. We ensure each release includes all the essentials—relevant media assets, contact info, and a well-structured narrative. It’s not fluff—it’s credible, news-ready content designed to get published, not passed over.",
};

const leftSideContent = {
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  heading: "Strategic Distribution",
  description:
    "A great press release needs the right eyes. We start by building media lists tailored to your niche—tech, local, B2B, or beyond. Then we distribute via trusted newswire services like PR Newswire, ensuring it reaches verified outlets. From niche blogs to national media, our approach includes vertical placement, regional targeting, and direct reporter pitching. Every distribution is tracked, followed up, and optimized for maximum exposure.",
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
