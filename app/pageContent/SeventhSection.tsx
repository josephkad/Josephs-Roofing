import Container from '@/components/helpers/Container'
import ContentText from '@/components/helpers/ContentText'
import SubHeader from '@/components/helpers/SubHeader'
import TinyHeader from '@/components/helpers/TinyHeader'
import { Badge } from '@/components/ui/badge'
import React from 'react'

const SeventhSection = () => {
  return (
    <div className='bg-gray-100'>
      <Container className='flex flex-col items-center p-20 gap-10'>
        <span className='flex flex-col items-center gap-2'>
          <TinyHeader>SERVICE AREA</TinyHeader>
          <SubHeader>Proudly Serving Landover &<br/> Surrounding Areas</SubHeader>
          <ContentText>Within roughly 40 miles of Landover:</ContentText>
        </span>
        <span className='flex  flex-wrap justify-center gap-2 w-[calc(60%)]'>
          {[
            'Cheverly, MD',
            'Kentland, MD',
            'Tuxedo, MD',
            'Glenarden, MD',
            'Bladensburg, MD',
            'Greenbelt, MD',
            'Bethesda, MD',
          ].map((item, index) => <Badge variant={'default'} key={index}>{item}</Badge>)}
        </span>
        <div className="flex w-full flex-wrap justify-center gap-4">
      </div>
      </Container>
    </div>
  )
}

export default SeventhSection