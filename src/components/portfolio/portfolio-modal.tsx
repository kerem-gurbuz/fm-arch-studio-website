'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Project } from '@/lib/types';
import { transformIsoToDate } from '@/lib/utils';

type PortfolioModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export function PortfolioModal({
  project,
  isOpen,
  onClose,
}: PortfolioModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr]">
          {/* Gallery */}
          <Carousel className="hidden lg:block">
            <CarouselContent>
              {project.gallery.map((image, index) => (
                <CarouselItem key={index}>
                  <figure className="relative h-[560px] w-full">
                    <Image
                      src={image}
                      alt={`${project.title} Gallery Image ${index + 1}`}
                      className="object-cover object-center"
                      sizes="350px"
                      fill
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 z-10" />
            <CarouselNext className="right-2 z-10" />
          </Carousel>
          {/* Content */}
          <article
            aria-labelledby="project-title"
            className="flex flex-col p-6 md:px-12"
          >
            <h3 id="project-title" className="heading-sm mb-6">
              {project.title}
            </h3>
            {/* Description */}
            <ScrollArea className="mb-6 h-[200px] pr-4 landscape:hidden md:landscape:block">
              <p className="body-text text-dark-grey">{project.description}</p>
            </ScrollArea>
            {/* Website Link */}
            {project.details.website && (
              <Button
                className="mb-6 w-full bg-very-dark-blue hover:bg-dark-grey lg:mb-auto"
                asChild
              >
                <a
                  href={project.details.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="inline-block text-[18px] font-medium leading-[25px] text-white">
                    Visit Website
                  </span>
                  <ExternalLink className="h-4 w-4 stroke-white" />
                </a>
              </Button>
            )}
            {/* Project Details */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Project Details</h4>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="font-bold">Client</dt>
                  <dd className="body-text text-dark-grey">
                    {project.details.client}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Location</dt>
                  <dd className="body-text text-dark-grey">
                    {project.details.location}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Architect</dt>
                  <dd className="body-text text-dark-grey">
                    {project.details.architect}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Completion Date</dt>
                  <dd className="body-text text-dark-grey">
                    {transformIsoToDate(project.details.completionDate)}
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </DialogContent>
    </Dialog>
  );
}
