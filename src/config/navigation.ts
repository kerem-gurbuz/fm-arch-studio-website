/* -------------------------------------------------------------------------- */
/*                                 Navigation                                 */
/* -------------------------------------------------------------------------- */

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

const DYNAMIC_ROUTES = {
  PROJECT_DETAIL: (id: string) =>
    `${STATIC_ROUTES.PORTFOLIO.href}/${id}` as const,
} as const;

export const ROUTES = Object.freeze({
  ...STATIC_ROUTES,
  ...DYNAMIC_ROUTES,
});

export const NAV_ITEMS = Object.freeze([
  STATIC_ROUTES.PORTFOLIO,
  STATIC_ROUTES.ABOUT,
  STATIC_ROUTES.CONTACT,
]);
