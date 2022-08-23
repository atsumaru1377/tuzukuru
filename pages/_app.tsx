import type { AppProps } from 'next/app';
import SiteHead from "./components/siteHeader";
import "../public/global.css"

import Theme from "../plugins/uiTheme"
import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={Theme} >
    <SiteHead/>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
