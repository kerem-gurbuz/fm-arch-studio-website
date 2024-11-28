'use client';

import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay, { type AutoplayOptionsType } from 'embla-carousel-autoplay';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { ArrowIcon, DynamicImage } from '@/components/common';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { ROUTES } from '@/config/navigation';
import { cn } from '@/lib/utils';
import type { HeroSlide } from './types';

const CAROUSEL_OPTIONS: EmblaOptionsType = {
  loop: true,
  startIndex: 0,
};

const AUTOPLAY_OPTIONS: AutoplayOptionsType = {
  playOnInit: true,
  stopOnMouseEnter: true,
  stopOnFocusIn: true,
  stopOnInteraction: false,
  delay: 5000,
};

type HeroSliderProps = {
  slides: HeroSlide[];
  className?: string;
};

export function HeroSlider({ slides, className }: HeroSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api],
  );

  return (
    <Carousel
      setApi={setApi}
      className={cn('relative h-full w-full', className)}
      opts={CAROUSEL_OPTIONS}
      plugins={[Autoplay(AUTOPLAY_OPTIONS)]}
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem
            key={slide.id}
            aria-labelledby={slide.id + '-title'}
            className="relative"
          >
            {/* Multi-Source Slide Image */}
            <DynamicImage imageConfig={slide.imageConfig} placeholder="blur" />
            {/* Image Overlay */}
            <div className="absolute inset-y-0 left-4 right-0 z-10 bg-black/35" />
            {/* Slide Content */}
            <div className="absolute left-[calc(32px+16px)] top-[116px] z-20 sm:left-[calc(50%+16px-(640px-2*32px)/2)] md:left-[calc(58px+16px)] md:top-[186px] xl:left-[calc(190px+16px)]">
              <div
                className={cn(
                  'flex flex-col items-start justify-between text-white',
                  'min-h-[334px] w-full max-w-[311px] md:min-h-[355px] md:max-w-[457px] lg:max-w-[544px]',
                )}
              >
                <div className="space-y-[11px] md:space-y-[10px]">
                  <div id={slide.id + '-title'} className="heading-lg">
                    {slide.title}
                  </div>
                  <p className="body-text w-full lg:max-w-[445px]">
                    {slide.description}
                  </p>
                </div>
                <Button
                  className={cn(
                    'mt-[17px] h-[72px] w-[252px]',
                    'pb-[22px] pl-[37px] pr-[32px] pt-[25px]',
                    'inline-flex items-center justify-between bg-very-dark-blue transition-colors duration-300 hover:bg-dark-grey',
                  )}
                  asChild
                >
                  <Link href={ROUTES.PORTFOLIO.href}>
                    <span className="text-[18px] font-bold leading-[25px]">
                      See Our Portfolio
                    </span>
                    <ArrowIcon className="h-[18px] w-[24px] stroke-white" />
                  </Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Thumbnails */}
      <div className="absolute -left-20 bottom-0 z-30 hidden lg:block">
        {slides.map((_, index: number) => (
          <Button
            key={index}
            onClick={() => onThumbClick(index)}
            tabIndex={-1} // prevent focus (shouldn't be tabbable)
            className={cn(
              'inline-flex h-20 w-20 items-center justify-center',
              'bg-white text-[18px] font-bold leading-[25px] text-medium-grey hover:bg-pale-sky',
              {
                'bg-very-dark-blue text-white hover:bg-very-dark-blue':
                  current === index,
              },
            )}
          >
            <span className="pointer-events-none" aria-hidden>
              {index + 1 <= 9 ? `0${index + 1}` : index + 1}
            </span>
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </Carousel>
  );
}

/*
  Note-1: "To set the spacing between the items, we use a pl-[VALUE] utility on the <CarouselItem /> and a negative -ml-[VALUE] on the <CarouselContent />."
  
  - CarouselContent:
      className={cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      )}

  - CarouselItem:
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}

  Reference: https://ui.shadcn.com/docs/components/carousel#spacing

  ------------------------------------------------------------------------

  Note-2: A negative value (the exact negative value doesn't actually matter, usually tabindex="-1") means that the element is not reachable via sequential keyboard navigation.
  
  tabindex="-1" may be useful for elements that should not be navigated to directly using the Tab key, but need to have keyboard focus set to them. Examples include an off-screen modal window that should be focused when it comes into view, or a form submission error message that should be immediately focused when an errant form is submitted.

  Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex

  ------------------------------------------------------------------------

  Note-3: To avoid causing an incorrect title order, h1 and h2 heading elements were not used in this component.

  <div id={slide.id + '-title'} className="heading-lg">
    {slide.title}
  </div>
  */
