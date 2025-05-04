"use client";

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import PageHead from " ../../../components/PageHead";
 
import Card from "@/components/Card";
import { FileUpload, HomeFilled, MedicalServices } from "@mui/icons-material";

const AdminDashboard = () => {
  const router = useRouter();

  const handleCreateUser = () => {
    router.push("/admin/servie-offered");
  };

  const handleUploadReports = () => {
    router.push("/admin/upload-report");
  };
  const handleHomeSampling = () => {
    router.push("/admin/home-sampling");
  };
  const lab={
    id:1,
    name:"IRTAQA LAB",
    address:"123 Main St, City, Country",
    phone:"123-456-7890",
    email:"irtaqalab@gmai.com",
    city:"Lahore",
  }
const services=[{
  name:"Tests Offered",
  description:"Edit Tests Offered by the lab.",
  buttonText:"Edit Tests Offered",
  onClick:handleCreateUser,
  icon:MedicalServices
},
{
  name:"Upload Reports",
  description:"Upload medical/test reports for users.",
  buttonText:"Upload Report",
  onClick:handleUploadReports,
  icon:FileUpload
},
{
 
  name:"See Patient Record",
  description:"View Patient's Complete Record",
  // buttonText:"View",
  onClick:handleUploadReports,
},
{
 
  name:"Manage Home Sampling",
  description:"View Home Sampling Requests",
  buttonText:"View",
  onClick:handleHomeSampling,
  icon:HomeFilled
}
]
  return (
    <>
    <PageHead text={lab.name} />
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
