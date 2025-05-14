import React from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline, Box } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import theme from '../theme';
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isUserRoute = router.pathname.startsWith("/user");

  return (
    <>
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
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
        </AuthProvider>
          </SessionProvider>
    </>
  );
}

export default MyApp;
