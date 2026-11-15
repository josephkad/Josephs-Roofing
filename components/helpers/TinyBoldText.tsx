import React, { ReactNode } from 'react'

const TinyBoldText = ({children}: {children?:ReactNode}) => {
  return (
    <p className='font-semibold text-gray-500 text-sm'>{children}</p>
  )
}

export default TinyBoldText