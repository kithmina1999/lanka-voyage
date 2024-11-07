
import HeroParallax from "@/components/Parallax/hero-section-parallax";
import ParallaxTransition from "@/components/Parallax/ParallaxTransition";
import HeroSection from "@/components/sections/hero-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import React from "react";

export default function Home() {
 

  return (
    <main className="relative">
      <HeroParallax>
        <HeroSection />
      </HeroParallax>
      <ParallaxTransition />
      <TestimonialsSection />
    </main>
  );
}
