import Container from '@/components/helpers/Container'
import ContentText from '@/components/helpers/ContentText'
import SubHeader from '@/components/helpers/SubHeader'
import TinyHeader from '@/components/helpers/TinyHeader'
import React from 'react'

const FifthSection = () => {
  return (
    <div className='bg-gray-100'>
      <Container className='flex flex-col items-center p-20'>
        <span className='flex flex-col gap-2 items-center'>
          <TinyHeader>REAL RESULTS</TinyHeader>
          <SubHeader>Before & After</SubHeader>
          <ContentText>The difference one treatment makes</ContentText>
        </span>

        <span className='flex lg:flex-row flex-col justify-between gap-10 my-10'>
          {[
            'https://tse4.mm.bing.net/th/id/OIP.SzhVzVBXe4mDnP9ta0M_CAHaFS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            'https://tse3.mm.bing.net/th/id/OIP.RcljoRS8SFr4IDR7slgqFwHaFS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            'https://tse2.mm.bing.net/th/id/OIP.1EvIvfPAGaXutznA1dJhVAHaEI?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
          ].map((item, index) => <div className={`p-3 w-100 shadow-sm bg-white rounded-2xl hoverEffect hover:scale-102 ${index === 0 ? 'hover:-rotate-2' : index === 1 ? 'hover:rotate-2' : 'hover:-rotate-3'}`} key={index}>
            <img src={item} className='rounded-2xl w-full h-full' />
          </div>)}
        </span>
      </Container>
    </div>
  )
}

export default FifthSection