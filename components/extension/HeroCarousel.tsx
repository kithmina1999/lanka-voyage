'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

interface CarouselProps {
    images: StaticImageData[];
}

const HeroCarousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };
    // Auto-increment current index every 60 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(newIndex);
        }, 60*1000); // Change slide every 60 seconds

        return () => {
            clearInterval(interval); // Clear interval on component unmount
        };
    }, [currentIndex, images.length]);

    return (
        <div className="relative w-full ">
            <div className="flex justify-center items-center">
                <button
                    onClick={handlePrev}
                    className="absolute left-0 p-2 bg-black text-white rounded-full"
                >
                    &lt;
                </button>
                <div className="overflow-hidden w-full relative">
                    <div
                        className="flex transition-transform duration-1000 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="min-w-full">
                                <Image src={image} alt={`Slide ${index}`} className="object-cover w-full h-screen overflow-hidden" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-10 w-full flex justify-center mt-2 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-slate-50' : 'bg-slate-900'}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HeroCarousel;
