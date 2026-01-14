'use client';

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modetoggle";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

interface NavProps {
  id?: string;
}

export default function Nav({ id }: NavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (!heroElement) {
        setIsVisible(false);
        return;
      }

      const rect = heroElement.getBoundingClientRect();
      // Hero bottom position relative to viewport
      const heroBottom = rect.bottom;
      
      // Hide header if we're still in the hero section (hero bottom is still in viewport)
      // Show header only when hero bottom has scrolled above the viewport
      const scrolledPastHero = heroBottom <= 0;
      setIsVisible(scrolledPastHero && window.scrollY > 50);
    };

    // Check immediately
    handleScroll();

    // Also check after a small delay in case DOM isn't ready
    const timeoutId = setTimeout(handleScroll, 100);

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      id={id} 
      className={`hidden md:flex md:flex-row md:justify-between md:items-center md:py-3 md:px-12 md:bg-secondary/80 md:backdrop-blur-sm md:fixed md:top-0 md:left-0 md:right-0 md:w-full md:z-50 transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <section>
        <Link href="/">
            <h1 className="text-xl font-normal font-mono">Francisco Zuniga</h1>
        </Link>
      </section>
      <section className="flex flex-row justify-between items-center gap-4 w-1/3">
        <a href="#expertise" className="text-lg font-normal font-mono">Expertise</a>
        <a href="#projects" className="text-lg font-normal font-mono">Projects</a>
        <a href="#resume" className="text-lg font-normal font-mono">Experience</a>
      </section>
      <section className="flex flex-row justify-between gap-4 items-center">
        <Button asChild variant="default">
        <a href="/resume/Francisco Zuniga.pdf" download="Francisco Zuniga.pdf" className="text-xl font-normal font-mono">Resume</a>
        </Button>
        <ModeToggle />
      </section>
    </div>
  )
}