import '../styles/globals.css'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../theme';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,500,700&display=swap" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider>
    </>
  )
}
export default MyApp
