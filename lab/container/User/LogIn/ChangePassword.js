"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";

import CustomButton from "@/src/components /CustomButton";
import CustomInput from "@/src/components /CustomInput";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/change-password`,
        {
          newPassword: formData.newPassword,
        }
      );

      setInfo("Your password has been changed successfully.");
      console.log("Password change successful:", response.data);

      // Optionally navigate somewhere
      // router.push("/profile");
    } catch (error) {
      console.error(
        "Change password request failed:",
        error.response?.data?.error || error.message
      );
      setError(error.response?.data?.error || "An unexpected error occurred.");
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #eafaf1 0%, #ffffff 100%)",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600, color: "#006241", mb: 2 }}>
        IRTAQA LAB
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "90%",
          maxWidth: "400px",
          bgcolor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          border: "1px solid #cccccc",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          p: { xs: 3, sm: 4 },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#006241" }}>
            Change Password
          </Typography>
          <Typography color="#4F4F4F" fontSize="14px">
            Enter and confirm your new password below.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <CustomInput
            label="New Password"
            name="newPassword"
            type="password"
            placeholder="Enter a new password"
            value={formData.newPassword}
            onChange={handleChange}
          />

          <CustomInput
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your new password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <CustomButton variant="primary" type="submit">
            Update Password
          </CustomButton>
        </Box>

        {error && (
          <Typography color="error" fontSize="14px">
            {error}
          </Typography>
        )}
        {info && (
          <Typography color="primary" fontSize="14px">
            {info}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ChangePassword;
