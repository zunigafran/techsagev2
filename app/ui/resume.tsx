'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import TealDot from '@/components/ui/tealdot';
import { resumeData } from '@/data/resumeData';
import Slideshow from '@/components/ui/slideshow';

export default function WorkHistoryAccordion() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 575);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto min-h-screen md:p-8">
      <h1 className="text-4xl font-bold m-12">Work History</h1>
      
      <Accordion type="multiple" className="w-full space-y-4" value={openItems} onValueChange={setOpenItems}>
        {resumeData.map((job) => {
          const isOpen = openItems.includes(job.id);
          
          return (
            <AccordionItem key={job.id} value={job.id} className="border-none">
              <div className="relative" id="vertical-line">
                <div className="absolute left-[3px] w-[3px] bg-primary overflow-hidden" style={{ top: '40px', bottom: 0 }}>
                  <div 
                    className={`w-full bg-primary transition-all duration-500 ease-out ${isOpen ? 'h-full opacity-100' : 'h-8 opacity-30'}`}
                    style={{ transformOrigin: 'top' }}
                  />
                </div>

                <AccordionTrigger className="hover:no-underline py-4 pr-4 pl-0">
                  <div className="flex items-start gap-3 text-left w-full">
                    <div className="relative shrink-0 mt-1.5">
                      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-teal-400' : 'bg-gray-400'}`} />
                      {isOpen && <TealDot />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <span className="text-sm whitespace-nowrap">{job.period}</span>
                      </div>
                      <p className="text-sm mt-1">{job.company}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="grid grid-cols-5 grid-rows-2 md:grid-rows-3 gap-2 px-4">
                  <p className="text-sm col-span-3 text-justify row-span-1 h-fit md:col-span-2 md:row-span-1">{job.summary}</p>
                  <div className="text-sm col-span-2 row-span-1 md:col-span-3 md:row-span-3">
                  {isMobile ? (
                      <a href={job.website} target="_blank" rel="noopener noreferrer">
                        <Image 
                          src={job.logo} 
                          alt={job.title} 
                          width={100} 
                          height={100} 
                          className="rounded-lg w-full h-fit object-contain cursor-pointer hover:opacity-80 transition-opacity" 
                        />
                      </a>
                    ) : (
                      <div className="w-full h-full">
                        <Slideshow job={job} />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm col-span-5 row-span-1 h-fit md:col-span-2 md:row-span-2">
                  {job.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-sm bg-blue-600 rounded-full px-4 py-1.5 drop-shadow-lg text-center text-secondary font-semibold"
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
  );
}