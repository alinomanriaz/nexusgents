import DetailContent from '@/components/web-developement/custom-development/DetailContent'
import HeroSection from '@/components/web-developement/custom-development/HeroSection'
import Services from '@/components/web-developement/custom-development/Services'
import WorkExperiances from '@/components/web-developement/custom-development/WorkExperiances'

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
