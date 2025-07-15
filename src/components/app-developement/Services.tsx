import React from 'react'
import {
    Code,
    Database,
    Globe,
    Smartphone,
    Users,
    Zap,
    LucideIcon
} from "lucide-react"
import Featurepromises from '../Featurepromises'

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
    <section className="flex flex-col justify-center items-center py-16 h-fit w-full">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-[96%]">
                    {promisesData.map((service, index) => (
                        <Featurepromises
                            key={index}
                            title={service.title}
                            description={service.description}
                            Icon={service.icon}
                            features={service.features}
                        />
                    ))}
                </div>
            </section>
  )
}

export default Services
