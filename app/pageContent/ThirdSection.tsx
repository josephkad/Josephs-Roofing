import Container from '@/components/helpers/Container'
import { Check, X } from 'lucide-react'
import React from 'react'

const ThirdSection = () => {
  return (
    <div className='bg-gray-100 p-20'>
      <Container className='flex flex-col items-center gap-5'>
        <p className='text-sm font-semibold text-second tracking-widest'>THE CHOICE IS CLEAR</p>
        <h2 className='font-semibold text-4xl'>Old Way vs. New Way</h2>
        <p className='text-gray-600 text-center w-200'>A full replacement means tearing off thousands of pounds of shingles, days of noise, a dumpster in your driveway — and a $20,000+ check. Rejuvenation skips all of it.</p>

        <span className='flex justify-between gap-10'>
          {[
            {title: 'Full Replacement', header: '$20,000–$25,000+', content: ['Messy multi-day tear-off', 'Thousands of pounds to landfill', 'Crews, noise, disruption', 'Same shingles, dried out again in 10 yrs']},
            {title: 'Roof Rejuvenation', header: 'A fraction of the cost', content: ['Clean spray treatment, done in hours', 'Eco-friendly, USDA bio-based', 'Tune-up & minor repairs included', 'Repeatable — up to 15 extra years']},
          ].map((item, index) => (
            <div className={`flex flex-col rounded-2xl ${index === 0 ? 'bg-first' : 'bg-second'} gap-3 p-10 w-130 text-white font-semibold shadow-md hoverEffect hover:scale-102`} key={index} >
              <p className='font-semibold'>{item.title}</p>
              <h2 className='text-4xl'>{item.header}</h2>
              {item.content.map((contentItem) => <span className='flex gap-1' key={contentItem}>
                {index === 0 ? <X className='text-gray-300' /> : <Check className='text-gray-300' />}
                <p>{contentItem}</p>
              </span>)}
            </div>
          ))}
        </span>
      </Container>
    </div>
  )
}

export default ThirdSection