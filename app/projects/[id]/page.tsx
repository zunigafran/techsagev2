import { projectData } from "@/data/projectData";
import { notFound } from "next/navigation";
import { languages } from "@/data/languages";
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/ui/backbutton";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return {
      title: '404 - Page Not Found',
      description: 'The project you\'re looking for doesn\'t exist.',
    };
  }

  return {
    title: project.name,
    description: "Project by Francisco Zuniga",
  };
}

export default async function ProjectPage({ 
  params,
}: { 
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const currentIndex = projectData.findIndex((project) => project.id === id);
  const project = projectData[currentIndex];
  
  if (!project) {
    notFound();
  }

  const previousProject = currentIndex > 0 
  ? projectData[currentIndex - 1] 
  : projectData[projectData.length - 1];
const nextProject = currentIndex < projectData.length - 1 
  ? projectData[currentIndex + 1] 
  : projectData[0];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="page-container gap-4 !h-auto">
          <BackButton />
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">{project?.purpose}</h3>
            <h1 className="text-4xl font-bold">{project?.name}</h1>
            {/* Display status badge if not completed */}
            {project?.status && project.status.toLowerCase() !== "completed" && (
                <span className="bg-yellow-400 text-primary px-3 py-1 rounded-2xl text-sm w-fit font-medium translate-y-[-8px]">
                  {project.status}
                </span>
              )}
            <p className="text-xl pb-4">{project?.summary}</p>
            </div>
            {/* Display technologies */}
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-semibold underline underline-offset-8">Technologies</p>
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
            {project?.image && project.image.trim() !== "" && (
              <Image src={project.image} alt={project?.alt || project?.name || "Project image"} width={1000} height={1000} className="object-cover object-top col-span-2" />
            )}

            {/* Previous Project Card */}
            <Card className="col-span-1 outline-none shadow-none rounded-xl p-4 h-fit my-4">
              <Link href={`/projects/${previousProject.id}`} className="block hover:opacity-80 transition-opacity">
                <p className="text-sm text-muted-foreground mb-2">← Previous Project</p>
                <h3 className="text-lg font-semibold">{previousProject.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{previousProject.purpose}</p>
              </Link>
            </Card>
            
            {/* Next Project Card */}
            <Card className="col-span-1 outline-none shadow-none rounded-xl p-4 h-fit my-4">
              <Link href={`/projects/${nextProject.id}`} className="block hover:opacity-80 transition-opacity">
                <p className="text-sm text-muted-foreground mb-2">Next Project →</p>
                <h3 className="text-lg font-semibold">{nextProject.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{nextProject.purpose}</p>
              </Link>
            </Card>
          </div>
      <div className="text-center text-secondary font-semibold bg-ring py-2 px-2 lg:px-32 flex flex-row justify-between mt-auto">     
        <p> © 2025 Francisco Zuniga</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    id: project.id,
  }));
}
