import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /*
    server-side environment variables
    ----------------------------------------------------------------------
    - Server-side environment variables, not available on the client.
    - Specify your server-side environment variables schema here. This way you can ensure the app isn't built with invalid env vars.
    ! Will throw if you access these variables on the client.
   */
  server: {
    SITE_URL: z.string().url(),
  },
  /*
    client-side environment variables
    ----------------------------------------------------------------------
    - Environment variables available on the client (and server).
    - Specify your client-side environment variables schema here. This way you can ensure the app isn't built with invalid env vars.
    ! You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().min(1),
  },
  /* 
    shared variables
    ----------------------------------------------------------------------
    Shared variables, often those that are provided by build tools and is available to both client and server, but isn't prefixed and doesn't require to be manually supplied. For example NODE_ENV, VERCEL_URL etc.
   */
  shared: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },
  /*
    runtimeEnv
    ----------------------------------------------------------------------
    - Due to how Next.js bundles environment variables on Edge and Client, we need to manually destructure them to make sure all are included in bundle.
    ! You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  emptyStringAsUndefined: true,
});
