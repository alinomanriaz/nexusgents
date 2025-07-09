import React from 'react'
import Button from '../Button'

const HeroSection = () => {
    return (
        <section className=' hero-section flex flex-col items-center justify-center'>
            <div className=' flex justify-start items-center flex-col overflow-hidden w-11/12 h-full'>
                <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient'></div>
                <div className='fixed hidden dark:flex -top-28 rounded-full blur-[90px] w-1/2 h-64 opacity-30 bg-gradient'></div>
                {/* <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" /> */}
                <div className=' w-full h-full space-y-16 mt-16'>
                    <div className='grid grid-cols-2 '>
                        <div>
                            <div className='text-5xl font-extrabold'>We are a Result Driven Tech Company</div>
                            <div>
                                <Button btname={'Get a Quate'} className={'bg-darkmodebtncolor my-9 w-full sm:w-auto dark:bg-gradient text-white rounded-lg sm:rounded-full'} />
                            </div>
                        </div>
                        <div>
                            <div className='text-md text-gray-500'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quibusdam commodi facilis, reprehenderit assumenda aut, recusandae error nemo rerum accusamus, maxime iusto amet dolorum adipisci.
                            </div>
                            <div className="flex justify-between items-center mt-10">
                                <div className="px-14">
                                    <div className="font-bold text-5xl ">300+</div>
                                    <div className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, modi.</div>
                                </div>
                                <div className="px-14">
                                    <div className="font-bold text-5xl ">300+</div>
                                    <div className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, modi.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full bg-gray-200 rounded-2xl h-96 m-0.5'>.</div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
