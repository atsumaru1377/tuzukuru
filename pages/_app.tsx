import type { AppProps } from 'next/app';
import "../public/global.css"

import Theme from "../plugins/uiTheme"
import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={Theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
