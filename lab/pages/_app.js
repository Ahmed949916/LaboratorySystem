import React from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline, Box } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import theme from '../theme';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isUserRoute = router.pathname.startsWith("/user");

  return (
    <>
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          gap:0,
          flexDirection: "column",
        
        }}
      >
        <Box  >
          <Component {...pageProps} />
        </Box>
        <Footer bgColor={isUserRoute ? "#20A0D8" : "#213555"} />
      
          </Box>
          </ThemeProvider>
    </>
  );
}

export default MyApp;
