'use client'
import Container from '@/components/helpers/Container'
import ContentText from '@/components/helpers/ContentText'
import TinyHeader from '@/components/helpers/TinyHeader'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { toast, ToastProvider } from '@/components/ui/toast'
import { ArrowRight, Phone } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'

type fieldType = {
    name: string,
    phone: string,
    email: string,
    street: string,
    check: boolean,
}

const NinthSection = () => {
    const [field, setField] = useState<fieldType>({
        name: '',
        phone: '',
        email: '',
        street: '',
        check: false,
    });

    const submit = (e: ChangeEvent) => {
        e.preventDefault();
        setField({
            name: '',
            phone: '',
            email: '',
            street: '',
            check: false,
        })

        toast.add({
            type: 'success',
            title: 'Successfully sent'
        })
    }

  return (
    <div className='bg-first/90'>
        <Container className='flex flex-col gap-6 items-center lg:p-20 lg:scale-100 lg:ml-auto scale-80 -ml-8'>
            <span className='flex flex-col items-center gap-2'>
                <TinyHeader>FREE · NO OBLIGATION</TinyHeader>
                <h2 className='text-white font-semibold text-3xl'>See If Your Roof Qualifies</h2>
                <p className='text-center text-white/70 lg:w-150 w-100'>Not every roof is a candidate — that's exactly why the assessment is free. Joseph will tell you straight whether rejuvenation makes sense for your home.</p>
            </span>

            <form onSubmit={submit} className='flex flex-col gap-6 items-center'>
                <span className='lg:grid flex flex-col grid-cols-2 gap-3'>
                    {[
                        {text: 'Full name *', type: 'string', required: true, valueName: 'name'},
                        {text: 'Phone *', type: 'number', required: true, valueName: 'phone'},
                        {text: 'Email', type: 'email', required: false, valueName: 'email'},
                        {text: 'Street address, city', type: 'string', required: false, valueName: 'street'},
                    ].map((item, index) => (
                        <Input value={field[item.valueName as keyof fieldType] as string} onChange={(e) => setField(prev => ({...prev, [item.valueName]: e.target.value}))} key={index} className='hover:scale-102' placeholder={item.text} type={item.type || 'string'} required={item.required} />
                    ))}
                </span>

                <span className='flex gap-2 items-center text-gray-400'>
                    <Checkbox checked={field.check} onCheckedChange={e => setField(prev => ({...prev, check: e}))} required />
                    <p className='lg:text-md text-xs lg:w-fit w-70'>By checking this box, I agree to recieve SMS text messages from Josephs Roofers</p>
                </span>

                <Button type='submit' className={'lg:w-150'}>Get My Free Assessment <ArrowRight /></Button>
                <p className='text-gray-400'>Free assessment · No obligation · Joseph will reach out within 1 business day.</p>
                <Button variant={'outline'} className={'text-white'}><Phone />Or call (123) 456-7890</Button>
            </form>
        </Container>
    </div>
  )
}

export default NinthSection