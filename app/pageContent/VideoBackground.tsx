import React from 'react'

import roofersVideo from '@/videos/roofersVideo.mp4';
import Video from 'next-video';
import { ArrowRight, Check, Dot, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/components/helpers/Container';
import { Badge } from '@/components/ui/badge';
{/* <div className='relative w-screen h-200 overflow-hidden select-none'>
      <div className='absolute top-0 w-full h-full bg-blue-950/70 backdrop-blur-sm -z-1' />
      <div className='absolute top-0 -z-2 w-full h-full object-cover'>     
        <Video
        src={roofersVideo}
        autoplay
        muted
        loop
        playsInline
        controls={false}
        className='w-full h-full object-cover'
        />
      </div>

      <Container className='w-full h-full flex items-center justify-between gap-20'>
        <span className='flex flex-col gap-6 text-white'>
          <Badge variant={'outline'}>CERTIFIED ROOF REPAIR <Dot /> HYATTSVILLE, MARYLAND</Badge>
          <h2 className='text-5xl font-semibold'>Think You Need a New <br />Roof? <span className='text-second'>Think Again.</span></h2>
          <p className='w-140 text-lg text-white/80'>Joseph's Roofers restores aging asphalt shingles for <span className='font-semibold text-white'>up to 80% less than replacement</span>—  adding <span className='font-semibold text-white'>up to 15 years of life to the roof you already have. Done in hours, not days.</span></p>
          <span className='flex gap-2'>
            <Button className={'drop-shadow-lg drop-shadow-second/30'}>Get My Free Roof Assessment <ArrowRight /></Button>
            <Button variant={'outline'}><Phone />Call Joseph</Button>
          </span>
          <span className='grid grid-cols-2 gap-4 w-fit'>
            {[
              'Licensed & Insured',
              'Certified Applicator',
              'Local Maryland Team',
              'USDA Bio-Based',
            ].map((item, index) => (
              <Badge variant={'outline'} key={index}><Check />{item}</Badge>
            ))}
          </span>
        </span>

        <div className='rotate-3 bg-white w-full h-150 flex flex-col p-4 rounded-xl items-center gap-5 hover:scale-103 hover:rotate-2 hoverEffect'>
          <img src={'https://tse2.mm.bing.net/th/id/OIP.i-6HtPaTnPtsrAgq24SOvwHaJH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'} className='rounded-xl' />
          <p className='text-sm font-semibold text-gray-400'>BEFORE & AFTER — one rejuvenation treatment</p>
        </div>
      </Container>
    </div> */}
const VideoBackground = () => {
  return (
    <div className='relative w-full lg:h-200 overflow-hidden select-none'>
      <div className='absolute top-0 w-full h-full bg-blue-950/70 backdrop-blur-sm -z-1' />
      <div className='absolute top-0 -z-2 :w-full h-full object-cover'>     
        <Video
        src={roofersVideo}
        autoplay
        muted
        loop
        playsInline
        controls={false}
        className='w-full h-full object-cover'
        />
      </div>

      <Container className='w-full h-full flex lg:flex-row flex-col items-center justify-between gap-20'>
        <span className='flex flex-col gap-6 text-white lg:mt-0 mt-20'>
          <Badge variant={'outline'} className='lg:scale-100 scale-70'>CERTIFIED ROOF REPAIR <Dot /> HYATTSVILLE, MARYLAND</Badge>
          <h2 className='lg:text-5xl text-3xl font-semibold'>Think You Need a New <br />Roof? <span className='text-second'>Think Again.</span></h2>
          <p className='lg:w-140 lg:text-lg text-white/80'>Joseph's Roofers restores aging asphalt shingles for <span className='font-semibold text-white'>up to 80% less than replacement</span>—  adding <span className='font-semibold text-white'>up to 15 years of life to the roof you already have. Done in hours, not days.</span></p>
          <span className='flex gap-2'>
            <Button className={'drop-shadow-lg drop-shadow-second/30'}>Get My Free Roof Assessment <ArrowRight /></Button>
            <Button variant={'outline'}><Phone />Call Joseph</Button>
          </span>
          <span className='grid grid-cols-2 gap-4 w-fit'>
            {[
              'Licensed & Insured',
              'Certified Applicator',
              'Local Maryland Team',
              'USDA Bio-Based',
            ].map((item, index) => (
              <Badge variant={'outline'} key={index}><Check />{item}</Badge>
            ))}
          </span>
        </span>

        <div className='rotate-3 bg-white w-full lg:h-fit flex flex-col p-4 rounded-xl items-center gap-5 hover:scale-103 hover:rotate-2 hoverEffect'>
          <img src={'https://tse2.mm.bing.net/th/id/OIP.i-6HtPaTnPtsrAgq24SOvwHaJH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'} className='rounded-xl' />
          <p className='text-sm font-semibold text-gray-400'>BEFORE & AFTER — one rejuvenation treatment</p>
        </div>
      </Container>
    </div>
  )
}

export default VideoBackground