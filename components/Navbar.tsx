'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '../lib/utils';


const Navlinks = [
    { href: '/', label: 'Home' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className='flex gap-8 items-center text-base capitalize text-white  font-sans z-20 '>
            {Navlinks.map(item => (
                <Link 
                href={item.href} 
                key={item.href}
                className={cn(' ',pathname === item.href && 'text-lg font-bold')}
                >{item.label} </Link>
            ))}
        </div>
    )
}

export default Navbar