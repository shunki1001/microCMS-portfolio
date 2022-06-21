import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00053a",
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
  },
});

export default theme;
