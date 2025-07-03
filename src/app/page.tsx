'use client'
import Image from 'next/image'
import React from 'react'
import spark from '../../public/assets/images/sparkles-dark.svg'
import { IoIosArrowForward } from "react-icons/io"
// import dashboard from '/public/assets/images/dashboard.svg'
// import featureImage from '../../public/assets/images/feature.svg'
// import { Brandslider, Brandslidermobile } from '@/components/brandslider'
// import Subscription from '@/components/subscription'
// import { Title, Subtitle, GradientTitle } from '@/components/titles'
// import Experiencecard from '@/components/Experiencecard'
// import pic from '../../public/assets/images/pic2.png'
// import CustomerReviews from '@/components/CustomerReviews'
import { Code, Database, Globe, Smartphone, Users, Zap } from 'lucide-react'
import Subscription from '@/components/Subscription'
import { Title, Subtitle, GradientTitle } from '@/components/Titles'
// import Herobannerslider from '@/components/Herobannerslider'
// import Slidervirtical from '@/components/Slidervirtical'
import Footer from '@/components/Footer'
import Featurepromises from '@/components/Featurepromises'
import CustomerReviews from '@/components/CustomerReviews'
import Button from '@/components/Button'
import { useAppSelector } from '@/redux/hooks'
// import Button from '@/components/Button'

