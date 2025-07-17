'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { LinkButton } from '../Button'


interface HeroSectionProps {
    title: string,
    button: {
        name: string,
        link: string
    },
    description: string,
    client: {
        count: number,
        des: string
    }[],
    bannerImage: string
}

const HeroSection = ({ content }: { content: HeroSectionProps }) => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        const animateCount = (
            start: number,
            end: number,
            duration: number,
            setter: React.Dispatch<React.SetStateAction<number>>
        ) => {
            const startTime = performance.now();

            const animate = (currentTime: number) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                setter(value);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        };

        animateCount(0, content.client[0].count, 2000, setCount1);
        animateCount(0, content.client[1].count, 3000, setCount2);
    }, [content.client]);

    return (
        <section className=' hero-section flex flex-col items-center justify-center'>
            <div className=' flex justify-start items-center flex-col overflow-hidden w-11/12 h-full'>
                <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient'></div>
                <div className='fixed hidden dark:flex -top-28 rounded-full blur-[90px] w-1/2 h-64 opacity-30 bg-gradient'></div>
                {/* <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" /> */}
                <div className=' w-full h-full space-y-16 mt-16'>
                    <div className='grid grid-cols-2 '>
                        <div>
                            <div className='text-5xl font-extrabold '>{content.title}</div>
                            <LinkButton
                            className='dark:bg-gradient w-fit rounded-2xl bg-darkmodebtncolor text-white'
                                link={content.button.link}
                                name={content.button.name}
                            />
                        </div>
                        <div>
                            <div className='text-md text-gray-500'>
                                {content.description}
                            </div>
                            <div className="flex justify-between items-center mt-10">
                                <div className="px-14">
                                    <div className="font-bold text-5xl ">{count1}+</div>
                                    <div className="text-sm text-gray-500">{content.client[0].des}</div>
                                </div>
                                <div className="px-14">
                                    <div className="font-bold text-5xl ">{count2}+</div>
                                    <div className="text-sm text-gray-500">{content.client[1].des}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Image
                        className='w-full bg-gray-200 rounded-2xl h-96 m-0.5'
                        src={content.bannerImage}
                        alt=''
                        width={1100}
                        height={400}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
