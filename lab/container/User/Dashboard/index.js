"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import PageHead from "../../../components/PageHead";
import Card from "@/components/Card";
import { FileCopy, LocalHospital, MedicalServices, Home } from "@mui/icons-material";

const Dashboard = () => {
  const router = useRouter();
  const { labId } = router.query;

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
      name: "Book a Test",
      description: "Schedule laboratory tests.",
      buttonText: "Book Now",
      onClick: () => router.push("/user/book-test"),
      icon: MedicalServices,
    },
    {
      name: "Request Home Sampling",
      description: "Request lab sample collection at your home.",
      buttonText: "Request",
      onClick: () => router.push("/user/home-sampling"),
      icon: Home,
    },
    {
      name: "Medical History",
      description: "View your complete medical history for this lab.",
      buttonText: "View",
      onClick: () => router.push("/user/profile"),
      icon: LocalHospital,
    },
  ];

  useEffect(() => {
    async function fetchLabById() {
        const res = await fetch("/api/user/allLabs");
        const data = await res.json();
        const found = data.admins.find((lab) => 
          lab._id.toString() === labId.toString());
        setLabData(found)
        setLoading(false);
  }

    fetchLabById();
  }, [labId]);

  if (loading || !labData) {
    return <Typography p={4}>Loading lab data...</Typography>;
  }

  return (
    <>
      <PageHead text={`Welcome to ${labData.name}`} bg="#20A0D8" onBack={() => router.push("/user/")}>
        <Typography variant="subtitle2" color="#F5EFE7">
          Your health is our priority
        </Typography>
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

          <Typography variant="body1" color="#4F4F4F" fontWeight={600}>
            Lab: {labData.name} ({labData.city})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contact: {labData.phone} — {labData.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {labData.address}
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
