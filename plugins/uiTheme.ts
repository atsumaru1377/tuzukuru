import { createTheme } from "@mui/material/styles"
import {blue,grey}  from "@mui/material/colors"

interface Theme {
  
}

const theme = createTheme({
    palette: {
      primary: {
        main: blue[400],
      },
      secondary: {
        main: grey[800],
      },
    },
    typography: {
      fontFamily: [
        'Noto Sans JP', "sans-serif"
      ].join(',')
    },
  });

export default theme;