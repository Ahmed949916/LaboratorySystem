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
    }}
  >
    <Typography variant="body2">
      Powered by Lab Management Authority
    </Typography>
  </Box>
);

export default Footer;
