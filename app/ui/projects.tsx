import { Card, CardContent } from "@/components/ui/card";
import { projectData } from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold py-4">My Projects</h1>
      </div>
      <div className="container">
        {projectData.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
          <Card
            key={project.id}
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
            <CardContent className="mt-auto flex flex-col gap-2 text-start z-10 relative bg-card p-4 h-1/3 translate-y-1/3 opacity-95">
              <h1 className="text-xl font-bold w-full text-primary">
                {project.name}
              </h1>
              <p className="text-sm w-full text-primary">{project.purpose}</p>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;