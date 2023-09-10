import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>RoutiMinder</title>
        <link rel="icon" href="/favicon.png" />
        <meta name='description'  content='RoutiMinder: Your Day, Your Way. Routinely. Craft and follow your daily routines effortlessly.'/>
        <meta property='og:title' content='RoutiMinder' />
        <meta property='og:image' content='https://routi-minder.vercel.app/logo_ogp.png'/>
        <meta property='og:url' content='https://routi-minder.vercel.app/'/>
        <meta property='og:type' content='website'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}