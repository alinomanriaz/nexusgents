import BusinessGoal from '@/components/seo-page/BusinessGoal'
import HeroSection from '@/components/seo-page/HeroSection'
import SeoAnalytics from '@/components/seo-page/SeoAnalytics'
import SeoServices from '@/components/seo-page/SeoServices'
import React from 'react'

const page = () => {
  return (
    <div className='w-full space-y-16 mb-20'>
    <HeroSection />
    <SeoServices />
    <BusinessGoal />
    <SeoAnalytics />
    </div>
  )
}

export default page
