import React from "react";
import { useRouter } from "next/router";
 
import { CssBaseline, Box } from "@mui/material";
import Footer from "@/components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isUserRoute = router.pathname.startsWith("/user");

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Component {...pageProps} />
        </Box>
        <Footer bgColor={isUserRoute ? "#20A0D8" : "#213555"} />

          </Box>
    </>
  );
}

export default MyApp;
