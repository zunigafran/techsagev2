'use client';

import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import TealDot from '@/components/ui/tealdot';
import { resumeData } from '@/data/resumeData';

export default function WorkHistoryAccordion() {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  return (
    <>    
    <div className="w-full max-w-4xl mx-auto min-h-screen md:p-8">
      <h1 className="text-4xl font-bold mb-8">Work History</h1>
      
      <Accordion 
        type="multiple" 
        className="w-full space-y-4"
        value={openItems}
        onValueChange={setOpenItems}
      >
        {resumeData.map((job) => {
          const isOpen = openItems.includes(job.id);
          
          return (
            <AccordionItem 
              key={job.id} 
              value={job.id}
              className="border-none"
            >
              <div className="relative" id="white-line">
                {/* Vertical line container - positioned 8px below the dot */}
                <div className="absolute left-[4px] w-[4px] bg-primary overflow-hidden" style={{ top: '40px', bottom: 0 }}>
                  <div 
                    className={`w-full bg-primary transition-all duration-500 ease-out ${
                      isOpen ? 'h-full opacity-100' : 'h-8 opacity-30'
                    }`}
                    style={{ transformOrigin: 'top' }}
                  />
                </div>

                <AccordionTrigger className="hover:no-underline py-4 pr-4 pl-0">
                  <div className="flex items-start gap-3 text-left w-full">
                    {/* Animated dot */}
                    <div className="relative shrink-0 mt-1.5">
                      <div 
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isOpen ? 'bg-teal-400' : 'bg-gray-400'
                        }`}
                      />
                      {isOpen && (
                        <>
                        <TealDot />
                        </>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                        <h3 className="text-lg font-semibold">
                          {job.title}
                        </h3>
                        <span className="text-sm whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-sm mt-1">
                        {job.company}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                {/* Summary */}
                <AccordionContent className="pl-5 pr-4 pb-0 text-left space-y-4 grid grid-cols-3">
                  <p className="text-sm col-span-2">
                    {job.summary}
                  </p>
                {/* Slideshow */}
                <div className="col-span-1">
                  <Image src={job.logo} alt={job.title} width={100} height={100} className="rounded-lg w-full h-auto object-contain" />
                  {/* <Image src={job.slideshow} alt={job.title} width={1000} height={1000} /> */}
                </div>
                {/* Technologies */}
                <div className="col-span-2 flex flex-wrap gap-2">
                  {job.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm bg-[#2563eb] rounded-full px-6 py-1.5 drop-shadow-lg text-center text-secondary font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
    </>
  )
}