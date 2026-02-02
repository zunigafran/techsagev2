import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projectData } from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
  id?: string;
}

const Projects = ({ id }: ProjectsProps) => {
  return (
    <>
      <div id={id}>
        <h1 className="text-4xl font-bold py-8">My Projects</h1>
      </div>
      <div className="proj-container container">
        {projectData.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
      <Card 
      key={project.id}
      className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden aspect-square"
      >
        <div className="absolute inset-0 z-0 aspect-square overflow-hidden" />
        {project.image && (
          <Image
          src={project.image}
          alt={project.alt}
          width={1000}
          height={1000}
          className="absolute inset-0 z-10 w-full object-contain object-top"
          />
        )}
        <CardHeader className="absolute inset-x-0 bottom-0 z-20 text-start bg-card h-1/3 flex flex-col justify-center">
          <CardTitle className="text-md font-bold w-full text-primary md:text-lg">
            {project.name}
            </CardTitle>
          <CardDescription className="hidden md:block text-sm w-full text-primary">
            {project.purpose}
          </CardDescription>
        </CardHeader>
      </Card>
      </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;