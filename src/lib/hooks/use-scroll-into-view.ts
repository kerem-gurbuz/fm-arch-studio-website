import { useCallback } from 'react';

/**
 * ScrollBehavior type defines how the scroll animation should be performed
 * - 'auto': Default browser behavior without animation
 * - 'smooth': Smooth scrolling animation
 * - 'instant': Immediate scroll without animation
 */
type ScrollBehavior = 'auto' | 'smooth' | 'instant';

/**
 * ScrollBlock type defines the vertical alignment of the element after scrolling
 * - 'start': Element will be aligned to the top of the viewport
 * - 'center': Element will be aligned to the center of the viewport
 * - 'end': Element will be aligned to the bottom of the viewport
 * - 'nearest': Minimizes the scroll distance to make the element visible
 */
type ScrollBlock = 'start' | 'center' | 'end' | 'nearest';

/**
 * ScrollInline type defines the horizontal alignment of the element after scrolling
 * Similar to ScrollBlock but for horizontal alignment
 */
type ScrollInline = 'start' | 'center' | 'end' | 'nearest';

/**
 * Configuration options for the scroll behavior
 */
type ScrollOptions = {
  /**
   * Defines the transition animation of the scroll
   * @default 'smooth'
   */
  behavior?: ScrollBehavior;

  /**
   * Defines the vertical alignment of the element after scrolling
   * @default 'start'
   */
  block?: ScrollBlock;

  /**
   * Defines the horizontal alignment of the element after scrolling
   * @default 'nearest'
   */
  inline?: ScrollInline;
};

/**
 * Default scroll configuration
 */
const DEFAULT_SCROLL_OPTIONS: Readonly<ScrollOptions> = {
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest',
};

/**
 * Custom hook that provides utilities for smooth scrolling to elements in the DOM
 *
 * @returns A function to scroll to a specific element reference
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const scrollToRef = useScrollIntoView();
 *   const targetRef = useRef<HTMLDivElement>(null);
 *
 *   return (
 *     <>
 *       <button onClick={() => scrollToRef(targetRef)}>
 *         Scroll to Element
 *       </button>
 *       <div ref={targetRef}>Target Element</div>
 *     </>
 *   );
 * };
 * ```
 */
export function useScrollIntoView() {
  /**
   * Scrolls the page to bring the referenced element into view
   *
   * @param ref - React ref object pointing to the target HTML element
   * @param options - Optional configuration for scroll behavior
   */
  const scrollToRef = useCallback(
    <T extends HTMLElement>(
      ref: React.RefObject<T>,
      options: ScrollOptions = {},
    ): void => {
      if (!ref.current) {
        console.warn(
          'scrollToRef: The provided ref is either not attached to an element or the element is not in the DOM.',
          ref,
        );
        return;
      }

      const mergedOptions: ScrollOptions = {
        ...DEFAULT_SCROLL_OPTIONS,
        ...options,
      };

      if (typeof ref.current.scrollIntoView === 'function') {
        try {
          ref.current.scrollIntoView({
            behavior: mergedOptions.behavior,
            block: mergedOptions.block,
            inline: mergedOptions.inline,
          });
        } catch {
          ref.current.scrollIntoView(); // Fallback for older browsers
        }
      } else {
        console.error(
          'scrollToRef: scrollIntoView is not supported by this browser.',
        );
      }
    },
    [],
  );
  return scrollToRef;
}
