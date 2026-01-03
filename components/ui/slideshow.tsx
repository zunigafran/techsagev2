'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { resumeData as ResumeData } from '@/data/resumeData';

interface SlideshowProps {
  job: ResumeData;
  logoClassName?: string;
  imageClassName?: string;
}

export default function Slideshow({ job, logoClassName, imageClassName }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create array of images: logo + image1-4 (filter out empty strings)
  const images = [
    job.logo,
    job.image1,
    job.image2,
    job.image3,
    job.image4,
  ].filter(img => img && img.trim() !== '');

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7500);

    return () => clearInterval(interval);
  }, [images.length]);

  // If no images, return null or a placeholder
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full min-h-[100px] rounded-lg overflow-hidden">
      {images.map((image, index) => {
        const isLogo = image === job.logo;
        
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } ${isLogo ? 'flex items-center justify-center' : ''}`}
          >
            {isLogo ? (
              <a
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <div className={logoClassName ? `relative ${logoClassName}` : "relative w-75 h-75"}>
                  <Image
                    src={image}
                    alt={`${job.company} - Logo`}
                    fill
                    className="object-contain rounded-lg"
                    sizes="800px"
                  />
                </div>
              </a>
            ) : (
              <a
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={image}
                  alt={`${job.company} - Slide ${index + 1}`}
                  fill
                  className={imageClassName || "object-contain rounded-lg"}
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}