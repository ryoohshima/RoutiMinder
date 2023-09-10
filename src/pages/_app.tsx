import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>RoutiMinder</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default App;