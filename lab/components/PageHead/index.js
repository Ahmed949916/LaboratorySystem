import { ArrowBack, LogoutRounded } from "@mui/icons-material";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import React from "react";
import { signOut } from "next-auth/react"

const PageHead = ({ text, onBack, onLogout, children, bg = "#213555" }) => {
  return (
    <Box sx={{ background: bg, p: 2 }}>
      {/* Header Row */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {onBack && (
            <IconButton onClick={onBack} sx={{ color: "#fff", mr: 2 }} aria-label="Go back">
              <ArrowBack />
            </IconButton>
          )}
          <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {text}
          </Typography>
        
     {
      children&&(<Box mt={2}>
        {children}
      </Box>)
     } 

          </Box>

        
        </Box>

        
          <Tooltip
            title="Logout"
            arrow
            sx={{
              '& .MuiTooltip-tooltip': {
                backgroundColor: '#000',
                color: '#fff',
              },
              '& .MuiTooltip-arrow': {
                color: '#000',
              },
            }}
          >
            <IconButton onClick={() => signOut({ callbackUrl: "/" })} aria-label="Logout">
              <LogoutRounded sx={{ fontSize: "24px", color: "#fff" }} />
            </IconButton>
          </Tooltip>
        
      </Box>

    
    </Box>
  );
};

export default PageHead;
