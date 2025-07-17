import React from 'react'
import { LinkButton} from '../Button'
import { LuMousePointerClick } from "react-icons/lu";
import { SlGlobe } from "react-icons/sl";
import { IoStatsChart } from "react-icons/io5";


const HeroSectionMarketing = () => {
    return (
        <section className=' hero-section  flex flex-col items-center justify-center h-[calc(100dvh-50px)]'>
            <div className=' flex justify-center items-center text-center flex-col overflow-hidden w-full sm:px-10'>
                <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient'></div>
                <div className='fixed hidden dark:flex -top-28 rounded-full blur-[90px] w-1/2 h-64 opacity-30 bg-gradient'></div>
                <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />
                <div className='leading-tight md:my-8 my-6  md:text-[80px] w-80 md:w-[65%] text-center md:leading-tight dark:text-slate-300 z-10 tracking-tight text-slate-900 font-medium text-3xl'>
                    <div className='flex justify-center items-center flex-col'>
                        <div className=' flex justify-center items-center '>
                            <div>ONE</div>
                            <IoStatsChart className='w-16 h-16 bg-gray-500/20 rounded-full text-yellow-600 p-3' />
                            <SlGlobe className='w-16 h-16 bg-gray-500/20 rounded-full text-green-600 p-3' />
                            <LuMousePointerClick className='w-16 h-16 bg-gray-500/20 rounded-full text-blue-600 p-3' />
                            <div>CLICK</div>
                        </div>
                        <div>MAXIMIZING IMPACT</div>
                    </div>
                </div>
                <div className='text-md text-gray-600 dark:text-gray-500 w-72 md:w-3/5 leading-6 tracking-wide'>
                    At Nexusgen, we help brands grow faster with high-converting websites, powerful SEO strategies, and full-stack web development tailored to your goals.
                </div>
                <div className='flex justify-center items-center space-x-4 py-6'>
                    <LinkButton 
                    className={'bg-darkmodebtncolor w-full sm:w-auto dark:bg-gradient text-white rounded-lg sm:rounded-full'} 
                    link={'/'}
                    name={'Get started'} 
                    />
                    <LinkButton 
                    className={'bg-white dark:bg-transparent ring-1 ring-gray-500/20 w-full sm:w-auto rounded-lg sm:rounded-full backdrop-blur-3xl'} 
                    link={'/'}
                    name={'Learn more'} 
                    />
                </div>
            </div>
            
        </section>
    )
}

export default HeroSectionMarketing
