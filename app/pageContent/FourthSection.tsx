import Container from '@/components/helpers/Container'
import React from 'react'

const FourthSection = () => {
  return (
    <Container className='flex flex-col items-center gap-2 lg:my-20 lg:scale-100 lg:ml-auto scale-70 -ml-10'>
      <p className='font-semibold text-second'>SIMPLE PROCESS</p>
      <p className='font-semibold text-4xl tracking-wide'>How It Works</p>

      <span className='flex lg:flex-row flex-col justify-between gap-4 my-10'>
        {[
          {title: 'Free Roof Assessment', text: 'We secure loose shingles, re-seal flashings, and fix nail pops before treatment — included.'},
          {title: 'Roof Tune-Up', text: 'We secure loose shingles, re-seal flashings, and fix nail pops before treatment — included.'},
          {title: 'Rejuvenation Treatment', text: 'A plant-based bio-oil spray penetrates the shingles, restoring flexibility and waterproofing.'},
          {title: '5-Year Warranty', text: 'Every treatment carries a 5-year transferable warranty. Repeat every 5 years for up to 15 extra years.'}
        ].map((item, index) => (
          <div key={index} className='flex flex-col border p-4 rounded-2xl gap-2 hoverEffect hover:scale-102 shadow-sm'>
            <p className='bg-first p-5 rounded-full w-1 h-1 flex items-center justify-center font-semibold text-white'>{index + 1}</p>
            <p className='font-semibold text-md'>{item.title}</p>
            <p className='gray-400 text-sm'>{item.text}</p>
          </div>
        ))}
      </span>
    </Container>
  )
}

export default FourthSection