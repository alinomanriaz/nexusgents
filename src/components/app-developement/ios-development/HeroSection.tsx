import Link from 'next/link'
import React from 'react'
import {
    Database,
    Globe,
    Smartphone,
    Zap
} from "lucide-react"
const HeroSection = () => {
    return (
        <section className="relative h-screen flex justify-center items-center">
            <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient'></div>
            <div className='fixed hidden dark:flex -top-28 rounded-full blur-[90px] w-1/2 h-64 opacity-30 bg-gradient'></div>
            <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />
            <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="w-fit mb-4 bg-sky-200/50 px-4 py-1 dark:hidden font-medium text-sm text-blue-500 rounded-xl">
                            <span className="pr-2">🚀</span> Premium Development Services
                        </p>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Build Your Dream <span className="text-blue-600">Digital Product</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            From concept to deployment, we create stunning web applications, mobile apps, and digital solutions that drive your business forward.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="https://dev-ale.vercel.app" className="bg-black text-white px-6 py-2 rounded-md">
                                Developer Portfolio
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 rounded-lg p-4">
                                    <Globe className="h-8 w-8 mb-2" />
                                    <h3 className="font-semibold">Web Apps</h3>
                                    <p className="text-sm opacity-90">Modern & Responsive</p>
                                </div>
                                <div className="bg-white/10 rounded-lg p-4">
                                    <Smartphone className="h-8 w-8 mb-2" />
                                    <h3 className="font-semibold">Mobile Apps</h3>
                                    <p className="text-sm opacity-90">iOS & Android</p>
                                </div>
                                <div className="bg-white/10 rounded-lg p-4">
                                    <Database className="h-8 w-8 mb-2" />
                                    <h3 className="font-semibold">Backend</h3>
                                    <p className="text-sm opacity-90">Scalable APIs</p>
                                </div>
                                <div className="bg-white/10 rounded-lg p-4">
                                    <Zap className="h-8 w-8 mb-2" />
                                    <h3 className="font-semibold">Performance</h3>
                                    <p className="text-sm opacity-90">Lightning Fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
