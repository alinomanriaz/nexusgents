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
import Subscription from '@/components/Subscription'
// import Herobannerslider from '@/components/Herobannerslider'
// import Slidervirtical from '@/components/Slidervirtical'
import Footer from '@/components/Footer'

import Button from '@/components/Button'
import { useAppSelector } from '@/redux/hooks'
import Four from '@/components/home/Four'
import FeaturePromises from '@/components/home/FeaturePromises'
import ClientClount from '@/components/home/ClientClount'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Questions from '@/components/home/Questions'

// import Button from '@/components/Button'

const Home = () => {
  const theme = useAppSelector(state => state.theme.mode)
  
  return (
    <>
      <main className='h-full w-full'>
        {/* hero section */}
        <section className=' hero-section  flex flex-col items-center justify-center h-[calc(100dvh-50px)]'>
          <div className=' flex justify-center items-center text-center flex-col overflow-hidden w-full sm:px-10'>
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
            <div className='flex sm:flex-row justify-center flex-col items-center dark:bg-white/20 bg-darkmodebtncolor/15 my-12 gap-4 p-2 rounded-lg sm:rounded-full border-t border-black/10 dark:border-white/40'><div className='px-2'><span className='sm:pl-2 -ml-2  text-xl'>✨</span><span>Start building your dream business</span></div><Button className={'bg-darkmodebtncolor w-full sm:w-auto dark:bg-gradient text-white rounded-lg sm:rounded-full'} btname={'Get started'} /></div>
          </div>
        </section>

        <div className='w-full space-y-34'>
          <ClientClount />
        <FeaturePromises />
        <Four />
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
