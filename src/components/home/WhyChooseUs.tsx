import React from 'react'
// import { FormSubmitButton } from '../Button'

import { Code, Database, Globe, Smartphone } from 'lucide-react'
const WhyChooseUs = () => {
    const data = [
        {
            icon: Globe,
            title: "Experienced & Skilled Team",
            description:
                "Our team consists of industry experts with years of hands-on experience in design, development, marketing, and strategy — delivering quality you can trust."
        },
        {
            icon: Smartphone,
            title: "Creative & Strategic Thinking",
            description: "We combine creativity with strategic planning to build designs and digital experiences that not only look great but perform exceptionally well."
        },
        {
            icon: Database,
            title: "On-Time Delivery",
            description: "We value your time and deliver projects within agreed timelines without compromising on quality — ensuring smooth and stress-free launches."
        },
        {
            icon: Code,
            title: "Complete Digital Solution",
            description: "From branding and development to marketing and management, we provide everything your business needs to grow — all under one roof."
        }
    ]
    return (
        <section className=' flex justify-center items-center w-full'>
            <div className='w-11/12 flex flex-col justify-center items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className='text-5xl font-semibold w-[30%]'>WHY CHOOSE US?</div>
                    <div className='text-gray-500 w-96'>
                        We deliver creative, reliable, and results-driven digital solutions tailored to your business success.
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4 py-8'>
                    {
                        data.map((d, index) => (
                            <div key={index} className={`w-full card-style p-4 overflow-hidden ${index === 0 ? 'bg-darkmodebtncolor ' : ''} relative`}>
                                <div className='absolute  bottom-0 rounded-full blur-[50px] -rotate-z-12 w-full h-8 bg-gradient'></div>
                                <div className={`w-12 h-12 ${index === 0 ? 'bg-blue-600/10 ' : 'bg-blue-100 dark:bg-blue-600/10'}   rounded-lg flex items-center justify-center mb-4`}>
                                    <Globe className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className={`text-xl font-semibold ${index === 0 ? ' ' : 'text-black dark:text-white'}`}>{d.title}</div>
                                <div className="text-gray-500 dark:text-white/50 text-sm">{d.description}</div>
                                {/* <FormSubmitButton className={`${index === 0 ? 'bg-darkmodebtncolor' : 'bg-darkmodebtncolor'} w-full mt-4 sm:w-auto dark:bg-gradient text-white text-sm rounded-lg sm:rounded-full`} btname={'Get started'} /> */}
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default WhyChooseUs
