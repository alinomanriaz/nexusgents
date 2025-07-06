import { IoIosArrowDown } from "react-icons/io";

import React from 'react'

const BusinessGoal = () => {
    return (
        <section className='flex flex-col justify-center items-center w-full '>
            <div className='w-11/12 h-full flex flex-col justify-between items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className='text-5xl font-semibold w-[30%]'>Targeted Traffic and Conversion </div>
                    <div className='text-gray-500 w-96'>
                        Lets dive into significance of targeted tarffic and how its the key to boosting converstion
                    </div>
                </div>
                <div className='grid grid-cols-2 w-full h-fit gap-6 my-10 '>
                    <div className="space-y-2.5">
                        <div className='bg-gray-200 flex justify-between items-center p-8 rounded-4xl '>
                            <div className="text-3xl font-light ">Focused Efforts</div><IoIosArrowDown className="size-6" />
                        </div>
                        <div className='bg-gray-200 flex justify-between items-center p-8 rounded-4xl '>
                            <div className="text-3xl font-light ">Focused Efforts</div><IoIosArrowDown className="size-6" />
                        </div>
                        <div className='bg-gray-200 flex justify-between items-center p-8 rounded-4xl '>
                            <div className="text-3xl font-light ">Focused Efforts</div><IoIosArrowDown className="size-6" />
                        </div>
                        <div className='bg-gray-200 flex justify-between items-center p-8 rounded-4xl '>
                            <div className="text-3xl font-light ">Focused Efforts</div><IoIosArrowDown className="size-6" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-full flex flex-col justify-between items-center">
                            <div className="w-full h-full bg-gray-800 rounded-3xl "> .</div>
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
                </div>
            </div>
        </section>
    )
}

export default BusinessGoal
