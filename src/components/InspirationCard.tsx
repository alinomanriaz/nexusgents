'use client'
import Image from 'next/image'
import React from 'react'
const avatar = 'https://avatar.vercel.sh/john'

interface InspirationCardProps {
  name: string
  username: string
  review: string
  classname?: string
}

const InspirationCard: React.FC<InspirationCardProps> = ({ name, username, review, classname ='' }) => {
    return (
        <>
            <div className={`ring-1 ${classname} text-gray-600/90 dark:text-gray-500 rounded-xl bg-slate-500/15 shadow-xl ring-1 ring-white/15 w-72 text-sm p-4  `}>
                <div className='flex justify-start items-center space-x-2'>
                    <div><Image className='rounded-full' src={avatar} alt='avater' width={40} height={40} /></div>
                    <div className='flex flex-col items-center justify-center'>
                        <div>{name}</div>
                        <div className='text-gray-400 dark:text-gray-500'>{username}</div>
                    </div>
                </div>
                <div className='pt-2' >{review}</div>
            </div>
        </>
    )
}

export default InspirationCard


{/* <InspiredCard name={'John'} username={'@john'} image={'https://avatar.vercel.sh/jenny'} review={`I've never seen anything like this before. It's amazing. I love it.`} /> */}
