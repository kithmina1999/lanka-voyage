'use client'
import React from 'react'
import HeroImage from '@/public/assets/hero-section/hero-section-1.jpg'
import HeroImage1 from '@/public/assets/hero-section/hero-section-2.jpg'
import HeroImage2 from '@/public/assets/hero-section/hero-section-3.jpg'
import HeroImage3 from '@/public/assets/hero-section/hero-section-4.jpg'
import HeroCarousel from '../extension/HeroCarousel'
import { Button } from '../ui/button'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const images = [
    HeroImage, HeroImage1, HeroImage2, HeroImage3
]

const HeroSection = () => {
    const { scrollY } = useScroll()
    // Separate opacity transforms for content and overlay
    const overlayOpacity = useTransform(scrollY, [0, 500], [0.5, 0])
    const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])

    return (
        <section className='h-screen relative' id='herosection'>
            <motion.div
                style={{ opacity:contentOpacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full w-full"
            >
                <HeroCarousel images={images} />
            </motion.div>
            {/* Dark Overlay */}
            <motion.div
                style={{ opacity:overlayOpacity }}
                className="absolute inset-0 bg-black z-5" />

            {/* Overlay Content */}
            <motion.div
                style={{ opacity:contentOpacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 xl:translate-y-4/5 lg:translate-y-3 -translate-y-10 z-15 text-center text-white ">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Discover Your Adventure</h1>
                <p className="mt-4 text-lg lg:text-xl">Explore the beauty of Lanka with us</p>
                <Button
                    variant='shine'
                    size='xl'
                    className="w-[10vw] mt-6 inline-block bg-gradient-to-br from-[#074173] to-[#5DEBD7]   text-white font-semibold py-2 px-4 rounded">
                    <Link href=''>Get Started</Link>
                </Button>
            </motion.div>

        </section>
    )
}

export default HeroSection