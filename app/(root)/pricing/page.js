import Pricing from '@/components/pricing/Pricing'
import FAQSection from '@/components/shared/FAQSection'
import React from 'react'

const page = () => {
  return (
    <div className='md:px-0 px-4'>
      <div className='pt-12'>
        <Pricing />
      </div>
      <div className='pt-12'>
        <FAQSection />
      </div>
    </div>
  )
}

export default page
