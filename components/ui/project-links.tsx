'use client';

import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

interface ProjectLinksProps {
  url?: string;
  github?: string;
}

export default function ProjectLinks({ url, github }: ProjectLinksProps) {
  if (!url?.trim() && !github?.trim()) {
    return null;
  }

  return (
    <div className="py-4 gap-2 flex flex-col">
      <h1 className="text-xl font-semibold underline underline-offset-8">Project Links</h1>
      {url?.trim() && (
        <Link href={url} target="_blank" className="text-2xl font-normal flex gap-2 place-items-center hover:text-teal-600 hover:underline underline-center w-fit h-fit">
          Open Project
          <LinkIcon fontSize="large" className="ml-2" />
        </Link>
      )}
      {github?.trim() && (
        <Link href={github} target="_blank" className="text-2xl font-normal flex flex-row gap-2 place-items-center hover:text-teal-600 hover:underline underline-center w-fit h-fit">
          GitHub
          <GitHubIcon fontSize="large" className="ml-2" />
        </Link>
      )}
    </div>
  );
}