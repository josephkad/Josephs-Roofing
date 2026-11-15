import Container from '@/components/helpers/Container'
import { Button } from '@/components/ui/button'
import { Mail, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-first'>
      <Container className='flex lg:flex-row flex-col lg:flex-start items-center lg:text-start text-center justify-between gap-4 p-20 text-white'>
        <span>
          <p className='font-semibold'>Josephs Roofers</p>
          <p className='text-gray-400 text-sm'>0000 Landover, This Road, MD 12345 · Licensed & Insured</p>
        </span>

        <span className='flex flex-col text-sm text-gray-400 gap-2'>
          <button className='flex items-center gap-2'>
            <Phone />
            <p>(123) 456-7890</p>
          </button>
          <button className='flex items-center gap-2'>
            <Mail />
            <p>thisemail123@gmail.com</p>
          </button>
        </span>

        <span className='flex flex-col text-sm gap-2'>
          <p className='text-gray-400'>Mon–Fri 8am–6pm · Sat 9am–3pm</p>
          <p className='text-gray-400'>©Josephs Roofers. All rights reserved.</p>
          <span className='my-2 flex'>
            {['Privacy Policy', 'Terms & Conditions', 'SMS Program'].map((text, index) => <Button className={'text-white'} key={index} variant={'link'}>{text}</Button>)}
          </span>
        </span>
      </Container>
    </div>
  )
}

export default Footer