
import DetailContent from '@/components/web-developement/wordpress-development/DetailContent'
import HeroSection from '@/components/web-developement/wordpress-development/HeroSection'
import Services from '@/components/web-developement/wordpress-development/Services'
import WorkExperiances from '@/components/web-developement/wordpress-development/WorkExperiances'
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
