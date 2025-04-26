"use client";

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import PageHead from "../../../components/PageHead";
import CustomButton from "../../../components/CustomButton";

const AdminDashboard = () => {
  const router = useRouter();

  const handleCreateUser = () => {
    router.push("/admin/create-user");
  };

  const handleUploadReports = () => {
    router.push("/admin/upload-report");
  };

  return (
    <>
    <PageHead text=" IRTAQA LAB - Admin"/>
    <Box
      sx={{
        // background: "linear-gradient(135deg, #eafaf1 0%, #ffffff 100%)",
        background:"#F8FAFC",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 6,
        px: 2,
      }}
      >


      <Box
        sx={{
          width: "90%",
          maxWidth: 700,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        >
        <Typography variant="body1" color="#4F4F4F" fontWeight={600}>
          Welcome back, Admin!
        </Typography>

        {/* Services */}
        <Box 
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}
          >
          {/* Create User Card */}
          <Paper
            sx={{
              borderRadius: 3,
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
            }}
            elevation={2}
            >
            <Typography variant="h6" sx={{ color: "#006241",fontWeight:"600" }}>
              Create User
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add a new user account in the system.
            </Typography>
            <Box mt={1}>
              <CustomButton variant="primary" onClick={handleCreateUser}>
               Create New User
              </CustomButton>
            </Box>
          </Paper>

          {/* Upload Reports Card */}
          <Paper
            sx={{
              borderRadius: 3,
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
            }}
            elevation={2}
            >
            <Typography variant="h6" sx={{ color: "#006241",fontWeight:"600" }}>
              Upload Reports
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upload medical/test reports for users.
            </Typography>
            <Box mt={1}>
              <CustomButton variant="primary" onClick={handleUploadReports}>
                Upload Report
              </CustomButton>
            </Box>
          </Paper>
          <Paper
            sx={{
              borderRadius: 3,
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
            }}
            elevation={2}
            >
            <Typography variant="h6" sx={{ color: "#006241",fontWeight:"600" }}>
              See Patient Record
            </Typography>
            <Typography variant="body2" color="text.secondary">
              View Patient's Complete Record
            </Typography>
            <Box mt={1}>
              <CustomButton variant="primary" onClick={handleUploadReports}>
               View
              </CustomButton>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
            </>
  );
};

export default AdminDashboard;
