import type { Project } from '@/lib/types';
import { cn, transformIsoToDate } from '@/lib/utils';
import { DynamicImage } from './dynamic-image';

type ProjectCardProps = {
  className?: string;
  index: number;
  project: Project;
};

export function ProjectCard({ className, index, project }: ProjectCardProps) {
  return (
    <div
      id={project.id}
      aria-labelledby={`${project.id}-heading`}
      className={cn('group relative text-white', className)}
    >
      {/* Multi-Source Image */}
      <DynamicImage
        imageConfig={project.imageConfig}
        className="transition-transform duration-300 group-hover:scale-105"
        placeholder="blur"
      />
      {/* Image Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 transition-transform duration-300 group-hover:scale-105" />
      {/* Project Number */}
      {project.isFeatured && (
        <span className="pointer-events-none absolute right-[16px] top-[29px] z-20 hidden text-right text-[250px] font-bold leading-[200px] opacity-50 md:inline-block lg:right-[-16px] lg:top-[45px]">
          {index + 1}
        </span>
      )}
      {/* Content */}
      <div className="absolute bottom-[23px] left-[24px] z-20 md:bottom-[39px] md:left-[40px]">
        <h3
          id={`${project.id}-heading`}
          className="text-[32px] font-bold leading-[40px]"
        >
          {project.title}
        </h3>
        <p className="text-[18px] font-medium leading-[24px] opacity-75">
          {project.isFeatured
            ? 'View All Projects'
            : transformIsoToDate(project.date)}
        </p>
      </div>
    </div>
  );
}
