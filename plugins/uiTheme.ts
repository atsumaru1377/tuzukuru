import { createTheme } from "@mui/material/styles"
import {grey}  from "@mui/material/colors"

// Material UIのテーマ上書き
const theme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
      secondary: {
        main: grey[400],
      },
    },
  });

export default theme;