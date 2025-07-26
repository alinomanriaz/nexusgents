import React from "react";
import HeroSection from "@/components/web-developement/HeroSection";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";

import { FaReact, FaSyncAlt, FaBolt } from "react-icons/fa";
import { MdDevices, MdSecurity } from "react-icons/md";
import { BiMobileVibration } from "react-icons/bi";

const heroContent = {
  tag: "React Native Experts",
  title: "Build Cross-Platform",
  colortitle: "Mobile Apps",
  subtitle:
    "High-performance React Native applications that run seamlessly on iOS and Android with a single codebase, saving time and resources.",
  button: {
    name: "See Our Apps",
    link: "https://dev-ale.vercel.app/react-native",
  },
  image:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our React Native Services",
    subtitle: "Write once, run everywhere—without compromising quality",
  },
  services: [
    {
      icon: FaReact, // React logo
      title: "React Native Development",
      description:
        "Cross-platform apps with TypeScript, modern hooks, and performance-optimized architectures (80-100% code reuse).",
    },
    {
      icon: MdDevices, // Multiple devices icon
      title: "iOS & Android Deployment",
      description:
        "App Store and Play Store publishing with platform-specific optimizations for each ecosystem.",
    },
    {
      icon: FaSyncAlt, // Sync icon
      title: "Backend Integration",
      description:
        "Seamless connectivity with REST/GraphQL APIs, Firebase, or custom backends with offline-first support.",
    },
    {
      icon: FaBolt, // Performance icon
      title: "Performance Optimization",
      description:
        "Bridging bottlenecks fixes, Hermes engine, JSI modules, and native thread optimizations.",
    },
    {
      icon: MdSecurity, // Security icon
      title: "Security Hardening",
      description:
        "Biometric auth, encrypted storage, certificate pinning, and obfuscation for production apps.",
    },
    {
      icon: BiMobileVibration, // Mobile features icon
      title: "Native Module Integration",
      description:
        "Custom native modules (Swift/Kotlin) for hardware features like Bluetooth, camera, or sensors.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "React Native Success Stories",
    subtitle: "Cross-platform apps that outperform native",
  },
  paraContent: [
    {
      heading: "E-commerce App: 95% Code Reuse",
      text: "iOS/Android app with shared cart, payments, and AR product previews using React Native + Native Modules",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
    },
    {
      heading: "Social App: 500K Downloads",
      text: "Cross-platform feed with real-time updates, WebSocket connections, and offline caching",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    },
    {
      heading: "Fitness App: 60 FPS Animations",
      text: "Workout tracker with Reanimated 2 and native sensor integrations",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    },
    {
      heading: "Enterprise App: 2-Week Launch",
      text: "Internal tool deployed to 1K+ employees on both platforms simultaneously",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 90,
      text: "React Native apps shipped",
    },
    {
      number: 85,
      text: "Average code reuse across platforms",
      isPercentage: true,
    },
  ],
};

const detailcontent = [
  {
    title: "Why Choose React Native?",
    description:
      "React Native offers the best balance between native app performance and development efficiency, making it ideal for a wide range of projects. It allows for 80-100% code reuse between iOS and Android, significantly reducing development time and cost. With the JavaScript Interface (JSI), apps achieve near-native performance and smoother user interactions. Hot reload capabilities accelerate development cycles by enabling instant preview of code changes. Developers gain easy access to native device APIs, ensuring apps feel truly native to users. Supported by Meta and a vibrant community, React Native continues to evolve rapidly. This ecosystem ensures ongoing improvements, support, and a wealth of resources. For startups and enterprises alike, React Native offers a cost-effective yet powerful solution to build high-quality mobile apps.",
  },
  {
    title: "Beyond Basic Cross-Platform Apps",
    description:
      "We push React Native beyond the basics by implementing advanced features that elevate app performance and user experience. This includes creating custom native modules to tap into device capabilities that go beyond default APIs. Leveraging TurboModules and the new Fabric architecture, we optimize rendering and responsiveness. Complex animations are powered by Reanimated 2 and 3, delivering smooth 60 FPS experiences. We employ native navigation libraries like Wix and React Navigation to ensure seamless and intuitive app flows. Our apps adopt offline-first architectures, ensuring functionality even without constant internet access. Performance is further boosted by optimizing with the Hermes JavaScript engine. Additionally, platform-specific UI refinements ensure apps look polished and feel native on both iOS and Android devices.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  heading: "Our React Native Stack",
  description: `Our React Native stack combines the latest technologies to deliver high-quality cross-platform apps efficiently. At its core, we use React Native 0.72+ paired with TypeScript for robust, type-safe development. State management is handled with Redux Toolkit and Zustand, enabling scalable and maintainable codebases. Navigation is powered by React Navigation, providing smooth and intuitive user journeys. Styling combines React Native’s StyleSheet with Tailwind RN for rapid, consistent design. For animations, we rely on Reanimated 3 to deliver fluid motion and interactions. Database needs are met with WatermelonDB and Realm, supporting offline capabilities and fast data access. Testing is comprehensive with Detox and Jest, while CI/CD pipelines utilize Fastlane and Bitrise to automate builds and deployments. Sentry monitoring ensures app stability and quick issue resolution in production.`,
};

const leftSideContent = {
  image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
  heading: "Key Capabilities",
  description: `Our React Native expertise covers a wide range of advanced capabilities tailored to modern app requirements. We enable seamless iOS and Android code sharing to accelerate development without compromising quality. Integration with native modules extends device functionality including biometric authentication, camera and photo processing, Bluetooth and BLE connectivity. Our apps maintain a smooth 60 FPS animation performance for a polished user experience. Offline-first sync ensures users have access to their data anytime, even without network connectivity. We implement push notifications, in-app purchases, deep linking, and splash screens to enhance engagement and usability. Accessibility, dark mode, and localization are baked in to make apps inclusive and globally ready. Every app is optimized for performance, reliability, and a native feel across platforms.`,
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
