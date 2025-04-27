import { Typography } from "@mui/material";
import React from "react";

 

const PageHead  = ({ text }) => {
  return (  
    <Typography 
      variant="h4" 
      sx={{ 
        fontWeight: 600, 
        color: "#fff", 
        background: "#213555", 
        p: "16px" 
      }}
    >
      {text}
    </Typography>
  );
};

export default PageHead;
