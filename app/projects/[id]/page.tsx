import { projectData } from "@/data/projectData";
import NotFound from "./not-found";
import { languages } from "@/data/languages";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/ui/footer";

export default async function ProjectPage({ 
  params,
}: { 
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = projectData.find((project) => project.id === id);
  
  if (!project) {
    NotFound();
  }

  return (
    <>
    <div className="page-container">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{project?.purpose}</h3>
        <h1 className="text-4xl font-bold">{project?.name}</h1>
        {/* Display status badge if not completed */}
        {project?.status.toLowerCase() !== "completed" && (
            <span className="bg-yellow-400 text-primary px-3 py-1 rounded-2xl text-sm w-fit font-medium translate-y-[-8px]">
              {project.status}
            </span>
          )}
        <p className="text-md md:w-3/4">{project?.summary}</p>
        
        {/* Display technologies */}
        {project?.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {project.technologies.map((tech) => {
              // Convert technology name to lowercase to match language keys
              const languageKey = tech.toLowerCase().replace(/\s+/g, '');
              const language = languages[languageKey];
              
              if (!language) {
                console.warn(`Language not found for: ${tech}`);
                return null;
              }
              
              return (
                <div key={language.id} className="flex items-center gap-2 px-0">
                  <Image 
                    src={language.logo} 
                    alt={language.alt}
                    title={language.alt}
                    width={60}
                    height={60}
                    className="object-contain invert bg-secondary aspect-square p-2 rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="py-4 gap-2 flex flex-col">
        <Link href={project?.url} target="_blank" className="text-2xl font-normal flex gap-2 place-items-center hover:text-teal-400 hover:scale-110 transition-all duration-300">
          Open Project
          <Image src="/logos/link.svg" alt="Link" width={48} height={48} className="w-10 h-10" /></Link>
          <Link href={project?.github} target="_blank" className="text-2xl font-normal flex gap-2 place-items-center hover:text-teal-400 hover:scale-110 transition-all duration-300">
          GitHub
          <Image src="/logos/github.svg" alt="GitHub" width={48} height={48} className="w-10 h-10" />
          </Link>
        </div>
      </div>
        <Image src={project?.image} alt={project?.alt} width={1000} height={1000} className="object-cover object-top" />
    </div>
    <div className="text-center text-secondary font-semibold bg-ring py-2 px-32 flex flex-row justify-between">     
      <p> © 2025 Francisco Zuniga</p>
      <p>All rights reserved.</p>
    </div>
    </>
  );
}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    id: project.id,
  }));
}
