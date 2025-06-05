"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";

const Login = () => {
 
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [loading,setLoading]=useState(false)
  const [error, setError] = useState(null);
  const router = useRouter();

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true)
 
    const result = await signIn("credentials", {
      redirect: false,
      phone: formData.phone,
      password: formData.password,
    });


    if (result?.error) {
      setLoading(false)
 
      setError("Invalid phone or password");
    } else {
        setLoading(false)
 
     
      router.push("/user");  
    }
  };


  return (
    <Box sx={{display:"flex", width:"100%",  minHeight:"100vh",  flexDirection: { xs: "column", md: "row" }}}>
      <Box sx={{width: { xs: "100%", md: "50%" },padding:{xs:4,md:0},  background:"#80D0F4" ,display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <Typography color="#fff" variant="h4">Lab Management</Typography>
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
       User Login
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
          <CustomButton loading={loading} sx={{p:"4px 22px"}}variant="tertiary" type="submit">
            <ArrowForward/>
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
              Do not have an account?{" "}
              <Link href="/user/signup" style={{ color: "#20A0D8", textDecoration: "none", fontWeight: 500 }}>
                Register
              </Link>
            </Typography>
            </Box>
    </Box>
   
    </Box>
 
  );
};

export default Login;
