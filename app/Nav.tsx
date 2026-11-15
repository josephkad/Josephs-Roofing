import { Button } from '@/components/ui/button'
import Container from '@/components/helpers/Container'
import { Phone } from 'lucide-react'
import React from 'react'

const Nav = () => {
  return (
    <div className='fixed bg-first/70 opacity-95 top-0 z-50 backdrop-blur-md w-full'>
        <Container className='text-white flex justify-between items-center p-2 lg:gap-0' noPadding={true}>
            <button className='font-semibold lg:text-xl tracking-wide hover:scale-103 hoverEffect'>Joseph's <span className='text-second'>Roofers</span></button>
            <Button variant={'default'} className={'lg:scale-100 lg:mr-0 scale-80 mr-10'}><Phone color='red' fill='red' className=''/> (123) 456-7890 </Button>
        </Container>
    </div>
  )
}

export default Nav