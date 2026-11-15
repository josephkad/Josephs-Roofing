import React, { ReactNode } from 'react'

const ContentText = ({children}: {children?:ReactNode}) => {
  return (
    <p className='text-gray-600 text-sm'>{children}</p>
  )
}

export default ContentText