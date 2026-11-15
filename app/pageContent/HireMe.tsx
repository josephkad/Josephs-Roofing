import Container from '@/components/helpers/Container'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HireMe = () => {
  return (
    <Link href={'https://www.upwork.com/freelancers/~0165cc29166ff0b026?viewMode=1'} target='_blank'>
        <Button className='fixed lg:right-1/9 right-1/4 lg:bottom-1/6 bottom-1/5 w-50 shadow-lg z-999'>
            Hire Me | Up Work
            <ArrowRight />
        </Button>
    </Link>
  )
}

export default HireMe