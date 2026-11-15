import Container from '@/components/helpers/Container'
import React from 'react'

const FirstSection = () => {
  return (
    <div className='bg-second h-fit'>
      <Container className='lg:flex grid grid-cols-2 justify-between'>
        {[
          {title: '80%', text: 'Savings vs. Replacement'},
          {title: '15 Yrs', text: 'Added Roof Life'},
          {title: '5 - Year', text: 'Transferable Warranty'},
          {title: '100%', text: 'Safe for Family & Pets'},
        ].map((item, index) => (
          <div className='flex flex-col items-center p-4 gap-2' key={index}>
            <h2 className='lg:text-4xl text-xl font-semibold text-white'>{item.title}</h2>
            <p className='text-sm text-white text-center'>{item.text}</p>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default FirstSection