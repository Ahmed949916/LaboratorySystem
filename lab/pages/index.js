"use client"

import { Box, Typography, Container, Stack, Divider } from "@mui/material"
import ScienceIcon from "@mui/icons-material/Science"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import PersonIcon from "@mui/icons-material/Person"
import SecurityIcon from "@mui/icons-material/Security"
import SpeedIcon from "@mui/icons-material/Speed"
import AnalyticsIcon from "@mui/icons-material/Analytics"
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"
import AssessmentIcon from "@mui/icons-material/Assessment"
import PeopleIcon from "@mui/icons-material/People"
import SearchIcon from "@mui/icons-material/Search"
import SendIcon from "@mui/icons-material/Send"
import TrackChangesIcon from "@mui/icons-material/TrackChanges"
import LockIcon from "@mui/icons-material/Lock"
import LoginIcon from "@mui/icons-material/Login"
import HowToRegIcon from "@mui/icons-material/HowToReg"
import CustomButton from "@/components/CustomButton"
import { useRouter } from "next/navigation"
 
 

export default function Home() {
  const colors = {
    primary: "#20A0D8",
    secondary: "#80D0F4",
    lightBlue: "#BFE7F9",
    white: "#FFFFFF",
    dark: "#262626",
  }
  const STEPS=[
    {
      step: "01",
      title: "Register",
      description:
        "Create an account as a laboratory administrator or service user. Set up your profile with relevant information and preferences to get started.",
      color: colors.primary,
    },
    {
      step: "02",
      title: "Connect",
      description:
        "Labs publish services, users discover and connect with laboratories. Browse through available services or set up your laboratory's service catalog.",
      color: colors.primary,
    },
    {
      step: "03",
      title: "Collaborate",
      description:
        "Submit requests, process samples, and communicate efficiently. Our platform facilitates seamless interaction between labs and users throughout the process.",
      color: colors.secondary,
    },
    {
      step: "04",
      title: "Complete",
      description:
        "Deliver results securely and maintain comprehensive records. Access your history of services and results anytime you need them for reference or reporting.",
      color: colors.dark,
    },
  ]
  const WCOP=[
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Secure Data Management",
      description:
        "Your laboratory data is protected with enterprise-grade security protocols and encryption standards.",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Efficient Workflows",
      description:
        "Streamline operations with automated processes and intuitive interfaces designed to reduce manual work.",
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Comprehensive Analytics",
      description:
        "Gain insights with detailed reports and customizable dashboards that help you make data-driven decisions.",
    },
    {
      icon: <SettingsSuggestIcon sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Customizable Solutions",
      description:
        "Tailor the platform to your specific laboratory needs with flexible configuration options.",
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Quality Control",
      description:
        "Implement robust quality control measures with built-in validation checks and audit trails.",
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Seamless Collaboration",
      description:
        "Enable effective communication between laboratory staff, administrators, and service users.",
    },
  ]
  const LAB_SERVICES=[
    {
      icon: <SettingsSuggestIcon sx={{ color: colors.primary, fontSize: 30 }} />,
      title: "Centralized Service Management",
      description:
        "Create, update, and manage all your laboratory services in one place with detailed specifications and pricing.",
    },
    {
      icon: <TrackChangesIcon sx={{ color: colors.primary, fontSize: 30 }} />,
      title: "User Request Tracking",
      description:
        "Monitor and process user requests efficiently with automated workflows and status updates.",
    },
    {
      icon: <AnalyticsIcon sx={{ color: colors.primary, fontSize: 30 }} />,
      title: "Automated Reporting",
      description:
        "Generate comprehensive reports on laboratory performance, service utilization, and financial metrics.",
    },
    {
      icon: <PeopleIcon sx={{ color: colors.primary, fontSize: 30 }} />,
      title: "Staff Management",
      description:
        "Assign tasks, manage schedules, and monitor staff performance to optimize laboratory operations.",
    },
  ]

  const USER_SERVICES=[
    {
      icon: <SearchIcon sx={{ color: colors.primary, fontSize: 30 }} />,
      title: "Easy Service Discovery",
      description:
        "Find and compare laboratory services based on specifications, pricing, and user reviews.",
    },
    {
      icon: <SendIcon sx={{ color: colors.primary, fontSize: 30 }} />,
      title: "Streamlined Submission",
      description:
        "Submit service requests with a few clicks using intuitive forms and clear instructions.",
    },
    {
      icon: <TrackChangesIcon sx={{ color: colors.primary, fontSize: 30 }} />,
      title: "Real-time Status Tracking",
      description: "Monitor the progress of your requests with real-time updates and notifications.",
    },
    {
      icon: <LockIcon sx={{ color: colors.primary, fontSize: 30 }} />,
      title: "Secure Results Delivery",
      description: "Receive your laboratory results through encrypted channels that protect your data.",
    },
  ]

  const router=useRouter()

  return (
 
 
  <>
      <Box
        sx={{
          
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: { xs: 2, md: 3 },
          borderBottom: "1px solid #eaeaea",
          position: "sticky",
          top: 0,
          bgcolor: "white",
          zIndex: 10,
          
        }}
        >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ScienceIcon sx={{ color: colors.primary, fontSize: { xs: 28, md: 32 }, mr: 1 }} />
          <Typography variant="h5" fontWeight="600" color={colors.dark}>
            LabManager
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <CustomButton variant="tertiary" onClick={() => {router.push("/user/login")}}>
            User Login
          </CustomButton>
          <CustomButton variant="user" onClick={() => {router.push("/user/signup")}}>
            User Sign Up
          </CustomButton>
        </Box>
      </Box>


      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center" , pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },}}>
  <Box sx={{ bgcolor: "white", minHeight: "100vh",maxWidth:"1200px" ,flexDirection:"column",gap:6,display:"flex",px:6}}>
      
      <Box>
         
          <Box
            sx={{
              textAlign: "center",
            }}
            >
            <Typography
              variant="h2"
              fontWeight="700"
              color={colors.dark}
              sx={{
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
              >
              Streamline Your{" "}
              <Box component="span" sx={{ color: colors.primary }}>
                Laboratory
              </Box>{" "}
              Management
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 5, fontWeight: 400,   }}
              >
              A comprehensive platform connecting laboratories with users for efficient service management and seamless
              collaboration. Simplify operations, enhance productivity, and deliver better results.
            </Typography>
          </Box>
       
      </Box>

   
      
        <Box  >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              justifyContent: "center",
            }}
            >
         
            <Box
              sx={{
                bgcolor: "white",
                
                borderRadius: 2,
                width: { xs: "100%", md: "45%" },
                
              }}
              >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <AdminPanelSettingsIcon sx={{ fontSize: 60, color: colors.primary }} />
              </Box>
              <Typography variant="h4" fontWeight="600" textAlign="center" sx={{ mb: 2 }}>
                Laboratory Administrators
              </Typography>
              <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                Manage your laboratory services, track user requests, and streamline operations with our comprehensive
                admin tools.
              </Typography>
              <Stack spacing={2}>
                <CustomButton variant="tertiary" onClick={()=>{router.push("/admin/signup")}} fullWidth startIcon={<HowToRegIcon />}>
                  Register Your Laboratory
                </CustomButton>
                <CustomButton variant="secondary"  onClick={()=>{router.push("/admin/login")}} fullWidth startIcon={<LoginIcon />}>
                  Login as Administrator
                </CustomButton>
              </Stack>
            </Box>

           
            <Box
              sx={{
                bgcolor: "white",
                 
                borderRadius: "16px",
                width: { xs: "100%", md: "45%" },
                
              }}
              >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <PersonIcon sx={{ fontSize: 60, color: colors.primary }} />
              </Box>
              <Typography variant="h4" fontWeight="600" textAlign="center" sx={{ mb: 2 }}>
                Service Users
              </Typography>
              <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                Access laboratory services, submit requests, and track results with our user-friendly interface.
              </Typography>
              <Stack spacing={2}>
                <CustomButton variant="user"  onClick={()=>{router.push("/user/signup")}}fullWidth startIcon={<HowToRegIcon />}>
                  Create User Account
                </CustomButton>
                <CustomButton variant="secondary" onClick={()=>{router.push("/user/login")}} fullWidth startIcon={<LoginIcon />}>
                  Login as User
                </CustomButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      

      {/* Features Section */}
      <Box>
        
          <Typography
            variant="h3"
            fontWeight="600"
            color={colors.dark}
            textAlign="center"
            sx={{
              mb: { xs: 6, md: 8 },
              
            }}
            >
            Why Choose Our Platform
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
            >
            {WCOP.map((feature, index) => (
              <Box
              key={index}
              sx={{
                bgcolor: "white",
              
                borderRadius: "16px",
                width: { xs: "100%", sm: "45%", md: "30%" },
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
       
                }}
                >
                <Box sx={{ mb: 2, transition: "transform 0.3s ease" }}>{feature.icon}</Box>
                <Typography variant="h5" fontWeight="600" sx={{ mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
    
      </Box>

    
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Typography
            variant="h3"
            fontWeight="600"
            color={colors.dark}
            textAlign="center"
            sx={{
              mb: { xs: 6, md: 8 },
              
            }}
            >
            Who Can Benefit
          </Typography>

          <Box
            sx={{
              bgcolor: "white",
             
              borderRadius: "16px",
              
              
            }}
            >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  mb: 3,
                }}
                >
                <AdminPanelSettingsIcon sx={{ color: colors.primary, fontSize: 36 }} />
                <Typography variant="h4" fontWeight="600" color={colors.primary}>
                  For Laboratory Administrators
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
                Take control of your laboratory operations with our comprehensive management system. Easily manage
                services, track requests, and communicate with users.
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 4,
                }}
                >
                {LAB_SERVICES.map((item, index) => (
                  <Box
                  key={index}
                  sx={{
                    display: "flex",
                    gap: 2,
                  
                    borderRadius: "12px",
       
                  }}
                  >
                    <Box sx={{ pt: 0.5 }}>{item.icon}</Box>
                    <Box>
                      <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 6, borderColor: "rgba(0,0,0,0.08)" }} />

            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  mb: 3,
                }}
                >
                <PersonIcon sx={{ color: colors.primary, fontSize: 36 }} />
                <Typography variant="h4" fontWeight="600" color={colors.primary}>
                  For Service Users
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
                Access laboratory services with ease. Submit requests, track progress, and receive results all in one
                place.
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 4,
                }}
                >
                {USER_SERVICES.map((item, index) => (
                  <Box
                  key={index}
                  sx={{
                    display: "flex",
                    gap: 2,
                   
                    borderRadius: "12px",
                
            
                  }}
                  >
                    <Box sx={{ pt: 0.5 }}>{item.icon}</Box>
                    <Box>
                      <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

 
      <Box sx={{  }}>
         
          <Typography
            variant="h3"
            fontWeight="600"
            color={colors.dark}
            textAlign="center"
            sx={{
              mb: { xs: 6, md: 8 },
            }}
            >
            How It Works
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
 
            }}
            >
            {STEPS.map((step, index) => (
              <Box
              key={index}
              sx={{
                display: "flex",
                gap: 3,
 
              }}
              >
                <Box
                  sx={{
                    bgcolor: step.color,
                    color: "white",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                
                    zIndex: 1,
                  }}
                  >
                  <Typography variant="h5" fontWeight="bold">
                    {step.step}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight="600" sx={{ mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
    
      </Box>
      </Box>

 
    </Box>
            </>
  )
}
