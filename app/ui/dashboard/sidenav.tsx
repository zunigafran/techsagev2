'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import MenuIcon from '@mui/icons-material/Menu';

interface SideNavProps {
  id?: string;
}

export default function SideNav({ id }: SideNavProps) {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div id={id} className="fixed top-4 left-4 z-50 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border"
            aria-label="Open navigation menu"
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] sm:w-[300px] pt-12">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" onClick={handleLinkClick}>
                <h1 className="text-2xl font-normal font-mono text-left">
                  Francisco Zuniga
                </h1>
              </Link>
            </SheetTitle>
          </SheetHeader>
          
          <nav className="flex flex-col gap-4 mt-8">
            <SheetClose asChild>
              <a
                href="#expertise"
                onClick={handleLinkClick}
                className="text-lg font-normal font-mono py-2 px-4 rounded-md hover:bg-secondary transition-colors"
              >
                Expertise
              </a>
            </SheetClose>
            
            <SheetClose asChild>
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="text-lg font-normal font-mono py-2 px-4 rounded-md hover:bg-secondary transition-colors"
              >
                Projects
              </a>
            </SheetClose>
            
            <SheetClose asChild>
              <a
                href="#resume"
                onClick={handleLinkClick}
                className="text-lg font-normal font-mono py-2 px-4 rounded-md hover:bg-secondary transition-colors"
              >
                Experience
              </a>
            </SheetClose>

            <div className="pt-4 border-t flex justify-center items-center">
              <SheetClose asChild>
                <Button asChild variant="default" className="w-1/2 font-mono text-center mx-auto">
                  <a
                    href="/resume/Francisco Zuniga.pdf"
                    download="Francisco Zuniga.pdf"
                    onClick={handleLinkClick}
                  >
                    Resume
                  </a>
                </Button>
              </SheetClose>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
