'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BiCodeAlt, BiMobile, BiBrush, BiRocket } from 'react-icons/bi'
import { FcBullish } from "react-icons/fc";

const services = [
  {
    title: 'Web Development',
    icon: <BiCodeAlt className="text-2xl text-blue-600" />,
    desc: 'Custom websites, eCommerce & CMS solutions.',
    href: '/services/web-development'
  },
  {
    title: 'Mobile Apps',
    icon: <BiMobile className="text-2xl text-green-600" />,
    desc: 'iOS and Android development with native and hybrid frameworks.',
    href: '/services/mobile-apps'
  },
  {
    title: 'UI/UX Design',
    icon: <BiBrush className="text-2xl text-pink-600" />,
    desc: 'User-centered designs, branding, and prototyping.',
    href: '/services/ui-ux-design'
  },
  {
    title: 'SEO & Marketing',
    icon: <BiRocket className="text-2xl text-purple-600" />,
    desc: 'Boost visibility and traffic with modern SEO strategies.',
    href: '/services/seo-marketing'
  },
  {
    title: 'Marketing',
    icon: <FcBullish className="text-2xl text-purple-600" />,
    desc: 'Boost visibility and traffic with modern Marketing strategies.',
    href: '/services/marketing'
  }
]

interface SubmenuServicesProps {
  close: () => void;
}

const Submenu: React.FC<SubmenuServicesProps> = ({ close }) => {
  return (
    <div
      className="hidden md:flex fixed inset-0 top-16 justify-center z-20"
      
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        onMouseLeave={close}
        className="bg-white dark:bg-transparent backdrop-blur-2xl w-[90%] h-fit max-w-6xl rounded-lg shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 p-6 "
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {services.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-transparent dark:hover:ring-gray-600/20 dark:hover:ring-1 transition"
            >
              <div className="mb-2">{item.icon}</div>
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Submenu
