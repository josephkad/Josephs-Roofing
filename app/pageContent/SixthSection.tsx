import Container from '@/components/helpers/Container'
import ContentText from '@/components/helpers/ContentText'
import SubHeader from '@/components/helpers/SubHeader'
import TinyBoldText from '@/components/helpers/TinyBoldText'
import TinyHeader from '@/components/helpers/TinyHeader'
import { Star } from 'lucide-react'
import React from 'react'

const SixthSection = () => {
  return (
    <Container className='flex flex-col items-center lg:scale-100 lg:ml-auto scale-80 -ml-9 lg:mt-20 gap-4'>
      <TinyHeader>CUSTOMER REVIEWS</TinyHeader>
      <SubHeader>What Maryland Homeowners Say</SubHeader>

      <span className='flex lg:flex-row flex-col gap-4 my-20 justify-between'>
        {[
          {text: '“They saved us over $15,000 compared to the replacement quote we got. The whole treatment was done in one afternoon and our roof looks brand new.”', from: 'Homeowner · Haymarket, VA'},
          {text: '“Lenny walked the entire roof, fixed two loose flashings before the treatment, and explained everything. Honest company — didn\'t try to sell us a new roof we didn\'t need.”', from: 'Homeowner · Bristow, VA'},
          {text: '“Our insurance company flagged our roof at renewal. After the rejuvenation treatment and tune-up we passed inspection with no issues.”', from: 'Homeowner · Manassas, VA'},
        ].map((item, index) => (
          <div className='flex flex-col border shadow-sm p-6 rounded-2xl gap-4 hoverEffect hover:scale-102' key={index}>
            <span className='flex gap-1'>
              {Array.from({length: 5}, (_, i) => (
                <Star key={i} className='text-yellow-500 fill-yellow-500 size-3' />
              ))}
            </span>
            <ContentText>{item.text}</ContentText>
            <TinyBoldText>{item.from}</TinyBoldText>
          </div>
        ))}
      </span>
    </Container>
  )
}

export default SixthSection