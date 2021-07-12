import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <CssBaseline />
    </ThemeProvider>
  )
}
export default MyApp
