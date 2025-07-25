import React from 'react'

const SeoAnalytics = () => {
    return (
        <section className='flex flex-col justify-center items-center w-full '>
            <div className='w-11/12 h-full flex flex-col justify-between items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className='text-5xl font-semibold w-[30%]'>Targeted Traffic and Conversion </div>
                    <div className='text-gray-500 w-96'>
                        Lets dive into significance of targeted tarffic and how its the key to boosting converstion
                    </div>
                </div>
                <div className='grid grid-cols-3 grid-rows-4 w-full h-full gap-6 my-10 '>
                    <div
                        className='card-style bg-center bg-cover bg-no-repeat row-span-2 col-span-2 rounded-2xl p-3 relative'
                        style={{ backgroundImage: `url(${'/assets/images/seo-analytics.jpg'})` }}
                    >
                        {/* <div className='ring-1 ring-gray-300 rounded-2xl w-fit px-4 text-sm bg-white'>Lorem, ipsum.</div>
                        <div className='font-bold py-3'>COMPLETED PROJECTSo</div>
                        <div className=' text-gray-500 absolute bottom-10 right-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div> */}
                    </div>
                    <div className='card-style ring-1 row-span-2 ring-gray-500 rounded-2xl p-3'>
                        <div className='ring-1 ring-gray-400 rounded-2xl w-fit px-4 text-sm'>Lorem, ipsum.</div>
                        <div className='text-[80px] font-extrabold'>60</div>
                        <div className='font-bold'>COMPLETED PROJECTS</div>
                        <div className=' text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                    </div>
                    <div className='card-style ring-1 row-span-2 ring-gray-500 rounded-2xl p-3 relative'>
                        <div className='ring-1 ring-gray-400 rounded-2xl w-fit px-4 text-sm'>Lorem, ipsum.</div>

                        <div className='font-bold py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi saepe deleniti exercitationem enim consequuntur quidem amet perferendis reiciendis minus!</div>
                        <div className=' text-gray-500 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, natus!</div>
                    </div>
                    <div className='card-style ring-1 row-span-2 ring-gray-500 rounded-2xl p-3'>
                        <div className='ring-1 ring-gray-400 rounded-2xl w-fit px-4 text-sm'>Lorem, ipsum.</div>
                        <div className='text-[80px] font-extrabold'>60</div>
                        <div className='font-bold'>COMPLETED PROJECTS</div>
                        <div className=' text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                    </div>
                    <div className='card-style ring-1 row-span-2 ring-gray-500 rounded-2xl p-3 relative'>
                        <div className='ring-1 ring-gray-400 rounded-2xl w-fit px-4 text-sm'>Lorem, ipsum.</div>

                        <div className='font-bold py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi saepe deleniti exercitationem enim consequuntur quidem amet perferendis reiciendis minus!</div>
                        <div className=' text-gray-500 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, natus!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoAnalytics
