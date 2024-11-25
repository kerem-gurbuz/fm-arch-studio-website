import { useCallback, useEffect, useState } from 'react';

/**
 * Represents supported responsive breakpoint categories
 * Aligned with Tailwind CSS default breakpoint nomenclature
 */
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Predefined breakpoint thresholds in pixels
 * Precisely matched to Tailwind CSS responsive design breakpoints
 * @see https://tailwindcss.com/docs/breakpoints
 */
const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0, // 0-639px (Mobile devices)
  sm: 640, // 640-767px (Small mobile devices)
  md: 768, // 768-1023px (Tablets)
  lg: 1024, // 1024-1279px (Small desktops/laptops)
  xl: 1280, // 1280-1439px (Standard desktops)
  '2xl': 1440, // 1440px and above (Large desktops, ultra-wide monitors)
};

/**
 * Determines the appropriate responsive breakpoint for a given screen width
 * Implemented as a pure function for consistent and efficient breakpoint calculation
 *
 * @param width - Current window or element width in pixels
 * @returns Corresponding responsive breakpoint category
 */
const getBreakpoint = (width: number): Breakpoint => {
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
};

/**
 * Custom hook for intelligent and performant responsive breakpoint detection
 *
 * Key Features:
 * - Minimal performance overhead
 * - Server-Side Rendering (SSR) compatible
 * - Intelligent breakpoint tracking
 * - Optimized re-rendering strategy
 *
 * @returns Current responsive breakpoint
 *
 * @example
 * ```tsx
 * function ResponsiveComponent() {
 *   const breakpoint = useBreakpoint();
 *   return (
 *     <div>
 *       {breakpoint === 'lg' && <DesktopLayout />}
 *       {breakpoint === 'xs' && <MobileLayout />}
 *     </div>
 *   );
 * }
 * ```
 */
export function useBreakpoint(): Breakpoint {
  // Initial breakpoint state, defaults to smallest screen size
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');

  // Memoized resize handler to prevent unnecessary function recreations
  const handleResize = useCallback(() => {
    const currentWidth = window.innerWidth;
    const detectedBreakpoint = getBreakpoint(currentWidth);

    // Intelligent state update: prevent unnecessary re-renders
    // Only update if breakpoint has genuinely changed
    setBreakpoint((prev) =>
      prev === detectedBreakpoint ? prev : detectedBreakpoint,
    );
  }, []);

  useEffect(() => {
    // Guard against server-side rendering
    if (typeof window === 'undefined') return;

    // Initial breakpoint detection based on current window width
    const initialWidth = window.innerWidth;
    const initialBreakpoint = getBreakpoint(initialWidth);
    setBreakpoint(initialBreakpoint);

    // Prefer ResizeObserver for superior performance and precision
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.documentElement);

    // Fallback mechanism for browsers lacking ResizeObserver support
    const fallbackResize = () => {
      try {
        handleResize();
      } catch {
        window.addEventListener('resize', handleResize, { passive: true });
      }
    };

    // Comprehensive cleanup to prevent memory leaks
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', fallbackResize);
    };
  }, [handleResize]);

  return breakpoint;
}
