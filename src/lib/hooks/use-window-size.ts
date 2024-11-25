/**
 * Custom hooks for responsive window measurements in Next.js applications.
 * Provides separate hooks for width-based and breakpoint-based responsive design.
 * Optimized for performance, SSR compatibility, and browser support.
 *
 * @module useWindowSize
 */

import { useCallback, useEffect, useMemo, useState } from 'react';

/**
 * Supported breakpoint types based on Tailwind CSS defaults
 */
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Default breakpoint values in pixels, matching Tailwind CSS breakpoints
 * Modified 2xl breakpoint to 1440px for better ultra-wide support
 * @see https://tailwindcss.com/docs/breakpoints
 */
const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0, // 0-639px
  sm: 640, // 640-767px
  md: 768, // 768-1023px
  lg: 1024, // 1024-1279px
  xl: 1280, // 1280-1439px
  '2xl': 1440, // 1440px and above
};

/**
 * Creates a debounced function that delays invoking the provided callback
 * until after `delay` milliseconds have elapsed since the last invocation.
 * Placed outside component to prevent recreation on each render.
 *
 * @param delay - The number of milliseconds to delay
 * @returns A debounced callback function
 */
const createDebounce = (delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (callback: () => void) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};

/**
 * Configuration options for the useWindowWidth hook
 */
interface WindowSizeOptions {
  /** Delay in milliseconds before the width update is triggered */
  debounceDelay?: number;
  /**
   * Initial width to use before client-side hydration
   * Useful for SSR matching and preventing hydration mismatches
   */
  initialWidth?: number;
}

/**
 * Hook that tracks the window's width and handles SSR.
 * Includes debouncing support and SSR compatibility.
 *
 * @param options - Configuration options for the hook
 * @param options.debounceDelay - Optional delay in ms to debounce the resize updates
 * @param options.initialWidth - Initial width to use during SSR
 * @returns The current window width or initialWidth during SSR
 *
 * @example
 * ```tsx
 * function ResponsiveComponent() {
 *   const width = useWindowWidth({
 *     debounceDelay: 250,
 *     initialWidth: 1024
 *   });
 *   return <div>Window width: {width ?? 'Loading...'}</div>
 * }
 * ```
 */
export function useWindowWidth(options: WindowSizeOptions = {}) {
  const { debounceDelay = 0, initialWidth } = options;
  const [width, setWidth] = useState<number | undefined>(initialWidth);

  const debounceFn = useMemo(
    () => (debounceDelay > 0 ? createDebounce(debounceDelay) : null),
    [debounceDelay],
  );

  // Memoize the resize handler to prevent unnecessary re-renders
  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  const resizeHandler = useCallback(() => {
    if (debounceFn) {
      debounceFn(handleResize);
    } else {
      handleResize();
    }
  }, [debounceFn, handleResize]);

  useEffect(() => {
    // Skip effect during SSR
    if (typeof window === 'undefined') return;

    // Set initial size if not already set
    if (width === undefined) {
      handleResize();
    }

    // Add passive event listener for better scroll performance
    window.addEventListener('resize', resizeHandler, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [handleResize, resizeHandler, width]);

  return width;
}

/**
 * Configuration options for the useBreakpoint hook
 */
interface BreakpointOptions {
  /**
   * Initial breakpoint to use before client-side hydration
   * Useful for SSR matching and preventing hydration mismatches
   */
  initialBreakpoint?: Breakpoint;
}

/**
 * Hook that provides the current breakpoint based on window width.
 * Uses ResizeObserver for optimal performance with fallback to resize event.
 * Defaults to 'xs' during SSR unless initialBreakpoint is provided.
 *
 * @param options - Configuration options for the hook
 * @param options.initialBreakpoint - Initial breakpoint to use during SSR
 * @returns The current breakpoint ('xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl')
 *
 * @example
 * ```tsx
 * function ResponsiveLayout() {
 *   const breakpoint = useBreakpoint({ initialBreakpoint: 'md' })
 *   return (
 *     <div>
 *       {breakpoint === 'xs' && <MobileLayout />}
 *       {breakpoint === 'lg' && <DesktopLayout />}
 *     </div>
 *   )
 * }
 * ```
 */
export function useBreakpoint(options: BreakpointOptions = {}) {
  const { initialBreakpoint = 'xs' } = options;
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(initialBreakpoint);

  // Memoize getBreakpoint to prevent recreation on each render
  const getBreakpoint = useCallback((width: number): Breakpoint => {
    if (width >= BREAKPOINTS['2xl']) return '2xl';
    if (width >= BREAKPOINTS.xl) return 'xl';
    if (width >= BREAKPOINTS.lg) return 'lg';
    if (width >= BREAKPOINTS.md) return 'md';
    if (width >= BREAKPOINTS.sm) return 'sm';
    return 'xs';
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    // Try to use ResizeObserver with fallback to resize event
    try {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(document.documentElement);

      // Set initial breakpoint if using default
      if (breakpoint === 'xs') {
        handleResize();
      }

      return () => resizeObserver.disconnect();
    } catch {
      // Fallback to window resize event if ResizeObserver is not supported
      console.warn(
        'ResizeObserver not supported, falling back to resize event',
      );

      window.addEventListener('resize', handleResize, { passive: true });
      if (breakpoint === 'xs') {
        handleResize();
      }

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [breakpoint, getBreakpoint]);

  return breakpoint;
}
