/* -------------------------------------------------------------------------- */
/*                          Navigation Configuration                          */
/* -------------------------------------------------------------------------- */

/**
 * Interface defining the structure of a route
 */
interface Route {
  label: string;
  href: string;
}

/**
 * Static routes configuration with constant values
 */
const STATIC_ROUTES = {
  HOME: {
    label: 'Home',
    href: '/',
  },
  PORTFOLIO: {
    label: 'Portfolio',
    href: '/portfolio',
  },
  ABOUT: {
    label: 'About Us',
    href: '/about',
  },
  CONTACT: {
    label: 'Contact',
    href: '/contact',
  },
} as const;

/**
 * Dynamic routes that require parameters
 */
const DYNAMIC_ROUTES = {
  // PROJECT_DETAIL: (id: string): Route => ({
  //   label: `Project ${id}`,
  //   href: `${STATIC_ROUTES.PORTFOLIO.href}/${id}`,
  // }),
} as const;

/**
 * Combined routes object with both static and dynamic routes
 */
const ROUTES = Object.freeze({
  ...STATIC_ROUTES,
  ...DYNAMIC_ROUTES,
});

/**
 * Type for static routes extracted from STATIC_ROUTES
 */
type StaticRoute = (typeof STATIC_ROUTES)[keyof typeof STATIC_ROUTES];

/**
 * Type for dynamic route functions
 */
type DynamicRouteFunction =
  (typeof DYNAMIC_ROUTES)[keyof typeof DYNAMIC_ROUTES];

/**
 * Type for the result of a dynamic route function
 */
type DynamicRoute = ReturnType<DynamicRouteFunction>;

/**
 * Union type of all possible routes in the application
 */
type AppRoutes = StaticRoute | DynamicRoute;

/**
 * Type guard to check if a route is a static route
 * @param route - The route to check
 * @returns True if the route is a static route
 */
function isStaticRoute(route: unknown): route is StaticRoute {
  if (!route || typeof route !== 'object') {
    return false;
  }

  const potentialRoute = route as Partial<Route>;

  return (
    typeof potentialRoute.href === 'string' &&
    typeof potentialRoute.label === 'string'
  );
}

/**
 * Navigation items to be displayed in the main navigation
 */
const NAV_ITEMS = Object.freeze([
  STATIC_ROUTES.PORTFOLIO,
  STATIC_ROUTES.ABOUT,
  STATIC_ROUTES.CONTACT,
]);

export type { AppRoutes, StaticRoute, DynamicRoute, Route };
export { ROUTES, NAV_ITEMS, isStaticRoute };