const Home = () => {
  const theme = useAppSelector(state => state.theme.mode)
  const promisesData = [
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
  return (
    <>
      <main className='h-full w-full'>
        {/* hero section */}
        <section className='hero-section flex flex-col items-center justify-center h-fit'>
          <div className='mt-28 flex justify-center items-center text-center flex-col overflow-hidden w-full sm:px-10'>
            <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient'></div>
            <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />
            {theme === "dark" ? <div className='box-wrapper w-52 h-8 flex justify-center items-center bg-white/20 rounded-2xl'>
              <div className="w-[calc(100%-4px)] h-[calc(100%-4px)] absolute bg-black rounded-2xl flex justify-center items-center px-2 py-1" />
              <div className='box-wrapper-content bg-gradient-to-t from-blue-800/30 absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl  flex justify-center items-center px-2 py-1 text-[0.85rem] hover:bg-blue-400/20 transition ease-out duration-700 '><Image src={spark} alt='spark' className='h-4 w-8'></Image>Premium Services<IoIosArrowForward className='mx-1' /></div>
            </div> :
              <p className="w-fit bg-sky-200/50 px-4 py-1 dark:hidden font-medium text-sm text-blue-500 rounded-xl"><span className='pr-2'>🚀</span> Premium Services</p>}
            <div className='leading-tight md:my-8 my-6  md:text-5xl w-80 md:w-[55%] text-center md:leading-tight dark:text-slate-300 tracking-tight text-slate-900 font-extrabold text-3xl'><div>We Don’t Just Build Sites</div> <div>We Build Online Empires.</div></div>
            <div className='text-md text-gray-600 dark:text-gray-500 w-72 md:w-3/5 leading-6 tracking-wide'>
              At Nexusgen, we help brands grow faster with high-converting websites, powerful SEO strategies, and full-stack web development tailored to your goals.
            </div>
            <div className='flex sm:flex-row justify-center flex-col items-center dark:bg-white/20 bg-darkmodebtncolor/15 my-12 gap-4 p-2 rounded-lg sm:rounded-full border-t border-black/10 dark:border-white/40'><div className='px-2'><span className='sm:pl-2 -ml-2  text-xl'>✨</span><span>Start building your dream business</span></div><Button className={'bg-darkmodebtncolor w-full sm:w-auto dark:bg-gradient text-white rounded-lg sm:rounded-full'} btname={'Get started'} /></div>
          </div>
        </section>
        {/* hero section ended */}
        {/* hero banner horizental slider */}
        {/* <Herobannerslider /> */}
        {/* End  hero banner horizental slider */}



        {/* our client logos sliders */}
        <section className='flex flex-col justify-center items-center h-fit mt-20'>
          <GradientTitle text='CURATED WORK' />
          <Title title='Our Client' className='my-6' />
          <Subtitle subtitle={`Success stories from those who’ve trusted us with their brand and website.`} />
          <CustomerReviews />
        </section>


        {/* our virtical slider */}
        <section className='flex flex-col justify-center items-center h-fit mt-20'>
          {/* <Slidervirtical /> */}
        </section>

        {/* other options */}
        {/* <section className='w-full h-fit'>
          <div className='w-full flex justify-center items-center h-fit my-20'>
            <div className='w-11/12 flex justify-center items-center flex-col md:flex-row '>
              <div className='md:w-1/2 flex flex-col justify-center '>
                <h1 className='w-full dark:text-white tracking-tight text-slate-900 font-extrabold md:text-4xl text-3xl '>heading</h1>
                <p className=' text-gray-600 text-md pb-8 pt-4 text-center md:text-start'>subtitle</p>
              </div>
              <div className='md:w-1/2 grid sm:grid-cols-2 md:grid-rows-2 gap-8 grid-cols-1'>
                <div className='sm:max-w-[300px] rounded-xl bg-slate-700/15 shadow-xl ring-1 ring-slate-200/10 p-4'>
                  <h1 className='text-2xl font-semibold' >heading</h1>
                  <p className='text-md text-gray-600/90 dark:text-gray-500 py-2 leading-6 tracking-wide'>jdkalkd akjsd aljsdkja daks dkajs ldasj dk jlasd las kjdg ajsdgl aslgd askjd galjskgd lasdkjg ajks dgl</p>
                </div>
                <div className='sm:max-w-[300px] rounded-xl bg-slate-700/15 shadow-xl ring-1 ring-slate-200/10 p-4'>
                  <h1 className='text-2xl font-semibold' >heading</h1>
                  <p className='text-md text-gray-600/90 dark:text-gray-500 py-2 leading-6 tracking-wide'>jdkalkd akjsd aljsdkja daks dkajs ldasj dk jlasd las kjdg ajsdgl aslgd askjd galjskgd lasdkjg ajks dgl</p>
                </div>
                <div className='sm:max-w-[300px] rounded-xl bg-slate-700/15 shadow-xl ring-1 ring-slate-200/10 p-4'>
                  <h1 className='text-2xl font-semibold' >heading</h1>
                  <p className='text-md text-gray-600/90 dark:text-gray-500 py-2 leading-6 tracking-wide'>jdkalkd akjsd aljsdkja daks dkajs ldasj dk jlasd las kjdg ajsdgl aslgd askjd galjskgd lasdkjg ajks dgl</p>
                </div>
                <div className='sm:max-w-[300px] rounded-xl bg-slate-700/15 shadow-xl ring-1 ring-slate-200/10 p-4'>
                  <h1 className='text-2xl font-semibold' >heading</h1>
                  <p className='text-md text-gray-600/90 dark:text-gray-500 py-2 leading-6 tracking-wide'>jdkalkd akjsd aljsdkja daks dkajs ldasj dk jlasd las kjdg ajsdgl aslgd askjd galjskgd lasdkjg ajks dgl</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Our features promises */}
        <section className='flex flex-col justify-center items-center my-16 h-fit w-full'>
          <GradientTitle text='Features' />
          <Title title='Discover our powerful features' className='my-8' />
          <Subtitle subtitle={`Astra offers a range of features to help you build a stunning website in no time`} />
          <div className='w-11/12 flex flex-col md:flex-row justify-between items-center mt-20'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
              {promisesData.map((service, index) => (
                <Featurepromises key={index} title={service.title} description={service.description} Icon={service.icon} features={service.features} />
              ))}
            </div>
          </div>
        </section>

        {/* developer sample showcase  */}
        {/* <section className='flex flex-col justify-center items-center my-16 h-fit w-full '>
          <GradientTitle text='WORK EXPERIENCE' />
          <Title title='Developer Samples' className='my-6' />
          <Subtitle subtitle={`See how Astra empowers businesses of all sizes. Here's what real people are saying on Twitter`} />
          <div className="w-full h-fit flex justify-center">
            <div className="w-11/12 flex justify-center items-center ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full my-10">
                {[...Array(8)].map((_, index) => (
                  <Experiencecard key={index} />
                ))}
              </div>
            </div>
          </div>
        </section> */}


        {/* SEO sample showcase  */}
        <section className='flex flex-col justify-center items-center my-16 h-fit w-full '>
          <GradientTitle text='WORK EXPERIENCE' />
          <Title title='SEO Samples' className='my-6' />
          <Subtitle subtitle={`See how Astra empowers businesses of all sizes. Here's what real people are saying on Twitter`} />
          <div className="w-full h-fit flex justify-center">
            <div className="w-11/12 flex justify-center items-center ">
              <div className="grid grid-cols-5 grid-rows-6 gap-4 w-full my-10 h-screen">
                <div className='rounded ring-1 row-span-2'></div>
                <div className='rounded ring-1 row-span-2 col-span-2'></div>
                <div className='rounded ring-1 col-span-2'></div>
                <div className='rounded ring-1 col-span-2 row-span-4'></div>
                <div className='rounded ring-1 col-span-3 row-span-3'></div>
                <div className='rounded ring-1'></div>
                <div className='rounded ring-1'></div>
                <div className='rounded ring-1'></div>
                <div className='rounded ring-1'></div>
                <div className='rounded ring-1'></div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription from */}
        <section className='flex justify-center items-center mb-8'>
          <Subscription />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
