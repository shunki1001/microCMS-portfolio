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
    h2:{
      position: "relative",
      display: "inline-block",
      margin: "2em auto",
      fontSize: "20px",
      marginTop: "calc(4em + 60px)",
      '&::before':{
        content:"''",
        position:"absolute",
        backgroundColor: "black",
        top: "calc(-100% - 60px)",
        left: "0",
        right: "0",
        width: "2px",
        height: "60px",
        margin: "auto",
      },
    },
    body1:{
      lineHeight: "2em",
      margin: "1em auto",
    },
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
