'use client'
import { RiArrowRightSLine } from "react-icons/ri";

import React, { useEffect, useState } from 'react'

const BusinessGoal = () => {
    const [select, setSelect] = useState<number>(0)
    const [displayImage, setDisplayImage] = useState<string>('bg-yellow-500')


    useEffect(() => {
        switch (select) {
            case 0:
                setDisplayImage('bg-yellow-500');
                break;
            case 1:
                setDisplayImage('bg-red-500');
                break;
            case 2:
                setDisplayImage('bg-green-500');
                break;
            case 3:
                setDisplayImage('bg-blue-500');
                break;
            default:
                setDisplayImage('bg-yellow-500');
        }
    }, [select]);
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
                        {
                            [...Array(4)].map((_, idx) => (
                                <div key={idx} onMouseEnter={()=>setSelect(idx)} className={`card-style rounded-4xl flex flex-col w-full justify-between items-center px-8 py-6`}>
                                    <div className="flex justify-between items-center w-full"><div className="text-2xl font-semibold ">Focused Efforts</div><RiArrowRightSLine className="size-6" /></div>
                                    <div className='text-md w-full text-gray-600 dark:text-gray-500 pt-1 leading-6 tracking-wide'>
                                        Unlock real growth with NexusGen&apos;s data-driven SEO strategies designed for long-term results, better traffic, and higher conversions.
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <div className="w-full h-full flex flex-col justify-between items-center">
                            <div className={`w-full h-full bg-gray-800 rounded-3xl ${displayImage} transition-all duration-1000 `}> .</div>
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
