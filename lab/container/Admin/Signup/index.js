"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
 
import CustomButton from "../../../components/CustomButton";
import CustomInput from  "../../../components/CustomInput";
 
import Link from "next/link";


const Signup = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    name:"",
    email:"",
    address:"",
    city:"",
    confirmPassword:"",
    
  });
  const [error, setError] = useState(null);
  const router = useRouter();

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    

 
    fetch('/api/admin/signup',{
      method:'POST',
      body:JSON.stringify({admin:formData}),   
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json())
      .then(data => {
        console.log(data.message);  // Changed data.comment to data.message to match your API response
        if (data.message) {
          router.push('/admin/login');  // Redirect to login page after successful signup
        }
      })
      .catch(err => {
        console.error(err);
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <Box sx={{display:"flex", width:"100%",   flexDirection: { xs: "column", md: "row" }}}>
      <Box sx={{width: { xs: "100%", md: "50%" },padding:{xs:4,md:0},  background:"#213555" ,display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <Typography mb={1} color="#F5EFE7" variant="h4">Lab Management</Typography>
              <Typography  color="#F5EFE7" fontWeight={600}  >
            Register to take your lab management to the next level !
          </Typography>
        </Box>
      <Box
      sx={{
        background: "#F5EFE7",
        width: { xs: "100%", md: "50%" },
        minHeight: "100vh",
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
       Admin Signup
      </Typography>
         
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <CustomInput
  label="Lab Name"
  name="name"
  type="text"
  placeholder="Enter Lab Name"
  inputVal={formData.name}
  onInputChange={(val) => setFormData((prev) => ({ ...prev, name: val }))}
/>

<CustomInput
  label="Email"
  name="email"
  type="email"
  placeholder="Enter your email"
  inputVal={formData.email}
  onInputChange={(val) => setFormData((prev) => ({ ...prev, email: val }))}
/>

<CustomInput
  label="Lab Address"
  name="address"
  type="text"
  placeholder="Enter Lab address"
  inputVal={formData.address}
  onInputChange={(val) => setFormData((prev) => ({ ...prev, address: val }))}
/>

<CustomInput
  label="City"
  name="city"
  type="text"
  placeholder="Enter your city"
  inputVal={formData.city}
  onInputChange={(val) => setFormData((prev) => ({ ...prev, city: val }))}
/>

<CustomInput
  label="Phone Number"
  name="phone"
  type="tel"
  placeholder="03xxxxxxxxx"
  inputVal={formData.phone}
  onInputChange={(val) => setFormData((prev) => ({ ...prev, phone: val }))}
/>

<CustomInput
  label="Create Password"
  name="password"
  type="password"
  placeholder="Enter your password"
  inputVal={formData.password}
  onInputChange={(val) => setFormData((prev) => ({ ...prev, password: val }))}
/>

<CustomInput
  label="Confirm Password"
  name="confirmPassword"
  type="password"
  placeholder="Confirm your password"
  inputVal={formData.confirmPassword}
  onInputChange={(val) => setFormData((prev) => ({ ...prev, confirmPassword: val }))}
/>

        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", }}>
          <CustomButton  variant="tertiary" type="submit">
           Register
          </CustomButton>
        </Box>

        {error && (
          <Typography color="error" fontSize="14px">
            {error}
          </Typography>
        )}
      </Box>
      <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Already Got an account?{" "}
              <Link href="/admin/login" style={{ color: "#20A0D8", textDecoration: "none", fontWeight: 500 }}>
                Login
              </Link>
            </Typography>
            
          </Box>
    </Box>
    </Box>
 
  );
};

export default Signup;
