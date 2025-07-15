
import DetailContent from '@/components/app-developement/ios-development/DetailContent'
import HeroSection from '@/components/app-developement/ios-development/HeroSection'
import ImageSideDetail from '@/components/app-developement/ios-development/ImageSideDetail'
import Services from '@/components/app-developement/ios-development/Services'
import WorkExperiances from '@/components/app-developement/ios-development/WorkExperiances'
import React from 'react'

const page = () => {
  return (
    <div className='w-full space-y-16 mb-20'>
      <HeroSection />
      <Services />
      <ImageSideDetail />
      <WorkExperiances />
      <DetailContent />
    </div>
  )
}

export default page
