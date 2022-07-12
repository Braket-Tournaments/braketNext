import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react"
import { withTRPC } from '@trpc/next';
import { AppRouter } from 'server/routers/_app';
import { loggerLink } from '@trpc/client/links/loggerLink'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import superjson from "superjson"
import { url, scale } from '../constants'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <>
      <Head>
        <title>Braket</title>
      </Head>
      <style>
          {`
            :root {
              --font-size: ${scale}px;
              font-size: var(--font-size);
              --navbar-height: 6.5rem;
              --home-carousel-width: 85rem;
              --home-carousel-height: calc(var(--home-carousel-width) / (16 / 9));
            }
          `}
        </style>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url,
      }),
    ]

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': '1',
          }
        }
        return {}
      },
      links,
      transformer: superjson,
    }
  },
  ssr: true,
})(MyApp)