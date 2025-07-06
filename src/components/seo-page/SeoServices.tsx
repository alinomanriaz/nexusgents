import { Globe } from 'lucide-react'
import React from 'react'

const SeoServices = () => {
    return (
        <section className='flex flex-col justify-center items-center w-full '>
            <div className='w-11/12 h-full flex flex-col justify-between items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className='text-5xl font-semibold w-[30%]'>Targeted Traffic and Conversion </div>
                    <div className='text-gray-500 w-96'>
                        Lets dive into significance of targeted tarffic and how its the key to boosting converstion
                    </div>
                </div>
                <div className='grid grid-cols-3  w-full h-full gap-6 my-10 '>
                    {
                        [...Array(6)].map((_, index) => (
                            <div key={index} className='card-style ring-1 row-span-2 ring-gray-500 rounded-2xl p-3 flex flex-col items-start space-y-4'>
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                                    <Globe className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className='font-bold text-2xl'>COMPLETED PROJECTS</div>
                                <div className=' text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SeoServices
