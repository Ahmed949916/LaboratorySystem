import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = ({ bgColor = "#213555" }) => (
  <Box
  component="footer"
  sx={{
    backgroundColor: bgColor,
    color: "#fff",
    py: 2,
    textAlign: "center",
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1000 // Ensures footer stays above other content
  }}
>
    <Typography variant="body2">
      Powered by Lab Management Authority
    </Typography>
  </Box>
);

export default Footer;
