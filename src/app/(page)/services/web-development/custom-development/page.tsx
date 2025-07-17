import React from 'react'
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Users,
  Zap
} from "lucide-react"
import HeroSection from '@/components/web-developement/HeroSection'
import Services from '@/components/common-components/Services'
import WorkExperiances from '@/components/common-components/WorkExperiances'
import DetailContent from '@/components/common-components/DetailContent'


const heroContent = {
  tag: 'Premium Development Services',
  title: 'Build Your Dream',
  colortitle: 'Digital Product',
  subtitle: 'From concept to deployment, we create stunning web applications, mobile apps, and digital solutions that drive your business forward.',
  button: {
    name: 'Portfolio',
    link: "https://dev-ale.vercel.app"
  },
  image: 'https://picsum.photos/600/400?random=3'
}
const servicesContent = {
  titles: {
    title: 'Our SEO Services Include',
    subtitle: 'Target the right audience at the right time.'
  },
  services: [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks like React, Next.js, and Vue.js",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with APIs, databases, and cloud infrastructure",
      features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Security First"],
    },
    {
      icon: Code,
      title: "Full-Stack Solutions",
      description: "End-to-end development from frontend to backend with seamless integration",
      features: ["Complete Solutions", "Scalable Architecture", "Modern Tech Stack", "Maintenance"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience",
      features: ["Speed Optimization", "Code Refactoring", "Performance Audit", "Best Practices"],
    },
    {
      icon: Users,
      title: "Consulting & Strategy",
      description: "Technical consulting and strategic planning for your digital transformation",
      features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
  ]
}
const workExperienceContent = {
  titles: {
    title: 'Targeted Traffic and Conversion',
    subtitle: 'Lets dive into significance of targeted tarffic and how its the key to boosting converstion'
  },
  paraContent: [
    {
      heading: 'Packaging Industry US',
      text: 'This is what happens when custom packaging meets smart funnels. Real orders. Real clients. Real results — straight from the US market.',
      image: 'https://picsum.photos/600/400?random=3',
    },
    {
      heading: 'Packaging industry Canada',
      text: `Canada's packaging brands trust us — and this dashboard proves why. Real results. Real clients. From Toronto to Vancouver`,
      image: 'https://dummyimage.com/600x400/333/fff&text=Conversion+Boost',
    },
    {
      heading: 'Packaging Industry in Pakistan',
      text: 'Most packaging businesses in Pakistan still rely on calls and references. I build systems that bring orders while you sleep.',
      image: 'https://picsum.photos/600/400?random=3'
    },
    {
      heading: 'heading',
      text: 'This is what happens when custom packaging meets smart funnels. Real orders. Real clients. Real results — straight from the US market.',
      image: 'https://dummyimage.com/600x400/333/fff&text=Conversion+Boost'
    },
  ]
}
const detailcontent = [
  {
    title: 'Importance of Ecommerce Website Design for Business Expansion:',
    description: 'Ecommerce website development has become more important as the market keeps evolving. Studies show that a well-optimized ecommerce site can increase your sales by up to 40%. An increase in sales by such a big margin can greatly boost the growth of the company. So every company needs to ensure that they are getting professional ecommerce web development services. Our team can assist you in amplifying your sales whether you need to develop a new ecommerce store or add features and reoptimize your existing one.'
  },
  {
    title: 'Importance of Ecommerce Website Design for Business Expansion:',
    description: 'Ecommerce website development has become more important as the market keeps evolving. Studies show that a well-optimized ecommerce site can increase your sales by up to 40%. An increase in sales by such a big margin can greatly boost the growth of the company. So every company needs to ensure that they are getting professional ecommerce web development services. Our team can assist you in amplifying your sales whether you need to develop a new ecommerce store or add features and reoptimize your existing one.'
  }
]



const page = () => {
  return (
    <div className='w-full space-y-20 mb-20'>
      <HeroSection
        content={heroContent}
      />

      <Services
        content={servicesContent}
      />

      <WorkExperiances
        content={workExperienceContent}
      />

      <DetailContent
        content={detailcontent}
      />

    </div>
  )
}

export default page
