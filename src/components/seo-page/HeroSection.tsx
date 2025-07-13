import React from 'react'
import Button from '../Button'
// import { Search } from 'lucide-react'


const HeroSection = () => {
  return (
    <section className=' hero-section flex flex-col items-center justify-center h-[calc(100dvh-50px)]'>
      <div className=' flex justify-start items-center flex-col overflow-hidden w-11/12 h-full'>
        <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient'></div>
        <div className='fixed hidden dark:flex -top-28 rounded-full blur-[90px] w-1/2 h-64 opacity-30 bg-gradient'></div>
        <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />

        <div className=' w-full h-full'>
          <div className='leading-tight md:my-8 my-6  md:text-[60px] w-80 md:w-[55%] md:leading-tight dark:text-slate-300 z-10 tracking-tight text-slate-900 font-semibold text-3xl '>
            {/* <div>Domination</div>
            <div className='flex justify-start items-center'>
              <div>Search</div>
              <div className='ring-1 ml-12 flex justify-start items-center bg-transparent backdrop-blur-3xl ring-blue-800 rounded-4xl text-[30px] px-4 py-3 w-full'>
                <Search className='text-blue-800 size-10 mr-4' /><div>asdadaasdasdad</div></div>
            </div>
            <div>Algorithms</div> */}
            <div>We Don’t Just Rank You Higher—We Grow Your Revenue with SEO.</div>
          </div>
          <div className='text-md text-gray-600 dark:text-gray-500 w-72 md:w-3/5 leading-6 tracking-wide'>
            We Don’t Just Rank You Higher—We Grow Your Revenue with SEO.
          </div>
          <Button className={'bg-darkmodebtncolor my-9 w-full sm:w-auto dark:bg-gradient text-white rounded-lg sm:rounded-full'} btname={'Get started'} /></div>
      </div>
    </section>
  )
}

export default HeroSection
