'use client'
import Image from 'next/image'
import React from 'react'
import spark from '../../public/assets/images/sparkles-dark.svg'
import { IoIosArrowForward } from "react-icons/io"
import Subscription from '@/components/Subscription'
import Footer from '@/components/Footer'
import { FormSubmitButton } from '@/components/Button'
import { useAppSelector } from '@/redux/hooks'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Questions from '@/components/home/Questions'
import Services from '@/components/common-components/Services'
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Users,
  Zap
} from "lucide-react"
// import SeoAnalytics from '@/components/digital-marketing/SeoAnalytics'
import ClientCount from '@/components/home/ClientCount'
import LeftImageWithContent from '@/components/common-components/LeftImageWithContent'
import RightImageWithContent from '@/components/common-components/RightImageWithContent'
import WorkExperiances from '@/components/common-components/WorkExperiances'

const servicesContent = {
  titles: {
    title: 'Our Services Include',
    subtitle: 'We offer a wide range of professional services to help your business grow and succeed online.'
  },
  services: [
    {
      icon: Globe,
      title: "Creative Designing",
      description:
        "We craft visually compelling designs that communicate your brand story. From logos to marketing collateral, our creatives blend originality with strategic purpose.",
      // features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    },
    {
      icon: Smartphone,
      title: "Printing & Packaging",
      description: "From concept to production, we deliver premium quality printing and custom packaging solutions that make your product stand out on the shelf and leave a lasting impression.",
      // features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    },
    {
      icon: Database,
      title: "Product & Fashion Photography",
      description: "Capture the essence of your brand with high-quality product and fashion photography. Our team creates visuals that elevate your online presence and drive conversions.",
      // features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Security First"],
    },
    {
      icon: Code,
      title: "Custom Website Development",
      description: "We build tailored websites from scratch using clean code, scalable architecture, and advanced technologies to meet your unique business needs.",
      // features: ["Complete Solutions", "Scalable Architecture", "Modern Tech Stack", "Maintenance"],
    },
    {
      icon: Zap,
      title: "WordPress Website Development",
      description: "Whether it’s a corporate site or a blog, we create stunning and user-friendly WordPress websites that are fast, secure, and easy to manage.",
      // features: ["Speed Optimization", "Code Refactoring", "Performance Audit", "Best Practices"],
    },
    {
      icon: Users,
      title: "Shopify Website Development",
      description: "Launch your e-commerce business with a fully optimized Shopify store. We design, develop, and customize Shopify solutions to boost your online sales.",
      // features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
    {
      icon: Users,
      title: "Digital Marketing",
      description: "Maximize your online reach with our data-driven digital marketing strategies. We create and manage campaigns that generate leads and grow your brand.",
      // features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "We help brands connect, engage, and grow on social media. From content creation to community management, we handle it all to boost your digital presence.",
      // features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
    {
      icon: Users,
      title: "Search Engine Optimization (SEO)",
      description: "Rank higher, attract more visitors, and grow organically. Our SEO services are tailored to improve your site’s visibility and drive quality traffic.",
      // features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
    {
      icon: Users,
      title: "Custom ERP Development",
      description: "Streamline and automate your business operations with a custom-built ERP system that’s designed to meet your workflow, reporting, and scalability needs.",
      // features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
    {
      icon: Users,
      title: "Software Development",
      description: "From business tools to SaaS solutions, we develop robust, scalable, and secure software tailored to your objectives and operational needs.",
      // features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
    {
      icon: Users,
      title: "Mobile App Development",
      description: "We design and develop intuitive mobile apps for Android and iOS that deliver seamless experiences, whether for e-commerce, services, or enterprise use.",
      // features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
    {
      icon: Users,
      title: "Company Profile Development",
      description: "Present your business with clarity and professionalism. We design impactful company profiles that highlight your mission, services, and strengths.",
      // features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
    {
      icon: Users,
      title: "Professional CV Development",
      description: "Make your first impression count. We create modern, industry-standard CVs and resumes that showcase your skills, achievements, and career potential.",
      // features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
    {
      icon: Users,
      title: "Brand Activation",
      description: "We bring brands to life through creative and interactive brand activation campaigns that leave a memorable impact and build lasting consumer relationships.",
      // features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
    },
  ]
}

const rightSideContent = {
  image: '/assets/images/Empowering.jpg',
  heading: 'Empowering Businesses with Technology',
  description: `We believe technology should simplify, scale, and strengthen your business. That’s why we build custom digital solutions tailored to your workflow and long-term goals. Our team specializes in scalable architecture, seamless integrations, and cross-platform development that works efficiently across devices. We focus on performance, security, and usability so that your systems don’t just function — they thrive. Whether you're automating operations or launching a new platform, we use a future-proof tech stack that evolves with your needs. Let us empower your business with intelligent, reliable, and innovative software solutions.`
}
const leftSideContent = {
  image: '/assets/images/Strategy.jpg',
  heading: 'Creative Strategy Meets Digital Execution',
  description: `Your brand deserves more than a beautiful design — it needs a compelling digital experience. We combine creative storytelling with data-driven strategies to deliver websites and content that inspire action. From defining your brand voice to designing responsive layouts, our approach ensures consistency and clarity across every touchpoint. We map your user’s journey, optimize every step, and create intuitive flows that convert visitors into loyal customers. Our process is collaborative, transparent, and entirely focused on your growth. With us, creative vision meets precise execution — delivering real, measurable results.`
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

const Home = () => {
  const theme = useAppSelector(state => state.theme.mode)

  return (
    <>
      <main className='h-full w-full'>
        {/* hero section */}
        <section className=' hero-section relative flex flex-col items-center justify-center h-[calc(100dvh-50px)]'>
          <div className=' flex   justify-center items-center text-center flex-col overflow-hidden w-full sm:px-10'>
            <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient'></div>
            <div className='fixed hidden dark:flex -top-28 rounded-full blur-[90px] w-1/2 h-64 opacity-30 bg-gradient'></div>
            <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />
            {theme === "dark" ? <div className='box-wrapper w-52 h-8 flex justify-center items-center bg-white/20 rounded-2xl'>
              <div className="w-[calc(100%-4px)] h-[calc(100%-4px)] absolute bg-black rounded-2xl flex justify-center items-center px-2 py-1" />
              <div className='box-wrapper-content bg-gradient-to-t from-blue-800/30 absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl  flex justify-center items-center px-2 py-1 text-[0.85rem] hover:bg-blue-400/20 transition ease-out duration-700 '><Image src={spark} alt='spark' className='h-4 w-8'></Image>Premium Services<IoIosArrowForward className='mx-1' /></div>
            </div> :
              <p className="w-fit bg-sky-200/50 px-4 py-1 dark:hidden font-medium text-sm text-blue-500 rounded-xl"><span className='pr-2'>🚀</span> Premium Services</p>}
            <div className='leading-tight md:my-8 my-6  md:text-[60px] w-80 md:w-[65%] text-center md:leading-tight dark:text-slate-300 z-10 tracking-tight text-slate-900 font-extrabold text-3xl'><div>We Don’t Just Build Sites</div> <div>We Build Online Empires.</div></div>
            <div className='text-md text-gray-600 dark:text-gray-500 w-72 md:w-3/5 leading-6 tracking-wide'>
              At Nexusgen, we help brands grow faster with high-converting websites, powerful SEO strategies, and full-stack web development tailored to your goals.
            </div>
            <div className='flex sm:flex-row justify-center flex-col items-center dark:bg-white/20 bg-darkmodebtncolor/15 my-12 gap-4 p-2 rounded-lg sm:rounded-full border-t border-black/10 dark:border-white/40'><div className='px-2'><span className='sm:pl-2 -ml-2  text-xl'>✨</span><span>Start building your dream business</span></div><FormSubmitButton className={'bg-darkmodebtncolor w-full sm:w-auto dark:bg-gradient text-white rounded-lg sm:rounded-full'} btname={'Get started'} /></div>
          </div>
        </section>

        <div className='w-full space-y-32'>
          <ClientCount />
          <LeftImageWithContent
            content={rightSideContent}
          />
          <RightImageWithContent
            content={leftSideContent}
          />
          <Services
            content={servicesContent}
          />
          {/* <SeoAnalytics /> */}
          <WorkExperiances content={workExperienceContent}/>
          <WhyChooseUs />
          <Questions />
          <Subscription />
        </div>

        {/* <section className='flex flex-col justify-center items-center h-fit mt-20'>
          <GradientTitle text='CURATED WORK' />
          <Title title='Our Client' className='my-6' />
          <Subtitle subtitle={`Success stories from those who’ve trusted us with their brand and website.`} />
          <CustomerReviews />
        </section> */}



      </main>
      <Footer />
    </>
  )
}

export default Home
