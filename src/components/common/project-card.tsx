import type { Project } from '@/lib/types';
import { cn, transformIsoToDate } from '@/lib/utils';
import { DynamicImage } from './dynamic-image';

/**
 * Represents the props for the ProjectCard component with variant-specific typing.
 *
 * @typedef {Object} ProjectCardProps
 */
type ProjectCardProps =
  | {
      /** The project to be displayed */
      project: Project;
      /** Variant of the project card */
      variant: 'featured';
      /**
       * Index of the featured project
       * @required
       */
      index: number;
      /** Additional CSS classes to apply to the card */
      className?: string;
    }
  | {
      /** The project to be displayed */
      project: Project;
      /** Variant of the project card */
      variant: 'all';
      /** Index is not allowed for 'all' variant */
      index?: never;
      /** Additional CSS classes to apply to the card */
      className?: string;
    };

/**
 * Renders a project card with different display modes for featured and all projects.
 *
 * @param {ProjectCardProps} props - The properties for rendering the project card
 * @returns {JSX.Element} A rendered project card component
 *
 * @example
 * // Featured project card
 * <ProjectCard
 *   project={featuredProject}
 *   variant="featured"
 *   index={0}
 * />
 *
 * @example
 * // All projects card
 * <ProjectCard
 *   project={regularProject}
 *   variant="all"
 * />
 */
export function ProjectCard(props: ProjectCardProps) {
  const { project, variant, className } = props;

  return (
    <div
      id={project.id}
      aria-labelledby={`${project.id}-heading`}
      className={cn('group relative overflow-hidden text-white', className)}
    >
      {/* Multi-Source Image */}
      <DynamicImage
        imageConfig={project.imageConfig}
        className="transition-transform duration-500 group-hover:scale-110"
        placeholder="blur"
      />
      {/* Image Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50" />
      {/* Project Number (only for featured variant) */}
      {variant === 'featured' && (
        <span className="pointer-events-none absolute right-[16px] top-[29px] z-20 hidden text-right text-[250px] font-bold leading-[200px] opacity-50 md:inline-block lg:right-[-16px] lg:top-[45px]">
          {props.index + 1}
        </span>
      )}
      {/* Content */}
      <div className="absolute inset-x-[24px] bottom-[23px] z-20 md:bottom-[39px] md:left-[40px]">
        <h3
          id={`${project.id}-heading`}
          className="text-[32px] font-bold leading-[40px]"
        >
          {project.title}
        </h3>
        <p className="text-[18px] font-medium leading-[24px] opacity-75">
          {variant === 'featured'
            ? 'View All Projects'
            : transformIsoToDate(project.date)}
        </p>
      </div>
    </div>
  );
}
