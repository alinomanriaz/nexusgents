import React from 'react'
import Button from '../Button'

import { Code, Database, Globe, Smartphone } from 'lucide-react'
const WhyChooseUs = () => {
    const data = [
        {
            icon: Globe,
            title: "Full-Stack Solutions",
            description:
                "Custom websites that are fast, responsive, and built to grow your business with modern design and clean code built to grow your business with modern design.",
            features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter",
            features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
        },
        {
            icon: Database,
            title: "SEO",
            description: "Boost your website’s visibility on Google with proven strategies that drive traffic, leads, and real results.",
            features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Security First"],
        },
        {
            icon: Code,
            title: "Graphic Design",
            description: "Eye-catching designs for logos, ads, and branding that make your business stand out across all platforms.",
            features: ["Complete Solutions", "Scalable Architecture", "Modern Tech Stack", "Maintenance"],
        }
    ]
    return (
        <section className=' flex justify-center items-center w-full'>
            <div className='w-11/12 flex flex-col justify-center items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col w-fit'>
                        <div className='font-extrabold text-3xl'>WHY CHOOSE US?</div>
                        <div className=' text-gray-500 w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis exercitationem voluptatibus error temporibus facere aliquid minus excepturi, voluptate amet vel?</div>
                    </div>
                    <div><Button className={'bg-darkmodebtncolor w-full sm:w-auto dark:bg-gradient text-white rounded-lg sm:rounded-full'} btname={'started'} /></div>
                </div>
                <div className='flex justify-center items-center gap-4 py-8'>
                    {
                        data.map((d, index) => (
                            <div key={index} className={`w-full card-style p-4 overflow-hidden ${index===0? 'bg-darkmodebtncolor ': ''} relative`}>
                                <div className='absolute  bottom-0 rounded-full blur-[50px] -rotate-z-12 w-full h-8 bg-gradient'></div>
                                    <div className={`w-12 h-12 ${index===0? 'bg-blue-600/10 ': 'bg-blue-100 dark:bg-blue-600/10'}   rounded-lg flex items-center justify-center mb-4`}>
                                        <Globe className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div className={`text-xl font-semibold ${index===0? 'text-white ': 'text-black dark:text-white'}`}>{d.title}</div>
                                    <div className="text-gray-500 dark:text-white/50 text-sm">{d.description}</div>
                                    <Button className={`${index===0? 'bg-white/10':'bg-darkmodebtncolor'} w-full mt-4 sm:w-auto dark:bg-gradient text-white text-sm rounded-lg sm:rounded-full`} btname={'Get started'}/>
                                </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default WhyChooseUs
