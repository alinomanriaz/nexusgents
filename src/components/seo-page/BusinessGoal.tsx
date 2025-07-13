'use client'
import { RiArrowRightSLine } from "react-icons/ri";
import React, { useState } from 'react'

const content = [
    {
        heading: 'Packaging Industry US',
        text: 'This is what happens when custom packaging meets smart funnels. Real orders. Real clients. Real results — straight from the US market.',
        image: 'https://picsum.photos/600/400?random=3',
    },
    {
        heading: 'Packaging industry Canada',
        text: 'This is what happens when custom packaging meets smart funnels. Real orders. Real clients. Real results — straight from the US market.',
        image: 'https://dummyimage.com/600x400/333/fff&text=Conversion+Boost',
    },
    {
        heading: 'heading',
        text: 'This is what happens when custom packaging meets smart funnels. Real orders. Real clients. Real results — straight from the US market.',
        image: 'https://picsum.photos/600/400?random=3'
    },
    {
        heading: 'heading',
        text: 'This is what happens when custom packaging meets smart funnels. Real orders. Real clients. Real results — straight from the US market.',
        image: 'https://dummyimage.com/600x400/333/fff&text=Conversion+Boost'
    },
]

const BusinessGoal = () => {
    const [select, setSelect] = useState<number>(0)
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
                            content.map((data, idx) => (
                                <div key={idx} onMouseEnter={() => setSelect(idx)} className={`card-style  transition-all duration-300 rounded-4xl flex flex-col w-full justify-between items-center px-8 py-6`}>
                                    <div className="flex justify-between items-center w-full"><div className="text-2xl font-semibold ">{data.heading}</div><RiArrowRightSLine className="size-6" /></div>
                                    <div className='text-md w-full text-gray-600 dark:text-gray-500 pt-1 leading-6 tracking-wide'>
                                        {data.text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <div className="w-full h-full flex flex-col justify-between items-center">
                            {/* Background Image */}
                            <div
                                className="w-full h-full bg-center bg-cover bg-no-repeat rounded-3xl transition-all ease-in-out duration-300"
                                style={{ backgroundImage: `url(${content[select].image})` }}
                            ></div>
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
