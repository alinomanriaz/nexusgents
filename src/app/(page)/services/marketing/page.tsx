import BusinessPlanning from '@/components/marketing-page/BusinessPlanning'
import ContentCreation from '@/components/marketing-page/ContentCreation'
import CraftingSolution from '@/components/marketing-page/CraftingSolution'
import HeroSectionMarketing from '@/components/marketing-page/HeroSectionMarketing'
import SecondSection from '@/components/marketing-page/SecondSection'
import React from 'react'

const page = () => {
  return (
    <div className='w-full space-y-16 mb-20'>
      <HeroSectionMarketing />
      <SecondSection />
      <ContentCreation />
      <BusinessPlanning />
      <CraftingSolution />
    </div>
  )
}

export default page
