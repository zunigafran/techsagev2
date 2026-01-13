'use client';

import { Card } from "@/components/ui/card"
import Link from "next/link"
import Quotes from "./quotes"
import { Button } from "@/components/ui/button"
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

interface FooterProps {
  id?: string;
}

const Footer = ({ id }: FooterProps) => {
  return (
   <div id={id}>
   {/* Desktop */}
    <div className="box-border max-w-full hidden md:block">
      <Card className="grid justify-between p-8 md:grid-cols-3 gap-6 items-stretch">
        {/* Left Side */}
        <div className="col-span-2 relative min-h-[200px]">
          <div className="pb-4 text-left absolute bottom-0">
            <h1 className="text-2xl font-bold md:text-5xl">
              Got an opportunity available?
            </h1>
            <h1 className="text-2xl font-bold md:text-5xl">
              Send it my way!
            </h1>
          </div>
        </div>

        {/* Right Side - Contact Links */}
        <div className="col-span-1 text-right mr-16 flex flex-col justify-end h-full">
          <div>
            <div className="pb-4 flex flex-col text-right">
              <p className="text-2xl">Here&apos;s how to get in touch with me:</p>
            </div>
            <div className="pb-4 flex flex-col items-end gap-2">
              <Link href="mailto:fzuniga325@gmail.com" 
                className="text-2xl flex items-center justify-end hover:text-teal-600 hover:underline underline-center w-fit h-fit">
                <EmailIcon className="mr-2" fontSize="large"/>
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/zunigafran/"
                className="text-2xl flex items-center justify-end hover:text-teal-600 hover:underline underline-center w-fit h-fit"
              >
                <LinkedInIcon className="mr-2" fontSize="large"/>
                LinkedIn
              </Link>
              <Link
                href="https://github.com/zunigafran"
                className="text-2xl flex items-center justify-end hover:text-teal-600 hover:underline underline-center w-fit h-fit"
              >
                <GitHubIcon className="mr-2" fontSize="large"/>
                GitHub
              </Link>
              <Link href="/contact" className="text-2xl flex items-center justify-end hover:text-teal-600 hover:underline underline-center w-fit h-fit">
               <ContactPageIcon className="mr-2" fontSize="large" />
                Contact
              </Link>
            </div>
          <Quotes />
          </div>
        </div>
      </Card>
    </div>
    {/* Mobile */}
    <div className="box-border max-w-full block md:hidden">
      <Card className="grid justify-between p-6 gap-4">
        <div className="col-span-1">
          <h1 className="text-2xl font-bold text-left">Got an opportunity available? Send it my way!</h1>
        </div>
        <div>
          <p className="text-xl px-4">Here&apos;s how to get in touch with me:</p>
         </div>
         <div className="gap-3 grid grid-cols-2">
         <Button asChild variant="default" className="text-xl">
          <Link href="mailto:fzuniga325@gmail.com">
            <EmailIcon />
            Email
          </Link>
         </Button>
         <Button asChild variant="default" className="text-xl">
          <Link href="https://www.linkedin.com/in/zunigafran/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            LinkedIn
          </Link>
         </Button>
         <Button asChild variant="default" className="text-xl">
          <Link href="https://github.com/zunigafran" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            GitHub
          </Link>
         </Button>
         <Button asChild variant="default" className="text-xl">
          <Link href="/contact">
            <ContactPageIcon />
            Contact
          </Link>
         </Button>
        </div>
      </Card>
    </div>
    </div>
  )
}

export default Footer
