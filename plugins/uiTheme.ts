import { createTheme } from "@mui/material/styles"
import {blue,grey}  from "@mui/material/colors"

const theme = createTheme({
    palette: {
      primary: {
        main: blue[400],
      },
      secondary: {
        main: grey[800],
      },
      success:{
        main : "#32C2F6"
      },
      warning:{
        main:"#FA9A16",
      },
      info:{
        main:"#36DE58"
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1150,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: [
        'Noto Sans JP', "sans-serif"
      ].join(',')
    },
  });

export default theme;