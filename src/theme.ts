import { createTheme } from "@mui/material/styles";

export const fontFamily = [
  "Noto Sans JP",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
].join(",");

const theme = createTheme({
  palette: {
    primary: {
      main: "#00053a",
    },
  },
  typography: {
    fontFamily: fontFamily,
    fontSize: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#fefbfe",
        },
      },
    },
    MuiAppBar: {
      styleOverrides:{
        root:{
          boxShadow: "none",
        }
      }
    }
  },
});

export default theme;
