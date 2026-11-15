import React, { ReactNode } from 'react'

const SubHeader = ({children}: {children?:ReactNode}) => {
  return (
    <h2 className='font-semibold text-4xl tracking-wide'>{children}</h2>
  )
}

export default SubHeader