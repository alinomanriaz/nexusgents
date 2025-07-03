'use client'
import React from 'react'
import { motion } from 'framer-motion'
import InspirationCard from './InspirationCard'

const CustomerReviews = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className=' h-fit flex justify-center items-center'>
                <div className=' flex justify-between items-center '>
                    <div className=' overflow-hidden flex w-full relative pt-8 pb-2 myblurbordergradienttoright'>
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: '-100%' }}
                            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                            className=' flex w-full flex-shrink-0 justify-center px-2 space-x-4 items-center'>
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                        </motion.div>
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                            className='flex absolute justify-center px-2 space-x-4 items-center'>
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit flex justify-center items-center'>
                <div className=' flex justify-between items-center '>
                    <div className=' overflow-hidden flex w-full relative pb-8 pt-2 myblurbordergradienttoright'>
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                            className=' flex w-full flex-shrink-0 justify-center px-2 space-x-4 items-center'>
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            {/* <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} /> */}
                        </motion.div>
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                            className='flex absolute justify-center px-2 space-x-4 items-center'>
                            {/* <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} /> */}
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                            <InspirationCard name={'john'} username={'@john'} review={`I've never seen anything like this before. It's amazing. I love it.`} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews
