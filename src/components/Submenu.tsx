"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BiCodeAlt,
  BiMobile,
  BiBrush,
  BiRocket,
  BiObjectsHorizontalCenter,
} from "react-icons/bi";
import { FcBullish } from "react-icons/fc";

const services = [
  {
    title: "SEO & Digital Marketing",
    icon: <BiRocket className="text-2xl text-purple-600" />,
    menu: [
      {
        submenu: "Digital Media Marketing",
        href: "/services/digital-marketing/digital-media-marketing",
      },
      {
        submenu: "Social Media Management",
        href: "/services/digital-marketing/social-media-management",
      },
      {
        submenu: "Local SEO",
        href: "/services/digital-marketing/local-seo",
      },
      {
        submenu: "Search Engine Optimization",
        href: "/services/digital-marketing/search-engine-optimization",
      },
      {
        submenu: "Email Marketing",
        href: "/services/digital-marketing/email-marketing",
      },
      {
        submenu: "Google Ads",
        href: "/services/digital-marketing/google-ads",
      },
      {
        submenu: "Youtube Ads",
        href: "/services/digital-marketing/youtube-ads",
      },
      {
        submenu: "Influencer Marketing",
        href: "/services/digital-marketing/influencer-marketing",
      },
    ],
  },
  {
    title: "Content Marketing",
    icon: <FcBullish className="text-2xl text-purple-600" />,
    menu: [
      {
        submenu: "Article Writing",
        href: "/services/content-marketing/article-writing",
      },
      {
        submenu: "Blog Post",
        href: "/services/content-marketing/blog-post",
      },
      {
        submenu: "Guest Post",
        href: "/services/content-marketing/guest-post",
      },
      {
        submenu: "Press Release",
        href: "/services/content-marketing/press-release",
      },
      {
        submenu: "Product Description",
        href: "/services/content-marketing/product-description",
      },
      {
        submenu: "Video Content",
        href: "/services/content-marketing/video-content",
      },
      {
        submenu: "Website Content",
        href: "/services/content-marketing/website-content",
      },
    ],
  },
  {
    title: "Graphic Designing",
    icon: <BiBrush className="text-2xl text-pink-600" />,
    menu: [
      {
        submenu: "Creative Designing",
        href: "/services/graphic-designs/creative-designing",
      },
      {
        submenu: "Banner Designing",
        href: "/services/graphic-designs/banner-design",
      },
      {
        submenu: "Logo Designing",
        href: "/services/graphic-designs/logo-design",
      },
      {
        submenu: "Mockup Designing",
        href: "/services/graphic-designs/mockup-design",
      },
      {
        submenu: "Booklet Designing",
        href: "/services/graphic-designs/booklet-design",
      },
      {
        submenu: "Business Card Designing",
        href: "/services/graphic-designs/business-card-design",
      },
      {
        submenu: "Product Packaging Designing",
        href: "/services/graphic-designs/product-packaging-design",
      },
      {
        submenu: "UI-UX Designing",
        href: "/services/graphic-designs/ui-ux-design",
      },
    ],
  },
  {
    title: "Web Development",
    icon: <BiCodeAlt className="text-2xl text-blue-600" />,
    menu: [
      {
        submenu: "E-Commerce web design",
        href: "/services/web-development/e-commerce",
      },
      {
        submenu: "Custom web developement ",
        href: "/services/web-development/custom-development",
      },
      {
        submenu: "Wordpress web developement",
        href: "/services/web-development/wordpress-development",
      },
      {
        submenu: "Shopify web developement",
        href: "/services/web-development/shopify-development",
      },
      {
        submenu: "Software developement",
        href: "/services/web-development/software-development",
      },
    ],
  },
  {
    title: "Mobile Apps",
    icon: <BiMobile className="text-2xl text-green-600" />,
    menu: [
      {
        submenu: "Android app developement ",
        href: "/services/mobile-app-development/android-development",
      },
      {
        submenu: "iOS app developement",
        href: "/services/mobile-app-development/ios-development",
      },
      {
        submenu: "React-Native developement",
        href: "/services/mobile-app-development/react-native-development",
      },
    ],
  },
  {
    title: "Other",
    icon: <BiObjectsHorizontalCenter className="text-2xl text-purple-600" />,
    menu: [
      {
        submenu: "Brand Activation ",
        href: "/services/other/brand-activation",
      },
      {
        submenu: "Company Profile Development",
        href: "/services/other/company-profile-development",
      },
      {
        submenu: "Printing Packaging",
        href: "/services/other/printing-packaging",
      },
      {
        submenu: "Professional CV Development",
        href: "/services/other/professional-cv-development",
      },
    ],
  },
];

interface SubmenuServicesProps {
  close: () => void;
}

const Submenu: React.FC<SubmenuServicesProps> = ({ close }) => {
  return (
    <div className="hidden md:flex absolute inset-0 top-16 justify-center z-20">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        onMouseLeave={close}
        className="bg-white dark:bg-transparent backdrop-blur-2xl w-[95%] h-fit rounded-lg shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 p-6 "
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 ">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-transparent dark:hover:ring-gray-600/20 dark:hover:ring-1 transition"
            >
              <div className="mb-2">{item.icon}</div>
              <div className="font-bold cursor-default text-xl mb-3 text-gray-900 dark:text-white group-hover:text-blue-600">
                {item.title}
              </div>
              {item.menu?.map((data, index) => (
                <Link
                  onClick={close}
                  href={`${data.href}`}
                  key={index}
                  className="hover:border-l-3 border-blue-500 hover:pl-3 w-full text-sm text-gray-800 dark:text-gray-400 my-0.5 transition-all ease-in-out duration-100 pl-1"
                >
                  {data.submenu}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Submenu;
