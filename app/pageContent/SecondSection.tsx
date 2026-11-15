import Container from '@/components/helpers/Container'
import { BrickWall, TriangleExclamationPoint } from 'lucide-react'
import React from 'react'

const SecondSection = () => {
  return (
    <Container>
      <div className='flex justify-between p-6 my-10 gap-10'>
        <span className='flex flex-col gap-4 w-1/2'>
          <p className='font-semibold text-second'>THE PROBLEM</p>
          <h2 className='font-semibold text-4xl'>Your Roof Is Aging Faster Than You Think.</h2>
          <p className='text-muted-foreground'>Every asphalt shingle starts out with oils that keep it soft and flexible. Sun and heat slowly bake those oils out, and what’s left is a hard, fragile surface that can’t handle a storm. The roof can look fine from the driveway while the damage is already underway.</p>
          <p className='text-muted-foreground'>The good news is that you don’t have to tear it all off. Catching the problem early and restoring your shingles costs a fraction of a new roof and adds years to the one you have.</p>
          <div className='bg-teal-100/40 p-4 border border-teal-100/40 shadow-sm rounded-xl hoverEffect hover:scale-102'>
            <p className='text-sm'><span className='flex items-center gap-2 text-second font-semibold'><TriangleExclamationPoint className='text-second font-semibold' />Insurers in Maryland are paying closer attention to roof age.</span><span>Some are raising premiums or declining to renew when a roof looks worn. Keeping a dated inspection report and a record of professional treatment gives you proof that your roof is maintained and in good shape.</span></p>
          </div>
        </span>
        <div className='flex flex-col gap-4 w-1/2 p-6'>
          {[
            {icon: '🧱', title: 'Gritty gutters', text: 'Sandy granules collecting in your downspouts mean the shingle surface is wearing away.'},
            {icon: '🌡️', title: 'Lifted or warped edges', text: 'Shingles that curl up or cup have lost their flexibility.'},
            {icon: '💧', title: 'Dark stains and streaks', text: 'These often point to moisture and surface breakdown.'},
            {icon: '📄', title: 'Ceiling spots or musty attics', text: 'Water is already finding its way in.'},
          ].map((item, index) => (
            <div key={index} className='flex border rounded-xl p-6 gap-2 shadow-sm hoverEffect hover:scale-102'>
              <p>{item.icon}</p>

              <span className='flex flex-col gap-2 text-md'>
                <h2 className='font-semibold'>{item.title}</h2>
                <p className='text-muted-foreground text-sm'>{item.text}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default SecondSection