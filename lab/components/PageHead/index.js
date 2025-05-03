import { ArrowBack, Logout, LogoutRounded } from "@mui/icons-material";
import { Box, Typography, IconButton } from "@mui/material";
import React from "react";

const PageHead = ({ text, onBack ,onLogout,children,bg="#213555"}) => {
  
  return (
    <Box sx={{ background: bg, p: "16px",display: "flex", flexDirection: "column", gap:2 }}>
    <Box sx={{ display: "flex", alignItems: "center",justifyContent:"space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>

      {onBack&&(     <IconButton onClick={onBack} sx={{ color: "#fff", mr: 2 }} aria-label="Go back">
        <ArrowBack />
      </IconButton>)}
 
      <Typography
      variant="h4"
     
     sx={{
      //  fontSize:  "28px",
       fontWeight: 600,
       color: "#fff",
      }}
      >
        {text}
      </Typography>
        </Box>
        <IconButton onClick={()=>{}} aria-label="Logout">
  <LogoutRounded sx={{ fontSize: "24px", color: "#fff" }} />
</IconButton>

        </Box>
        {children}
        
          </Box>
  );
};

export default PageHead;
