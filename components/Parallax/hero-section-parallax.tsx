'use client'
import React from 'react'
import Plx from 'react-plx';

const HeroParallax = ({children}:{children:React.ReactNode}) => {

     // An array of parallax effects to be applied - see below for detail
const parallaxData = [
    {
      start: 0,
      end: 800,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: "scale",
        },
      ],
    },
  ];
  return (
    <Plx parallaxData={parallaxData}>
        {children}
    </Plx>
  )
}

export default HeroParallax