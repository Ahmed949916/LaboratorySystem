import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",  
    primary: {
      main: "#006241",  
    },
    secondary: {
      main: "#4DA1A9",  
    },
    background: {
      default: "#F8FAFC", 
      paper: "#ffffff",    
    },
    error: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: "600",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
