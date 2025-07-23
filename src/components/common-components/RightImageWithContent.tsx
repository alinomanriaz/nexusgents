import React from 'react'
import Image from 'next/image'

interface Props {
    image: string;
    heading: string;
    description: string;
}

const RightImageWithContent = ({ content }: { content: Props }) => {
  return (
    <section className='flex flex-col justify-center items-center w-full '>
                <div className='w-11/12 h-full flex flex-col justify-between items-center '>
                    <div className='grid grid-cols-2 gap-2.5 w-full'>
                        <div className='space-y-6 p-6'>
                            <div className='text-5xl font-semibold'>{content.heading}</div>
                            <p>{content.description}</p>
                        </div>
                        <Image
                            className='w-full h-96 rounded-2xl'
                            src={content.image}
                            alt={content.heading}
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </section>
  )
}

export default RightImageWithContent
