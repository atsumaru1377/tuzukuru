import { createTheme } from "@mui/material/styles"
import {blue,grey}  from "@mui/material/colors"

// Material UIのテーマ上書き
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