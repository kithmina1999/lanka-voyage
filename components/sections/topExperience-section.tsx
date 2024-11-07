'use client'
import React, { useEffect, useRef } from 'react'
import Heading from '../extension/Heading'
import { MotionValue, useTransform, motion, useScroll } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import grid1 from '@/public/assets/grid/grid-1.jpg'
import grid2 from '@/public/assets/grid/grid-2.jpg'
import grid3 from '@/public/assets/grid/grid-3.jpg'
import grid4 from '@/public/assets/grid/grid-4.jpg'
import grid5 from '@/public/assets/grid/grid-5.jpg'
import grid6 from '@/public/assets/grid/grid-6.jpg'
import grid7 from '@/public/assets/grid/grid-7.jpg'
import grid8 from '@/public/assets/grid/grid-8.jpg'
import grid9 from '@/public/assets/grid/grid-9.jpg'

import Lenis from 'lenis'
import useDimension from '@/hooks/useDimension'
import { cn } from '@/lib/utils'

const images = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9]

interface TopExperienceSectionProps {
  scrollYProgresss: MotionValue<number>
}

const TopExperienceSection = ({ scrollYProgresss }: TopExperienceSectionProps) => {
  const container = useRef(null)
  const {height,width} = useDimension()
  const{scrollYProgress}  = useScroll({
    target:container,
    offset:['center end','end center']
  })
  const y1 = useTransform(scrollYProgress, [0,1],[0,height*3.2])
  const y2 = useTransform(scrollYProgress, [0,1],[0,height*3])
  const y3 = useTransform(scrollYProgress, [0,1],[0,height*3.5])
  const y4 = useTransform(scrollYProgress, [0,1],[0,height*3])

  useEffect(()=>{
      const lenis = new Lenis()
      function raf(time:number){
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
  },[])

  const scale = useTransform(scrollYProgresss, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgresss, [0, 1], [.1, 0])
  return (
    <motion.section style={{ scale, rotate }} className='relative h-full z-[30] bg-slate-900'>
      <div className='mx-auto'>

        <Heading title='Top Experiences' subTitle='' className='text-white font-black py-6' />
        <div ref={container} className='h-[175vh] bg-gradient-to-b from-[#074173] to-[#5DEBD7] flex flex-row gap-[2vw] box-border relative overflow-hidden'>
          <Column images={[images[0], images[1], images[2]]} y={y1} className='-top-[45%]'/>
          <Column images={[images[3], images[4], images[5]]} y={y2} className='-top-[55%]'/>
          <Column images={[images[6], images[7], images[8]]} y={y3} className='-top-[65%]'/>
        </div>

      </div>
    </motion.section>
  )
}

export default TopExperienceSection


const Column = ({ images,y,className }: { images: StaticImageData[]; y:MotionValue<number>; className?:string }) => {
  return (
    <motion.div 
    style={{y}}
    className='w-[33%] h-full flex flex-col gap-[2vw]'>
      {
        images.map((image, index) => {
          return <div key={index} className={cn('w-full h-[33%] relative min-w-[250px] rounded-[1vw] overflow-hidden group',className)}>
            <Image
              src={image.src}
              fill
              alt='grid image'
              className='object-cover group-hover:opacity-5 transition-opacity ease-in-out duration-500'
            />
            <div className='absolute w-full h-full bg-[#ffffff] flex items-center justify-center opacity-0 group-hover:opacity-90 ease-in-out duration-500'>
                <p>Wild life</p>
            </div>
          </div>
        })
      }
    </motion.div>
  )
}