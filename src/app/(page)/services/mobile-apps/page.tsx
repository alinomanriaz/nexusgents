import DetailContent from '@/components/app-developement/DetailContent'
import HeroSection from '@/components/app-developement/HeroSection'
import ImageSideDetail from '@/components/app-developement/ImageSideDetail'
import Services from '@/components/app-developement/Services'
import WorkExperiances from '@/components/app-developement/WorkExperiances'
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
