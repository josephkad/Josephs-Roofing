import Container from '@/components/helpers/Container'
import SubHeader from '@/components/helpers/SubHeader'
import TinyHeader from '@/components/helpers/TinyHeader'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const EightSection = () => {
  return (
    <Container className='flex flex-col gap-4 items-center my-20'>
      <TinyHeader>QUESTIONS</TinyHeader>
      <SubHeader>Frequently Asked Questions</SubHeader>
      <Accordion className={'gap-4 items-center mt-10'}>
        {[
          {title: 'Does roof rejuvenation really work?', content: 'Yes. The treatment is a plant-based bio-oil that penetrates aging asphalt shingles and restores the flexibility and waterproofing oils they lose over time — independently lab-tested and used on hundreds of thousands of roofs across the U.S. Each treatment adds up to 5 years of life, repeatable up to 3 times for 15 extra years.'},
          {title: 'How much does it cost compared to a new roof?', content: 'A typical roof replacement in Gainesville runs $20,000–$25,000+. Rejuvenation costs a fraction of that — usually around 20% of replacement cost — and is done in hours, not days.'},
          {title: 'What about my homeowner\'s insurance?', content: 'Insurance companies are increasingly dropping or surcharging homes with aging roofs. A documented tune-up and rejuvenation treatment can help your roof pass inspection and extend its insurable life.'},
          {title: 'Is it safe for my family, pets, and plants?', content: 'Yes — the treatment is a USDA-certified bio-based product, 100% safe for people, pets, and landscaping.'},
          {title: 'How do I know if my roof qualifies?', content: 'We do a free assessment: Lenny inspects your shingles, checks granule loss and flexibility, and tells you honestly whether rejuvenation makes sense — or whether you genuinely need a replacement. No cost, no obligation.'},
          {title: 'What areas do you serve?', content: 'We serve Gainesville and everywhere within about 40 miles, including Haymarket, Bristow, Manassas, Warrenton, Centreville, Nokesville and Gainesville.'},
        ].map((item, index) => (
          <AccordionItem key={index} value={item.title} className={'bg-white rounded-2xl shadow-sm p-6 lg:w-200 hoverEffect hover:scale-102'}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent className='text-sm text-gray-400'>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  )
}

export default EightSection