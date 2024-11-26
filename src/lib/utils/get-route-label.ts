import { ROUTES, isStaticRoute, type StaticRoute } from '@/config/navigation';

/**
 * Type for valid static route paths
 */
type StaticRoutePath = StaticRoute['href'];

/**
 * Map of route paths to their labels
 */
const ROUTE_LABEL_MAP = new Map<StaticRoutePath, string>(
  Object.values(ROUTES)
    .filter(isStaticRoute)
    .map((route) => [route.href, route.label] as const),
);

/**
 * Type predicate to check if a path is a static route path
 * @param path - The path to check
 * @returns True if the path is a static route path
 */
function isStaticPath(path: string): path is StaticRoutePath {
  return ROUTE_LABEL_MAP.has(path as StaticRoutePath);
}

/**
 * Gets the label for a given pathname
 * @param pathname - The pathname to get the label for
 * @returns The label for the pathname or null if not found
 */
export function getRouteLabel(pathname: string): string | null {
  // First try exact match using type narrowing
  if (isStaticPath(pathname)) {
    const label = ROUTE_LABEL_MAP.get(pathname);
    return label ?? null;
  }

  // Then check for portfolio routes that start with the portfolio path
  if (pathname.startsWith(ROUTES.PORTFOLIO.href)) {
    return ROUTES.PORTFOLIO.label;
  }

  return null;
}
