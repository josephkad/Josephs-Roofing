import React, { ReactNode } from 'react'

const TinyHeader = ({children}: {children?:ReactNode}) => {
  return (
    <p className='font-semibold text-second'>{children}</p>
  )
}

export default TinyHeader