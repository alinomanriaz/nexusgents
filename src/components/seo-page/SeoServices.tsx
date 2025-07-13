import { Globe } from 'lucide-react'
import React from 'react'

const SeoServices = () => {
    const services= [
        {
            icon: Globe,
            title: 'Keyword Research & Strategy',
            subtitle: 'Target the right audience at the right time.'
        },
        {
            icon: Globe,
            title: 'On-Page SEO',
            subtitle: 'From meta tags to structured data—we optimize every page element.'
        },
        {
            icon: Globe,
            title: 'Technical SEO',
            subtitle: 'Site speed, crawlability, mobile-friendliness—fully covered.'
        },
        {
            icon: Globe,
            title: 'Link Building',
            subtitle: 'Build high-quality, authority backlinks that boost your domain.'
        },
        {
            icon: Globe,
            title: 'Local SEO',
            subtitle: 'Rank higher in your city or region with optimized local signals.'
        },
        {
            icon: Globe,
            title: 'SEO Content Strategy',
            subtitle: 'We build and scale content that ranks and converts.'
        }

    ]
    return (
        <section className='flex flex-col justify-center items-center w-full '>
            <div className='w-11/12 h-full flex flex-col justify-between items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className='text-5xl font-semibold w-[40%]'>Our SEO Services Include</div>
                    <div className='text-gray-500 w-96'>
                        Target the right audience at the right time.
                    </div>
                </div>
                <div className='grid grid-cols-3  w-full h-full gap-6 my-10 '>
                    {
                        services.map((data, index) => (
                            <div key={index} className='card-style ring-1 row-span-2 ring-gray-500 rounded-2xl p-6 flex flex-col items-start space-y-4'>
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                                    <Globe className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className='font-bold text-2xl'>{data.title}</div>
                                <div className=' text-gray-500'>{data.subtitle}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SeoServices
