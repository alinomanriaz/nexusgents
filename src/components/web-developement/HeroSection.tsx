import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

interface HeroProps {
    tag: string;
    title: string;
    colortitle: string;
    subtitle: string;
    button: {
        name: string;
        link: string;
    };
    image: string;
}


const HeroSection = ({ content }: {content:HeroProps}) => {
    return (
        <section className="relative h-full flex justify-center items-center">
            <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient'></div>
            <div className='fixed hidden dark:flex -top-28 rounded-full blur-[90px] w-1/2 h-64 opacity-30 bg-gradient'></div>
            <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />
            <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center space-y-18 mt-24">
                    <div className='w-[60%] flex flex-col justify-center items-center text-center'>
                        <p className="w-fit mb-4 bg-sky-200/50 px-4 py-1 dark:hidden font-medium text-sm text-blue-500 rounded-xl">
                            <span className="pr-2">🚀</span>{content.tag}
                        </p>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            {content.title}<span className="text-blue-600">{content.colortitle}</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {content.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={content.button.link} className="bg-black text-white px-6 py-2 rounded-md">
                                {content.button.name}
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                            <Image
                            className='rounded-2xl h-96'
                                src={content.image}
                                alt='img'
                                width={1100}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
