import React from 'react'

const ContentWithLeftImage = () => {
    return (
        <section className='flex flex-col justify-center items-center w-full '>
            <div className='w-11/12 h-full flex flex-col justify-between items-center '>
                <div className='grid grid-cols-2 gap-2.5 w-full'>
                    <div className=' space-y-6 p-6'>
                        <div className='text-5xl font-semibold'>Content Creation and Marketing</div>
                        <div className='text-md text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse est id impedit inventore veritatis placeat error eveniet necessitatibus non dolorem.</div>
                        <div className='grid grid-cols-2 gap-2 '>
                            <div className='card-style p-4 text-md text-gray-500'>Lorem ipsum, dolor sit amet </div>
                            <div className='card-style p-4 text-md text-gray-500'>Lorem ipsum, dolor sit amet </div>
                            <div className='card-style p-4 text-md text-gray-500'>Lorem ipsum, dolor sit amet </div>
                            <div className='card-style p-4 text-md text-gray-500'>Lorem ipsum, dolor sit amet </div>
                        </div>
                    </div>
                    <div className=''>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentWithLeftImage
