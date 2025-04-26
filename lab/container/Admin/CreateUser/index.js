"use client";

import React, { useState } from "react";
import axios from "axios";
import { Box, Typography, Modal, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../..//components/CustomInput";
import PageHead from "../../../components/PageHead";

const CreateUser = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [generatedPassword, setGeneratedPassword] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setGeneratedPassword(null);
    setIsLoading(true);

    if (!/^0\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 11 digits and start with 0");
      setIsLoading(false);
      return;
    }

    try {
      const formattedPhone = `+92${phone.slice(1)}`;




      // API CALLING
      // const api = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/create-user`;
      // const response = await axios.post(api, { phoneNumber: formattedPhone });

      const { message, initialPassword } = response.data;
      setSuccessMessage(message || "User created successfully.");
      setGeneratedPassword(initialPassword || null);
      setIsModalOpen(true);
      setError(null);
      setIsLoading(false);
      setPhone("");
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBack = () => {
    router.push("/admin/");
  };

  return (
    <>
      <PageHead text="Create a new User" />

      <Box
        sx={{
          background: "#F8FAFC",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 6,
          px: 2,
        }}
      >
        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={3}
          sx={{
            width: "90%",
            maxWidth: 500,
            borderRadius: 3,
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography variant="h6" sx={{ color: "#006241", fontWeight: 600 }}>
            Add a New User
          </Typography>

          <CustomInput
            type="tel"
            label="Phone Number"
            name="phone"
            placeholder="03xxxxxxxxx"
            inputVal={phone}
            onInputChange={(value) => {
              setPhone(value);
              setError(null);
            }}
            error={!!error}
            helperText={error}
          />

          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CustomButton isLoading={isLoading} variant="primary" type="submit" fullWidth>
              Create User
            </CustomButton>
            <CustomButton variant="secondary" onClick={handleBack}>
              Back
            </CustomButton>
          </Box>
        </Paper>
      </Box>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            boxShadow: 24,
            borderRadius: 3,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#006241" }}>
            User Created Successfully!
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
            {successMessage || "Please note the initial password below."}
          </Typography>

          {generatedPassword && (
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#D32F2F",
                bgcolor: "#FCE4EC",
                padding: "8px 16px",
                borderRadius: "6px",
              }}
            >
              {generatedPassword}
            </Typography>
          )}

          <CustomButton variant="primary" onClick={handleCloseModal}>
            OK
          </CustomButton>
        </Box>
      </Modal>
    </>
  );
};

export default CreateUser;
