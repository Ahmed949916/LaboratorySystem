"use client";

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import PageHead from "../../../components/PageHead";
import CustomButton from "../../../components/CustomButton";
import Card from "@/components/Card";

const AdminDashboard = () => {
  const router = useRouter();

  const handleCreateUser = () => {
    router.push("/admin/servie-offered");
  };

  const handleUploadReports = () => {
    router.push("/admin/upload-report");
  };
const services=[{
  name:"Services Offered",
  description:"Edit Services",
  buttonText:"Edit Services",
  onClick:handleCreateUser,
},
{
  name:"Upload Reports",
  description:"Upload medical/test reports for users.",
  buttonText:"Upload Report",
  onClick:handleUploadReports,
},
{
 
  name:"See Patient Record",
  description:"View Patient's Complete Record",
  buttonText:"View",
  onClick:handleUploadReports,
}]
  return (
    <>
    <PageHead text=" IRTAQA LAB - Admin"/>
    <Box
      sx={{
        background:"#F5EFE7",
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
 
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        >
          <Typography variant="h4" color="#213555" fontWeight={600}>
          Manage your lab services
        </Typography>
        <Typography variant="body1" color="#4F4F4F" fontWeight={600}>
          Welcome back, Admin!
        </Typography>
        
        <Box 
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}
          >

            {services.map((service,index)=>{
              return(
       <Card service={service} index={index}/>
              )
            })}
 
    
        </Box>
      </Box>
    </Box>
            </>
  );
};

export default AdminDashboard;
