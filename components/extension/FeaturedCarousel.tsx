'use client';

import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/extension/carousel";
import { Destinations } from "@/constants";
import useScreenSize from "@/hooks/useScreenSize";
import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const FeaturedCarousel = () => {
  const isSmallScreen = useScreenSize();
  const [cardFlipped, setCardFlipped] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  // Handle card flip with animation toggle
  const handleFlip = () => {
    if (!isAnimated) {
      setCardFlipped(!cardFlipped);
      setIsAnimated(true);
    }
  };

  return (
    <Carousel
      orientation={isSmallScreen ? "horizontal" : "vertical"}
      className="flex lg:flex-row flex-col items-center justify-center w-full"
    >
      {/* Main carousel container */}
      <div className="relative basis-1 lg:basis-5/6 mx-auto w-full shadow-md">
        <CarouselMainContainer className="h-[60vh]">
          {Destinations.map((destination, index) => (
            <SliderMainItem
              key={index}
              className="border border-muted flex flex-col items-center justify-center h-[60vh] rounded-md"
            >
              <div className="w-full flex flex-row items-center relative">
                
                {/* Image and description container for mobile view */}
                <motion.div
                  initial={false}
                  animate={{ rotateY: cardFlipped ? 180 : 0 }}
                  transition={{ duration: .6 }}
                  onAnimationComplete={() => setIsAnimated(false)}
                  className="lg:w-3/5 w-full h-[60vh] lg:hidden block backface-hidden absolute rotateY-180"
                  onClick={handleFlip}
                >
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </motion.div>

                {/* Image container for large screen */}
                <div className="lg:w-3/5 h-[60vh] hidden lg:block relative">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover rounded-md hover:brightness-125 transition-all ease-in-out duration-500"
                  />
                </div>

                {/* Text description container for large screen */}
                <div className="relative hidden lg:block lg:w-2/5">
                  <div className="w-full flex items-center justify-center lg:relative translate-y-0">
                    <div className="container flex flex-col space-y-4">
                      <h1 className="capitalize text-center font-bold text-3xl tracking-tight">
                        {destination.name}
                      </h1>
                      <p className="w-2/3 text-center mx-auto text-muted-foreground tracking-tight">
                        {destination.description}
                      </p>
                      <div className="text-center bg-[#27272c] font-semibold text-white py-2">
                        <span className="font-normal text-slate-100">Location: </span>
                        {destination.location}
                      </div>
                      <p className="flex justify-center gap-2">
                        {destination.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="p-1 px-3 text-white font-semibold bg-gradient-to-tr from-[#074173] to-[#5DEBD7] rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </p>
                      <p className="flex items-center justify-center gap-2 font-bold">
                        <Star className="h-4 text-amber-300" />
                        {destination.rating} Stars
                      </p>
                      <Button variant="linkHover1" className="w-[50%] mx-auto">
                        {destination.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Motion container for mobile description */}
                <motion.div
                  onClick={handleFlip}
                  initial={false}
                  animate={{ rotateY: cardFlipped ? 0 : 180 }}
                  transition={{ duration: 0.6 }}
                  onAnimationComplete={() => setIsAnimated(false)}
                  className="lg:hidden w-full absolute backface-hidden rotateY-180"
                >
                  <div className="w-full flex items-center justify-center">
                    <div className="container flex flex-col space-y-4">
                      <h1 className="capitalize text-center font-bold text-3xl tracking-tight">
                        {destination.name}
                      </h1>
                      <p className="w-2/3 text-center mx-auto text-muted-foreground tracking-tight">
                        {destination.description}
                      </p>
                      <div className="text-center bg-[#27272c] font-semibold text-white py-2">
                        <span className="font-normal text-slate-100">Location: </span>
                        {destination.location}
                      </div>
                      <p className="flex justify-center gap-2">
                        {destination.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="p-1 px-3 text-white font-semibold bg-gradient-to-tr from-[#074173] to-[#5DEBD7] rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </p>
                      <p className="flex items-center justify-center gap-2 font-bold">
                        <Star className="h-4 text-amber-300" />
                        {destination.rating} Stars
                      </p>
                      <Button variant="linkHover1" className="w-[50%] mx-auto">
                        {destination.buttonText}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
      </div>

      {/* Thumbnail container */}
      <CarouselThumbsContainer className="w-[80vw] xl:w-[10vw] xl:h-[80vh] xl:basis-1/6 gap-3">
        {Destinations.map((destination, index) => (
          <SliderThumbItem
            key={index}
            index={index}
            className="rounded-md bg-transparent"
          >
            <span className="border bg-transparent border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer">
              <Image src={destination.image} alt={destination.name} width={100} height={100} className="aspect-square hover:brightness-110 hover:scale-110 transition-all ease-in-out duration-500" />
            </span>
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export default FeaturedCarousel;
