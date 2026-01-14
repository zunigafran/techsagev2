import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modetoggle";
import Link from "next/link";

interface HeaderProps {
  id?: string;
}

export default function Header({ id }: HeaderProps) {
  return (
<div id={id} className="hidden md:flex md:flex-row md:justify-between md:items-center md:py-3 md:px-12 md:bg-background md:backdrop-blur-sm md:top-0 md:left-0 md:right-0 md:w-full md:z-50">
  <section>
    <Link href="/">
      <h1 className="text-xl font-normal font-mono">Francisco Zuniga</h1>
    </Link>
  </section>
  <section className="flex flex-row justify-between gap-4 items-center w-1/3">
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