import { Card, CardContent } from "@/components/ui/card";
import { projectData } from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Francisco Zuniga",
  description: "A collection of projects showcasing my work and technical capabilities.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="page-container gap-4 !h-auto">
        <div>
          <h1 className="text-4xl font-bold py-8">My Projects</h1>
        </div>
        <div className="proj-container container">
          {projectData.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card
                className="transition duration-500 hover:scale-110 relative aspect-square flex flex-col overflow-hidden"
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={1000}
                    height={1000}
                    className="object-cover object-top w-full h-full absolute inset-0 z-0"
                  />
                )}
                <CardContent className="mt-auto flex flex-col gap-2 text-start z-10 relative bg-card p-4 h-2/3 translate-y-1/3 opacity-95 md:h-1/3">
                  <h1 className="text-md font-bold w-full text-primary md:text-xl">
                    {project.name}
                  </h1>
                  <p className="hidden md:block text-sm w-full text-primary">{project.purpose}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center text-secondary font-semibold bg-ring py-2 px-2 lg:px-32 flex flex-row justify-between mt-auto">     
        <p> © 2025 Francisco Zuniga</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}

