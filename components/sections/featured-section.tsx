import React from 'react'
import Heading from '../extension/Heading'
import FeaturedCarousel from '../extension/FeaturedCarousel'
import { MotionValue, useTransform,motion } from 'framer-motion'

interface FeaturedSectionProps{
  scrollYProgress:MotionValue<number>
}

const FeaturedSection = ({scrollYProgress}:FeaturedSectionProps) => {
  const scale = useTransform(scrollYProgress,[0,1],[1,0.8])
  const rotate = useTransform(scrollYProgress,[0,1],[0,-5])
  return (
      <motion.section style={{scale,rotate}} className='py-6 min-h-screen bg-slate-50 mb-20 sticky top-0 '>
        {/* <Image src='/assets/hero-section/hero-section-1.jpg' alt='' fill  className='z-5 blur-sm'/>
        <div className='absolute inset-0 bg-black z-5 opacity-50'/> */}
        <div className='container pt-24 px-2 sm:px-0 mx-auto flex flex-col relative z-10'>
          <Heading title='Featured Destinations' subTitle='' />
          <div className='py-2 '>
            <FeaturedCarousel />
          </div>
        </div>
      </motion.section>

  )
}

export default FeaturedSection