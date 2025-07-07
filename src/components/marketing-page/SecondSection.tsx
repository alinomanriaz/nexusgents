import React from 'react'
import Button from '../Button'
import { IoHeart } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";

const SecondSection = () => {
    return (
        <section className='flex flex-col justify-center items-center w-full h-[450px] '>
            <div className='w-11/12 h-full flex flex-col justify-between items-center '>
                <div className='flex justify-beyween items-center w-full h-full gap-6 '>
                    <div className=' p-6 card-style w-[25%] h-full'>
                        <div className='flex flex-col justify-center items-start space-y-3'>
                            <div className='w-[80%] text-xl font-medium'>Mastering The Art of Digital Marketing</div>
                            <div className='w-full flex justify-center items-center'>
                                <div className='bg-gray-400 rounded-full w-40 h-40'>.</div>
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus ipsam eveniet nemo autem tempora?</div>
                            <Button className={'bg-darkmodebtncolor w-full sm:w-auto dark:bg-gradient text-white rounded-lg sm:rounded-full'} btname={'Learn more'} />
                        </div>
                    </div>
                    <div className='  w-[40%] h-full card-style p-6 relative'>
                        <div className=' rounded-full  bg-gray-300 w-fit px-4 py-2 flex justify-center items-center space-x-3'><SlGlobe /><div>Let&apos;s Grow</div></div>
                        <div className='w-44 h-28 bg-gray-300 rounded-xl absolute right-2'>.</div>
                        <div className='w-52 h-36 bg-gray-300 rounded-xl absolute -left-12 bottom-28'>.</div>
                    </div>
                    <div className='space-y-4  w-[35%] h-full'>
                        <div className=' p-6 card-style flex flex-col justify-between h-[48%]'>
                            <div className='w-[80%] text-xl font-medium'>Satisfied Customer</div>
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center space-x-4'><IoHeart className='w-8 h-8 bg-gray-300 rounded-full text-red-600 p-1.5' /><div className='font-semibold text-3xl'>15.823</div></div>
                                <div className='flex justify-center items-center  relative'>
                                    <div className='w-12 h-12  bg-gray-400 ring-1 ring-gray-200 rounded-full'>.</div>
                                    <div className='w-12 h-12 absolute right-8 bg-gray-400 ring-1 ring-gray-200 rounded-full'>.</div>
                                    <div className='w-12 h-12 absolute right-16 bg-gray-400 ring-1 ring-gray-200 rounded-full'>.</div>
                                </div>
                            </div>
                            <div className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, repellendus.</div>
                        </div>
                        <div className='p-6 card-style flex justify-between flex-col h-[48%]'>
                            <div className='w-[80%] text-xl font-medium'>Satisfied Customer</div>
                            <div className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, hic?</div>
                            <div className='bg-gray-200 rounded-md flex justify-between items-center p-2'>
                                <div className='flex flex-col justify-center items-start border-blue-600 pl-2 border-l-2'>
                                    <div className='font-bold'>Contact with Startup</div>
                                    <div className='text-gray-500'>28 Startup Member</div>
                                </div>
                                <div>
                                    <div className='flex justify-center items-center  relative'>
                                        <div className='w-12 h-12  bg-gray-400 ring-1 ring-gray-200 rounded-full'>.</div>
                                        <div className='w-12 h-12 absolute right-8 bg-gray-400 ring-1 ring-gray-200 rounded-full'>.</div>
                                        <div className='w-12 h-12 absolute right-16 bg-gray-400 ring-1 ring-gray-200 rounded-full'>.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection
