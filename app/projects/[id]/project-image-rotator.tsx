"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

interface ProjectImageRotatorProps {
  image: string;
  image2?: string;
  alt?: string;
}

const ROTATION_MS = 10_000;

export default function ProjectImageRotator({
  image,
  image2,
  alt,
}: ProjectImageRotatorProps) {
  const images = useMemo(
    () => [image, image2].filter((value): value is string => Boolean(value)),
    [image, image2],
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, ROTATION_MS);

    return () => window.clearInterval(intervalId);
  }, [images]);

  return (
    <div className="relative col-span-2 w-full aspect-[9/16]">
      {images.map((source, imageIndex) => (
        <Image
          key={source}
          src={source}
          alt={alt || "Project image"}
          fill
          sizes="(min-width: 768px) 80vw, 100vw"
          className={[
            "object-cover object-top absolute inset-0 transition-opacity duration-700 ease-in-out",
            imageIndex === index ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      ))}
    </div>
  );
}
