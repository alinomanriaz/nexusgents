import HeroSection from '@/components/ui-design.tsx/HeroSection'
import OurServices from '@/components/ui-design.tsx/OurServices'
import React from 'react'

const page = () => {
  return (
    <div className='w-full space-y-16'>
      <HeroSection />
      <OurServices />
    </div>
  )
}

export default page
