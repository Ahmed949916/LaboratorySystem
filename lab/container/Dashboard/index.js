"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import CustomButton from "../../components/CustomButton";

const Dashboard = () => {
  const router = useRouter();

  const handleViewReports = () => {
    router.push("/user/reports");
  };

  return (
    <Box
      sx={{
       
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, color: "#006241", mt: 4, mb: 2 }}
      >
        IRTAQA LAB
      </Typography>

      <Box
        sx={{
          width: "90%",
          maxWidth: "600px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          p: { xs: 3, sm: 4 },
          mb: 4,
        }}
      >
        <Typography variant="body1" color="#4F4F4F" fontWeight={600}>
          Welcome back, {"Ahmad"}!
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Box
            sx={{
              border: "1px solid #E0E0E0",
              borderRadius: "16px",
              p: 3,
              backgroundColor: "#FAFAFA",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ color: "#006241" }}>
              View Reports
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Access your medical or test reports.
            </Typography>
            <Box>
              <CustomButton variant="primary" onClick={handleViewReports}>
                Go to Reports
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
