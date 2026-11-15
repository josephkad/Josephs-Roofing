import React, { ReactNode } from 'react'

const Container = ({className, children, noPadding}: {className?: string, children?: ReactNode, noPadding?: boolean}) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-25 ${className} ${!noPadding && 'p-4'}`}>
        {children}
    </div>
  )
}

export default Container