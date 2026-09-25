"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Project } from "@/data/projects";

type ProjectThumbnailCarouselProps = {
  project: Project;
};

export function ProjectThumbnailCarousel({
  project,
}: ProjectThumbnailCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const images =
    project.images.length > 0
      ? project.images
      : [project.coverImage];

  const handlePrevious = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const handleNext = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrentImage(
      (current) => (current + 1) % images.length,
    );
  };

  const image = images[currentImage];

  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-image-wrap group relative block aspect-[16/10] overflow-hidden"
    >
      <Image
        key={image.src}
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 65vw, 100vw"
        className="object-cover transition-opacity duration-300"
      />

      <div className="pointer-events-none absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-ink/5" />

      {/* Previous */}
      <button
        type="button"
        onClick={handlePrevious}
        aria-label={`Previous image for ${project.title}`}
        className="absolute left-4 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center bg-canvas text-ink opacity-100 transition-all duration-300 hover:bg-signal hover:text-ink lg:-translate-x-2 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
      >
        <ArrowLeft size={16} strokeWidth={1.6} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={handleNext}
        aria-label={`Next image for ${project.title}`}
        className="absolute right-4 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center bg-canvas text-ink opacity-100 transition-all duration-300 hover:bg-signal hover:text-ink lg:translate-x-2 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
      >
        <ArrowRight size={16} strokeWidth={1.6} />
      </button>

      {/* Image counter */}
      <span className="absolute bottom-4 left-4 z-10 bg-ink/75 px-2.5 py-1 text-[9px] font-bold uppercase tracking-label text-canvas backdrop-blur-sm">
        {currentImage + 1} / {images.length}
      </span>
    </Link>
  );
}