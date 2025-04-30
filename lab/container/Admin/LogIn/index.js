"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";

import CustomButton from "../../../components/CustomButton";
import CustomInput from  "../../../components/CustomInput";
import { ArrowForward, ArrowRight } from "@mui/icons-material";


const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log(formData)
  };

  return (
    <Box sx={{display:"flex", width:"100%", height:"100vh",  flexDirection: { xs: "column", md: "row" }}}>
      <Box sx={{width: { xs: "100%", md: "50%" },padding:{xs:4,md:0},  background:"#213555" ,display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <Typography color="#F5EFE7" variant="h4">Lab Management</Typography>
        </Box>
      <Box
      sx={{
        background: "#F5EFE7",
        width: { xs: "100%", md: "50%" },
        minHeight: "89vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >


      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "90%",
          maxWidth: "400px",
          borderRadius: "16px",    
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          p: { xs: 3, sm: 4 },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
        variant="h4"
        sx={{ fontWeight: 600, color: "#213555" }}
      >
       Admin Login
      </Typography>
          <Typography variant="" color="#213555" fontWeight={600} fontSize="12px">
            Welcome! Good to see you back!!.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <CustomInput
  label="Phone Number"
  name="phone"
  type="tel"
  placeholder="03xxxxxxxxx"
  inputVal={formData.phone}  
  onInputChange={(val) => setFormData(prev => ({ ...prev, phone: val }))}
/>

<CustomInput
  label="Password"
  name="password"
  type="password"
  placeholder="Enter your password"
  inputVal={formData.password}  
  onInputChange={(val) => setFormData(prev => ({ ...prev, password: val }))}
/>

        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", }}>
          <CustomButton sx={{p:"4px 22px"}}variant="tertiary" type="submit">
            <ArrowForward/>
          </CustomButton>
        </Box>

        {error && (
          <Typography color="error" fontSize="14px">
            {error}
          </Typography>
        )}
      </Box>
    </Box>
    </Box>
 
  );
};

export default Login;
