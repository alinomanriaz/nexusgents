import React from "react";
import HeroSection from "@/components/web-developement/HeroSection";
import Services from "@/components/common-components/Services";
import WorkExperiances from "@/components/common-components/WorkExperiances";
import DetailContent from "@/components/common-components/DetailContent";
import LeftImageWithContent from "@/components/common-components/LeftImageWithContent";
import RightImageWithContent from "@/components/common-components/RightImageWithContent";

import {
  FaAndroid,
  FaGooglePlay,
  FaShieldAlt,
  FaSyncAlt,
  FaBolt,
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";

const heroContent = {
  tag: "Android Development Experts",
  title: "Build High-Performance",
  colortitle: "Android Apps",
  subtitle:
    "Native Android applications with polished UX, robust architecture, and seamless integrations for your business growth.",
  button: {
    name: "See Our Apps",
    link: "https://dev-ale.vercel.app/android",
  },
  image:
    "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80",
};

const servicesContent = {
  titles: {
    title: "Our Android Development Services",
    subtitle: "End-to-end solutions for mobile success",
  },
  services: [
    {
      icon: FaAndroid, // Native Android icon
      title: "Native Android Development",
      description:
        "Kotlin-first apps with Jetpack components, Clean Architecture, and Material Design 3 for premium user experiences.",
    },
    {
      icon: FaGooglePlay, // Play Store icon
      title: "Play Store Optimization",
      description:
        "App store listing optimization, ASO strategies, and deployment with in-app purchases/subscriptions.",
    },
    {
      icon: FaShieldAlt, // Security icon
      title: "Security Hardening",
      description:
        "Biometric auth, data encryption, ProGuard/R8 obfuscation, and Play Integrity API implementation.",
    },
    {
      icon: FaSyncAlt, // Sync icon
      title: "Offline-First Apps",
      description:
        "Robust offline capabilities with Room DB, WorkManager, and smart synchronization strategies.",
    },
    {
      icon: FaBolt, // Performance icon
      title: "Performance Optimization",
      description:
        "Memory leak fixes, battery optimization, and rendering improvements for buttery-smooth UIs.",
    },
    {
      icon: MdDevices, // Multiple devices icon
      title: "Multi-Platform Adaptations",
      description:
        "Wear OS, Android Auto, TV, and Foldable device support with adaptive layouts.",
    },
  ],
};

const workExperienceContent = {
  titles: {
    title: "Android Success Stories",
    subtitle: "Delivering exceptional mobile experiences",
  },
  paraContent: [
    {
      heading: "Fitness Tracker: 4.9★ on Play Store",
      text: "Health app with Wear OS sync, Google Fit integration, and real-time analytics",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    },
    {
      heading: "Banking App: 99.99% Uptime",
      text: "Financial app with transaction signing, facial recognition, and PCI compliance",
      image:
        "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=800&q=80",
    },
    {
      heading: "AR Shopping: 40% Conversion Boost",
      text: "E-commerce app with AR product previews and one-tap checkout",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
    },
    {
      heading: "IoT Controller: 50ms Response Time",
      text: "Smart home management with BLE mesh networking and voice control",
      image:
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80",
    },
  ],
  countContent: [
    {
      number: 50,
      text: "Play Store published apps",
    },
    {
      number: 4.8,
      text: "Average rating across all apps",
      isDecimal: true,
    },
  ],
};

const detailcontent = [
  {
    title: "Why Native Android Development?",
    description:
      "Native Android development offers the best performance, responsiveness, and user experience tailored specifically for Android devices. By using Kotlin or Java, developers can fully leverage Android’s capabilities, including hardware access, animations, and platform-specific APIs. Native apps run faster, look smoother, and integrate more deeply with device features like GPS, camera, and sensors. They provide better offline support, battery optimization, and overall reliability. Native development also ensures faster updates with the latest Android tools and libraries. It’s ideal for building scalable, secure, and future-proof applications. With native code, you get more control over customization and performance tuning. If quality and longevity matter—native is the way to go.",
  },
  {
    title: "Beyond Basic Mobile Apps",
    description:
      "We go beyond basic mobile apps by delivering intelligent, scalable, and feature-rich solutions tailored to your business goals. Our apps integrate advanced functionalities like real-time communication, AI-driven personalization, IoT connectivity, and location-aware services. With seamless third-party integrations and custom backend systems, we create ecosystems—not just apps. Intuitive UI/UX, offline capabilities, and adaptive design ensure a smooth experience across all Android devices. We build for performance with optimized architecture, modular code, and cloud support. Security is embedded from the ground up, using the latest encryption and compliance standards. From MVPs to enterprise-grade platforms, we push boundaries with every build. Your vision deserves more than basic—we deliver bold.",
  },
];

const rightSideContent = {
  image:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  heading: "Our Android Stack",
  description: `Our Android stack is built on a robust combination of modern tools, frameworks, and technologies that power high-performance mobile apps. We leverage Kotlin and Java for clean, efficient coding, while Android Jetpack components streamline development with modular and reusable architecture. For UI/UX, we integrate Material Design principles to ensure smooth, intuitive user experiences. Our stack includes Retrofit and Room for seamless API communication and data storage, supported by advanced libraries like Glide or Coil for media handling. We prioritize performance using tools like Dagger/Hilt for dependency injection and Coroutines for asynchronous tasks. Testing frameworks like JUnit and Espresso ensure bug-free, reliable applications. With CI/CD pipelines, we deliver faster updates and better scalability. Our Android stack ensures every app we build is secure, responsive, and future-ready.`,
};

const leftSideContent = {
  image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
  heading: "Advanced Features",
  description: `Our Android development services go beyond the basics with a suite of advanced features designed for modern, high-performance apps. We implement real-time data syncing, biometric authentication, and in-app machine learning for smarter user experiences. Our apps support offline-first architecture, seamless cloud integration, and robust push notification systems. With Jetpack Compose, dynamic UIs are delivered faster and more efficiently. We integrate advanced analytics, A/B testing, and remote configuration for continuous optimization. Security is prioritized with encrypted data storage, certificate pinning, and Play Integrity APIs. Performance is enhanced with on-device profiling, baseline profiles, and crash monitoring. Every app is built to scale, adapt, and deliver long-term value.`,
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
