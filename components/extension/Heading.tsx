import { cn } from '@/lib/utils'
import React from 'react'

interface HeadingProps{
    title:string
    subTitle:string
    className?:string
}

const Heading = ({title,subTitle,className}:HeadingProps) => {
  return (
    <div className={cn(className,'lg:ms-6')}>
        <h1 className='text-3xl md:text-5xl lg:text-6xl text-center lg:text-start  font-bold font-sans'>{title}</h1>
        <p>{subTitle}</p>
    </div>
  )
}

export default Heading