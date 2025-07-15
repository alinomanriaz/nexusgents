import React from 'react'

import { Code, Database, Globe, Smartphone, Users, Zap } from 'lucide-react'
import Featurepromises from '../Featurepromises'
const OurServices = () => {
    const promisesData = [
        {
            icon: Globe,
            title: "Full-Stack Solutions",
            description:
                "Custom websites that are fast, responsive, and built to grow your business with modern design and clean code.",
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
        },
        {
            icon: Zap,
            title: "Video Editing",
            description: "Professional video editing that engages, tells your story, and keeps your audience hooked from start to finish.",
            features: ["Speed Optimization", "Code Refactoring", "Performance Audit", "Best Practices"],
        },
        {
            icon: Users,
            title: "Consulting & Strategy",
            description: "Technical consulting and strategic planning for your digital transformation",
            features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
        },
    ]
    return (
        <section className='flex flex-col justify-center items-center w-full '>
            <div className='w-11/12  h-full flex flex-col justify-between items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className='text-5xl font-semibold w-[40%]'>Our SEO Services Include</div>
                    <div className='text-gray-500 w-96'>
                        Target the right audience at the right time.
                    </div>
                </div>
                <div className=' flex flex-col md:flex-row justify-between items-center'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                        {promisesData.map((service, index) => (
                            <Featurepromises key={index} title={service.title} description={service.description} Icon={service.icon} features={service.features} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices
