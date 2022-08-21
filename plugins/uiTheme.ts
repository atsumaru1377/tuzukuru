import { createTheme } from "@mui/material/styles"
import {blue}  from "@mui/material/colors"

// Material UIのテーマ上書き
const theme = createTheme({
    palette: {
      primary: {
        main: blue[400],
      },
      secondary: {
        main: blue[50],
      },
    },
  });

export default theme;