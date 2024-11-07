'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import picture1 from '@/public/assets/hero-section/hero-section-1.jpg'
import picture2 from '@/public/assets/hero-section/hero-section-2.jpg'
import picture3 from '@/public/assets/hero-section/hero-section-3.jpg'
import picture4 from '@/public/assets/hero-section/hero-section-4.jpg'
import picture5 from '@/public/assets/hero-section/hero-section-5.jpg'
import picture6 from '@/public/assets/hero-section/hero-section-6.jpg'
import picture7 from '@/public/assets/hero-section/hero-section-7.jpg'
import { useScroll, useTransform, motion } from 'framer-motion'

const ZoomParallax = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale7 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale10 = useTransform(scrollYProgress, [0, 1], [1, 4])

    const positions = [
        'top-[-20vh] left-[25vw] w-[17vw] h-[35vh]',       // Top Left
        'top-[-15vh] left-[-25vw] w-[20vw] h-[35vh]',     // Top Right
        'w-[25vw] h-[25vh]',      // Middle Left
        'top-[32.5vh] left-[2vw] w-[30vh] h-[35vh]', // Center
        'top-[27.5vh] left-[-22.5vw] w-[35vh] h-[45vh]',     // Middle Right
        'top-[22.5vh] left-[25vw] w-[30vh] h-[45vh]',    // Bottom Left
        'top-[-30vh]  w-[45vh] h-[30vh]',   // Bottom Right
    ]

    const pictures = [
        {
            src: picture4,
            scale: scale4
        },
        {
            src: picture2,
            scale: scale5
        },
        {
            src: picture3,
            scale: scale6
        },
        {
            src: picture5,
            scale: scale7
        },
        {
            src: picture7,
            scale: scale8
        },
        {
            src: picture6,
            scale: scale9
        },
        {
            src: picture1,
            scale: scale10
        },
    ]
    return (
        <div ref={containerRef} className='h-[300vh]  relative'>
            <div className='sticky top-0 h-[100vh] overflow-hidden bg-slate-900'>
                <div className='grid grid-cols-3 w-full '>
                  {

                    pictures.map(({src,scale}, index) => {
                        return (
                        <div key={index} className='w-full h-full col-span-1'>
                            <motion.div
                                style={{ scale}}
                                className={`w-[25vh] h-[25vh] relative`}>
                                <Image
                                    src={src}
                                    alt='hero-image'
                                    fill
                                    placeholder='blur'
                                    className='object-fit-cover'
                                />
                            </motion.div>
                        </div>)
                    })

                }   
                </div>
               

            </div>
        </div>
    )
}

export default ZoomParallax