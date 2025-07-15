import DetailContent from '@/components/web-developement/e-commerce/DetailContent'
import HeroSection from '@/components/web-developement/e-commerce/HeroSection'
import Services from '@/components/web-developement/e-commerce/Services'
import WorkExperiances from '@/components/web-developement/e-commerce/WorkExperiances'
import React from 'react'

const Page = () => {
    return (
        <div className='w-full space-y-16 mb-20'>
            <HeroSection />
            <Services />
            <WorkExperiances />
            <DetailContent />
        </div>
    )
}

export default Page
