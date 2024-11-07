'use client'
import React, { useEffect, useRef } from 'react'
import FeaturedSection from '../sections/featured-section'
import TopExperienceSection from '../sections/topExperience-section'
import { useScroll } from 'framer-motion'

const ParallaxTransition = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    useEffect(()=>{

    },[])


    return (
        <div ref={container} className='relative bg-slate-900'>
            <FeaturedSection scrollYProgress={scrollYProgress} />
            <TopExperienceSection scrollYProgresss={scrollYProgress} />
        </div>
    )
}

export default ParallaxTransition