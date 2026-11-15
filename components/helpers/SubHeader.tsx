import React, { ReactNode } from 'react'

const SubHeader = ({children}: {children?:ReactNode}) => {
  return (
    <h2 className='font-semibold lg:text-4xl text-xl text-center tracking-wide'>{children}</h2>
  )
}

export default SubHeader