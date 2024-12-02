import type { StaticImageData } from 'next/image';

/**
 * Represents possible device viewport categories for responsive image display.
 * - `mobile`: For mobile device viewports
 * - `tablet`: For tablet device viewports
 * - `desktop`: For desktop device viewports
 */
export type ImageSourceType = 'mobile' | 'tablet' | 'desktop';

/**
 * Configuration object for a single image source.
 * Used to define image properties and styling for a specific viewport.
 *
 * @property {StaticImageData} src - Next.js StaticImageData object containing image metadata
 * @property {string} alt - Accessibility text description for the image
 * @property {string} [wrapperClassName] - Optional tailwind classes for the image wrapper
 * @property {string} [className] - Optional tailwind classes for the image element
 * @property {string} sizes - Image sizes attribute for responsive behavior
 * @property {number} [quality] - The quality of the optimized image, an integer between 1 and 100
 * @property {boolean} [priority] - If true, the image will be considered high priority and preloaded
 */
export type ImageSource = {
  src: StaticImageData;
  alt: string;
  wrapperClassName?: string;
  className?: string;
  sizes: string;
  quality?: number;
  priority?: boolean;
};

/**
 * Maps device viewport categories to their respective image configurations.
 * Enables displaying different image versions based on the current viewport size.
 *
 * @example
 * const imageConfig: ImageSourceMap = {
 *   mobile: {
 *     src: mobileImage,
 *     alt: "...",
 *     sizes: "100vw",
 *   },
 *   tablet: {
 *     src: tabletImage,
 *     alt: "...",
 *     sizes: "50vw"
 *   },
 *   desktop: {
 *     src: desktopImage,
 *     alt: "...",
 *     sizes: "33vw",
 *   }
 * };
 */
export type ImageSourceMap = {
  [key in ImageSourceType]: ImageSource;
};
