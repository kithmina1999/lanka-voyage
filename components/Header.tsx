
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/public/assets/logo.png'
import React from 'react'
import Navbar from './Navbar'

export default function Header() {

    return (
        <div className='fixed w-full py-4 shadow-md backdrop-blur-sm hover:backdrop-blur-lg z-[50] transition-all duration-300 ease-in-out bg-black/80'>
        <div className='container mx-auto px-5 sm:px-0'>
            <div className='flex justify-between items-center'>
                {/* Logo and Title */}
                <div className='flex justify-center items-center cursor-pointer'>
                    <Image src={Logo} alt='logo' height={50} width={50} />
                    <h1 className='text-2xl lg:text-4xl tracking-tight py-1 font-black font-sans bg-gradient-to-t from-[#074173] to-[#5DEBD7] text-transparent bg-clip-text'>LankaVoyage</h1>
                </div>
                {/* Mobile Menu Icon */}
                <div className='lg:hidden'>
                    <Menu className='h-5 w-5 cursor-pointer text-white' />
                </div>
                {/* Navbar */}
                <div className='lg:block hidden'>
                    <Navbar />
                </div>
            </div>
        </div>
    </div>
    )
}
