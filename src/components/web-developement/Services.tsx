import React from 'react'
import Featurepromises from '../Featurepromises'
import {
    Code,
    Database,
    Globe,
    Smartphone,
    Users,
    Zap,
    LucideIcon
} from "lucide-react"

type PromiseFeature = {
    icon: LucideIcon
    title: string
    description: string
    features: string[]
}

const Services = () => {
    const promisesData: PromiseFeature[] = [
        {
            icon: Globe,
            title: "Web Development",
            description:
                "Custom websites and web applications built with modern frameworks like React, Next.js, and Vue.js",
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
            title: "Backend Development",
            description: "Robust server-side solutions with APIs, databases, and cloud infrastructure",
            features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Security First"],
        },
        {
            icon: Code,
            title: "Full-Stack Solutions",
            description: "End-to-end development from frontend to backend with seamless integration",
            features: ["Complete Solutions", "Scalable Architecture", "Modern Tech Stack", "Maintenance"],
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Speed up your existing applications and improve user experience",
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
            <div className='w-11/12 h-full flex flex-col justify-between items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className='text-5xl font-semibold w-[40%]'>Our SEO Services Include</div>
                    <div className='text-gray-500 w-96'>
                        Target the right audience at the right time.
                    </div>
                </div>
                <div className='grid grid-cols-3  w-full h-full gap-6 my-10 '>
                    {
                        promisesData.map((service, index) => (
                            <Featurepromises
                                key={index}
                                title={service.title}
                                description={service.description}
                                Icon={service.icon}
                                features={service.features}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
