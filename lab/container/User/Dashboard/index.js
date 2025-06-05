"use client";

import React, {  useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/router";
import PageHead from "../../../components/PageHead";
import Card from "@/components/Card";
import { FileCopy,  Home, LocationOn } from "@mui/icons-material";
import { useAuth } from "@/contexts/AuthContext";
 
const Dashboard = () => {
  const router = useRouter();
  const { labId } = router.query;
  
  const {setCurrentLab}=useAuth()
 useEffect(() => {
  if (labId) {
    console.log("labId", labId);
    setCurrentLab(labId);
  }
}, [labId]);

  
  const [labData, setLabData] = useState(null);
  const [loading, setLoading] = useState(true);

  const services = [
    {
      name: "View Reports",
      description: "Access your medical or test reports.",
      buttonText: "Go to Reports",
      onClick: () => router.push("/user/reports"),
      icon: FileCopy,
    },
 
    {
      name: "View Offered Tests",
      description: "Explore the tests available at this lab.",
      buttonText: "View Tests",
      onClick: () => router.push("/user/test-offered"),
      icon: Home,
    },
 
  ];

  useEffect(() => {
    async function fetchLabById() {
        const res = await fetch("/api/user/allLabs");
        const data = await res.json();
        const found = data.admins.find(
  (lab) => labId && lab._id.toString() === labId.toString()
);   
        setLabData(found)
        setLoading(false);
  }

    fetchLabById();
  }, [labId]);

  if (loading || !labData) {
    return    <Box
      sx={{ height: '90vh' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  }

  return (
    <>
      <PageHead text={`Welcome to ${labData.name}`} bg="#20A0D8" onBack={() => router.push("/user/")}>
        <Typography variant="subtitle2" color="#F5EFE7">
          Your health is our priority
        </Typography>
 <Box sx={{display:"flex" ,alignItems:"space-between"}}>

<Typography variant="subtitle2" color="#F5EFE7"  >
  Contact: {labData.phone} — {labData.email}  <LocationOn sx={{fontSize:"14px"}} /> {labData.city}
</Typography>
<Box>
 
</Box>
 </Box>
 
      </PageHead>

      <Box
        sx={{
          background: "#F5EFE7",
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
  User Dashboard
</Typography>

 



          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr",
              },
              gap: 3,
            }}
          >
            {services.map((service, index) => (
              <Card service={service} index={index} key={index} buttonVariant="user" />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
