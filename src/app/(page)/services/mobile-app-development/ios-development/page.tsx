import React from "react";
import HeroSection from "@/components/web-developement/HeroSection";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";

import { FaApple, FaAppStoreIos, FaSyncAlt, FaBolt } from "react-icons/fa";

import { IoWatchOutline } from "react-icons/io5";

import { MdSecurity } from "react-icons/md";

const heroContent = {
  tag: "iOS Development Experts",
  title: "Build Premium",
  colortitle: "iOS Applications",
  subtitle:
    "Native iOS apps with Swift that deliver exceptional user experiences, flawless performance, and seamless Apple ecosystem integration.",
  button: {
    name: "See Our Apps",
    link: "https://dev-ale.vercel.app/ios",
  },
  image:
    "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our iOS Development Services",
    subtitle: "End-to-end solutions for the Apple ecosystem",
  },
  services: [
    {
      icon: FaApple, // Apple logo
      title: "Native iOS Development",
      description:
        "SwiftUI and UIKit apps with Combine, Core Data, and modern Swift conventions for premium user experiences.",
    },
    {
      icon: FaAppStoreIos, // App Store icon
      title: "App Store Deployment",
      description:
        "App Store optimization, TestFlight management, and in-app purchase/subscription implementations.",
    },
    {
      icon: MdSecurity, // Security icon
      title: "Privacy & Security",
      description:
        "Face ID/Touch ID auth, Keychain Services, data encryption, and App Attest implementation.",
    },
    {
      icon: FaSyncAlt, // Sync icon
      title: "Offline-First Solutions",
      description:
        "Core Data/Realm implementations with CloudKit sync and conflict resolution strategies.",
    },
    {
      icon: FaBolt, // Performance icon
      title: "Performance Tuning",
      description:
        "Instruments optimization, memory management, and Metal acceleration for graphics-heavy apps.",
    },
    {
      icon: IoWatchOutline, // Watch icon
      title: "Apple Ecosystem Apps",
      description:
        "watchOS, iPadOS, macOS, and CarPlay versions with shared Swift codebase.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "iOS Success Stories",
    subtitle: "Crafting exceptional Apple ecosystem experiences",
  },
  paraContent: [
    {
      heading: "Health App: Featured by Apple",
      text: "HealthKit integrated fitness tracker with Activity Rings synchronization",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    },
    {
      heading: "Banking App: 100% Uptime",
      text: "Financial app with Face ID authentication and Apple Pay integration",
      image:
        "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=800&q=80",
    },
    {
      heading: "AR Retail: 35% Sales Increase",
      text: "ARKit shopping experience with RealityKit 3D product previews",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
    },
    {
      heading: "Medical App: HIPAA Compliant",
      text: "Secure health records app with CareKit and ResearchKit integrations",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 75,
      text: "App Store published apps",
    },
    {
      number: 4.9,
      text: "Average App Store rating",
      isDecimal: true,
    },
  ],
};

const detailcontent = [
  {
    title: "Why Native iOS Development?",
    description:
      "Native iOS development ensures the highest level of performance, reliability, and user experience by using Apple’s official tools and languages like Swift and Objective-C. It allows deep integration with iOS-specific features such as Face ID, ARKit, and Siri, unlocking the full potential of the device hardware and software. Native apps offer faster load times, smoother animations, and better responsiveness compared to cross-platform alternatives. They also provide seamless access to Apple’s ecosystem, including iCloud, Apple Pay, and the App Store’s latest capabilities. With native development, updates and new iOS versions are supported promptly and reliably. Security features are stronger thanks to Apple’s built-in protections. Overall, native iOS apps deliver a polished, future-proof experience that maximizes user satisfaction and engagement. For quality and longevity, native iOS development is the smart choice.",
  },
  {
    title: "Beyond Basic iOS Apps",
    description:
      "We build iOS apps that go beyond the basics, combining innovation, scalability, and seamless user experiences. Our apps feature advanced functionalities like AR experiences with ARKit, machine learning with Core ML, and voice control via SiriKit. We design for smooth offline access, real-time syncing through iCloud, and robust security with biometric authentication. Custom integrations with third-party services and APIs create versatile, connected ecosystems. With attention to sleek design, performance optimization, and continuous updates, our apps deliver lasting value. Whether launching an MVP or a complex enterprise solution, we push the boundaries of what iOS apps can do. Your vision inspires cutting-edge apps tailored to Apple’s ecosystem. Expect more than basic — expect brilliance.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  heading: "Our iOS Stack",
  description: `Our iOS stack is built on modern, scalable technologies that deliver high-performance, native iOS apps. We use Swift and SwiftUI for clean, efficient code and smooth, responsive interfaces. Xcode and Instruments power our development and performance profiling, while Combine and Core Data manage reactive data flows and local storage. For advanced features, we integrate ARKit, Core ML, SiriKit, and HealthKit. Networking is handled using Alamofire or native URLSession, with secure communication via SSL pinning. CI/CD is streamlined through tools like Fastlane and GitHub Actions. Rigorous testing is done with XCTest and XCUITest to ensure stability. Our stack is optimized to build fast, secure, and future-proof apps for the Apple ecosystem.`,
};

const leftSideContent = {
  image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
  heading: "iOS Features We Build",
  description: `We craft iOS apps packed with powerful, user-focused features that elevate performance and experience. From Face ID and Touch ID authentication to Siri integration and Apple Pay, we build for seamless functionality. Our apps support real-time data syncing with iCloud, smooth Handoff between Apple devices, and push notifications that drive engagement. We leverage Swift and SwiftUI to build fast, responsive, and beautifully designed interfaces. Features like in-app purchases, ARKit for augmented reality, and Core ML for machine learning add smart capabilities. Battery optimization, offline access, and smooth animations are built-in standards. We also ensure App Store compliance and smooth updates with CI/CD pipelines. Every feature we build is optimized for Apple’s ecosystem—secure, intuitive, and future-ready.`,
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
