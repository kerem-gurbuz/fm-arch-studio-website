/**
 * Custom hooks for responsive window measurements in Next.js applications.
 * Provides separate hooks for width-based and breakpoint-based responsive design.
 * Optimized for performance and SSR compatibility.
 *
 * @module useWindowSize
 */

import { useEffect, useMemo, useState } from 'react';

// Define supported breakpoints based on Tailwind CSS defaults
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Default breakpoint values in pixels, matching Tailwind CSS breakpoints
 * @see https://tailwindcss.com/docs/breakpoints
 */
const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0, // 0-639px
  sm: 640, // 640-767px
  md: 768, // 768-1023px
  lg: 1024, // 1024-1279px
  xl: 1280, // 1280-1439px
  '2xl': 1440, // 1440px and above (Modified!)
};

/**
 * Creates a debounced function that delays invoking the provided callback
 * until after `delay` milliseconds have elapsed since the last invocation.
 *
 * @param delay - The number of milliseconds to delay
 * @returns A debounced callback function
 */
const createDebounce = (delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (callback: () => void) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};

interface WindowSizeOptions {
  /** Delay in milliseconds before the width update is triggered */
  debounceDelay?: number;
}

/**
 * Hook that tracks the window's width and handles SSR.
 * Returns undefined during SSR and initial render.
 *
 * @param options - Configuration options for the hook
 * @param options.debounceDelay - Optional delay in ms to debounce the resize updates
 * @returns The current window width or undefined during SSR
 *
 * @example
 * ```tsx
 * function ResponsiveComponent() {
 *   const width = useWindowWidth({ debounceDelay: 250 })
 *   return <div>Window width: {width ?? 'Loading...'}</div>
 * }
 * ```
 */
export function useWindowWidth(options: WindowSizeOptions = {}) {
  const { debounceDelay = 0 } = options;
  const [width, setWidth] = useState<number | undefined>(undefined);

  // Create a stable debounce function that persists across renders
  const debounceFn = useMemo(
    () => (debounceDelay > 0 ? createDebounce(debounceDelay) : null),
    [debounceDelay],
  );

  useEffect(() => {
    // Skip effect during SSR
    if (typeof window === 'undefined') return;

    // Flag to prevent updates if component is unmounted
    let isSubscribed = true;

    const handleResize = () => {
      if (!isSubscribed) return;
      setWidth(window.innerWidth);
    };

    // Apply debouncing if enabled, otherwise update immediately
    const resizeHandler = () => {
      if (debounceFn) {
        debounceFn(handleResize);
      } else {
        handleResize();
      }
    };

    // Set initial size
    handleResize();

    // Add passive event listener for better scroll performance
    window.addEventListener('resize', resizeHandler, { passive: true });

    // Cleanup function
    return () => {
      isSubscribed = false;
      window.removeEventListener('resize', resizeHandler);
    };
  }, [debounceFn]);

  return width;
}

/**
 * Hook that provides the current breakpoint based on window width.
 * Uses ResizeObserver for optimal performance.
 * Defaults to 'xs' during SSR.
 *
 * @returns The current breakpoint ('xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl')
 *
 * @example
 * ```tsx
 * function ResponsiveLayout() {
 *   const breakpoint = useBreakpoint()
 *   return (
 *     <div>
 *       {breakpoint === 'xs' && <MobileLayout />}
 *       {breakpoint === 'lg' && <DesktopLayout />}
 *     </div>
 *   )
 * }
 * ```
 */
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');

  useEffect(() => {
    // Skip effect during SSR
    if (typeof window === 'undefined') return;

    let isSubscribed = true;

    /**
     * Determines the current breakpoint based on window width
     * Uses early returns for better performance
     */
    const getBreakpoint = (width: number): Breakpoint => {
      if (width >= BREAKPOINTS['2xl']) return '2xl';
      if (width >= BREAKPOINTS.xl) return 'xl';
      if (width >= BREAKPOINTS.lg) return 'lg';
      if (width >= BREAKPOINTS.md) return 'md';
      if (width >= BREAKPOINTS.sm) return 'sm';
      return 'xs';
    };

    const handleResize = () => {
      if (!isSubscribed) return;
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    // Use ResizeObserver for better performance than window resize event
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.documentElement);

    // Set initial breakpoint
    handleResize();

    // Cleanup function
    return () => {
      isSubscribed = false;
      resizeObserver.disconnect();
    };
  }, []);

  return breakpoint;
}
