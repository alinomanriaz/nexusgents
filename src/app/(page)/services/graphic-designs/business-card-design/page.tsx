import HeroSection from "@/components/graphic-designing/HeroSection";
import React from "react";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";
import {
  Briefcase,
  Globe,
  Palette,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

const heroSectionContent = {
  title: "Memorable Business Cards That Make Lasting Impressions",
  button: {
    name: "Design My Card",
    link: "/business-card-design",
  },
  description:
    "Strategic business card designs that communicate your brand identity, enhance professional credibility, and ensure you stand out from the competition.",
  client: [
    {
      count: 1000,
      des: "Business cards designed for professionals",
    },
    {
      count: 95,
      des: "Client satisfaction rate with our designs",
    },
  ],
  bannerImage:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Business Card Design Services",
    subtitle:
      "Custom card designs that reflect your professional brand identity",
  },
  services: [
    {
      icon: Briefcase,
      title: "Standard Business Cards",
      description:
        "Classic designs with modern touches for everyday professional use",
      features: [
        "Bleed-Edge Design",
        "Premium Paper Stocks",
        "Spot Color Options",
        "Quick Turnaround",
      ],
    },
    {
      icon: Zap,
      title: "Premium Business Cards",
      description: "Luxury cards with special finishes that make a statement",
      features: [
        "Foil Stamping",
        "Spot UV Coating",
        "Embossing/Debossing",
        "Unique Die-Cuts",
      ],
    },
    {
      icon: Smartphone,
      title: "Digital Business Cards",
      description: "Interactive NFC/vCard solutions for the digital age",
      features: [
        "NFC Chip Integration",
        "QR Code Solutions",
        "vCard Compatibility",
        "Analytics Tracking",
      ],
    },
    {
      icon: Users,
      title: "Corporate Sets",
      description: "Cohesive designs for entire teams and organizations",
      features: [
        "Brand Consistency",
        "Department Variations",
        "Bulk Order Discounts",
        "Templated System",
      ],
    },
    {
      icon: Palette,
      title: "Creative Concepts",
      description: "Innovative designs that break the mold",
      features: [
        "Unique Shapes",
        "Interactive Elements",
        "Mixed Materials",
        "Conversation-Starters",
      ],
    },
    {
      icon: Globe,
      title: "Multilingual Cards",
      description: "Designs accommodating multiple languages",
      features: [
        "Bilingual Layouts",
        "Cultural Considerations",
        "International Standards",
        "Localized Versions",
      ],
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Business Card Success Stories",
    subtitle:
      "How our designs have helped professionals make better connections",
  },
  paraContent: [
    {
      heading: "Tech CEO: 300% More Follow-Ups",
      text: "Innovative card with NFC chip increased post-meeting engagement",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      heading: "Law Firm: Enhanced Professional Image",
      text: "Premium embossed cards elevated firm's prestige perception",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    },
    {
      heading: "Startup: 50% More Investor Recall",
      text: "Unique die-cut design made company more memorable",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    },
    {
      heading: "Sales Team: 35% More Referrals",
      text: "Redesigned cards with clear value proposition improved networking results",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 24,
      text: "Hours average turnaround time for digital proofs",
    },
    {
      number: 14,
      text: "Specialty finishes available for premium cards",
    },
  ],
};

const detailcontent = [
  {
    title: "Why Professional Business Card Design Matters",
    description:
      "A business card is more than just contact information—it's often your first impression. In a world where brand image matters, a professionally designed card signals credibility and attention to detail. Our design approach blends strategic branding with visual appeal to create cards that capture your essence and leave a mark. Every element—from typography to color—aligns with your identity and industry. We don’t just make it look good; we ensure it communicates your value clearly. Whether minimal or bold, your card becomes a conversation starter. It’s a small format with big potential, and we make every square inch count.",
  },
  {
    title: "The Hidden Costs of Generic Business Cards",
    description:
      "Generic business cards might save time, but they often cost you opportunities. Poor layouts, forgettable visuals, and thin materials signal a lack of professionalism. We elevate your presence by designing cards that feel personal, intentional, and premium. Our team ensures perfect balance between form and function—maximizing impact without sacrificing readability. From carefully structured information to premium stock selection, every decision is made with purpose. We fine-tune the visual hierarchy so your name, title, and contact details are immediately clear. With high-end print finishes and pixel-perfect setup, your card won’t just get noticed—it’ll get remembered.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  heading: "Strategic Design Elements",
  description:
    "Our business card designs are built on principles of clarity, consistency, and brand alignment. We craft a clear visual hierarchy to guide the viewer’s eye across your contact details, title, and brand mark. On-brand color schemes and readable typography ensure your card remains legible and stylish. Strategic use of white space keeps layouts clean and modern. Optional elements like QR codes or NFC chips can add interactivity and function. Each file is prepared to exact print specifications, ensuring flawless production. The result is a professional card that feels as sharp as your elevator pitch.",
};

const leftSideContent = {
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  heading: "Premium Production Options",
  description:
    "Your business card should feel as good as it looks. We offer a curated selection of production upgrades to match your brand personality. Choose from elegant linen textures or ultra-thick cardstocks for that tactile impression. Finish options include matte, gloss, soft-touch, and uncoated styles to suit every aesthetic. Add luxury with foil stamping, spot UV, or embossing for a premium touch. Our eco-friendly selections include recycled paper and soy-based inks for brands that prioritize sustainability. For tech-forward professionals, we also provide NFC-enabled cards for contactless sharing. Every card is produced with exacting quality standards.",
};

const page = () => {
  return (
    <div className="w-full space-y-20 mb-20">
      <HeroSection content={heroSectionContent} />
      <Services content={servicesContent} />
      <LeftImageWithContent content={rightSideContent} />
      <RightImageWithContent content={leftSideContent} />
      <WorkExperiances content={workExperienceContent} />
      <DetailContent content={detailcontent} />
    </div>
  );
};

export default page;
