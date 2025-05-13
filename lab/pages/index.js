// pages/index.js

import React from 'react';
import { Box, Typography, Container, Stack, Divider } from '@mui/material';
import { useRouter } from 'next/router';
import CustomButton from '@/components/CustomButton';

// Static header/button icons
import ScienceIcon from '@mui/icons-material/Science';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

// Feature icons (must match the iconKey values below)
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import LockIcon from '@mui/icons-material/Lock';

const ICONS = {
  Security: SecurityIcon,
  Speed: SpeedIcon,
  Analytics: AnalyticsIcon,
  SettingsSuggest: SettingsSuggestIcon,
  Assessment: AssessmentIcon,
  People: PeopleIcon,
  TrackChanges: TrackChangesIcon,
  Search: SearchIcon,
  Send: SendIcon,
  Lock: LockIcon,
};

export default function Home({ colors, STEPS, WCOP, LAB_SERVICES, USER_SERVICES }) {
  const router = useRouter();

  return (
    <>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: { xs: 2, md: 3 },
          borderBottom: '1px solid #eaeaea',
          position: 'sticky',
          top: 0,
          bgcolor: 'white',
          zIndex: 10,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ScienceIcon
            sx={{ color: colors.primary, fontSize: { xs: 28, md: 32 }, mr: 1 }}
          />
          <Typography variant="h5" fontWeight="600" color={colors.dark}>
            LabManager
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <CustomButton variant="tertiary" onClick={() => router.push('/user/login')}>
            User Login
          </CustomButton>
          <CustomButton variant="user" onClick={() => router.push('/user/signup')}>
            User Sign Up
          </CustomButton>
        </Box>
      </Box>

   
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            minHeight: '100vh',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            px: 6,
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              fontWeight="700"
              color={colors.dark}
              sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.2 }}
            >
              Streamline Your{' '}
              <Box component="span" sx={{ color: colors.primary }}>
                Laboratory
              </Box>{' '}
              Management
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 5, fontWeight: 400 }}>
              A comprehensive platform connecting laboratories with users for efficient
              service management and seamless collaboration. Simplify operations,
              enhance productivity, and deliver better results.
            </Typography>
          </Box>

          
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              justifyContent: 'center',
            }}
          >
          
            <Box sx={{ bgcolor: 'white', borderRadius: 2, width: { xs: '100%', md: '45%' }, p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <AdminPanelSettingsIcon sx={{ fontSize: 60, color: colors.primary }} />
              </Box>
              <Typography variant="h4" fontWeight="600" textAlign="center" sx={{ mb: 2 }}>
                Laboratory Administrators
              </Typography>
              <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                Manage your laboratory services, track user requests, and streamline operations
                with our comprehensive admin tools.
              </Typography>
              <Stack spacing={2}>
                <CustomButton
                  variant="tertiary"
                  fullWidth
                  startIcon={<HowToRegIcon />}
                  onClick={() => router.push('/admin/signup')}
                >
                  Register Your Laboratory
                </CustomButton>
                <CustomButton
                  variant="secondary"
                  fullWidth
                  startIcon={<LoginIcon />}
                  onClick={() => router.push('/admin/login')}
                >
                  Login as Administrator
                </CustomButton>
              </Stack>
            </Box>

         
            <Box sx={{ bgcolor: 'white', borderRadius: 2, width: { xs: '100%', md: '45%' }, p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <PersonIcon sx={{ fontSize: 60, color: colors.primary }} />
              </Box>
              <Typography variant="h4" fontWeight="600" textAlign="center" sx={{ mb: 2 }}>
                Service Users
              </Typography>
              <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                Access laboratory services, submit requests, and track results with our
                user-friendly interface.
              </Typography>
              <Stack spacing={2}>
                <CustomButton
                  variant="user"
                  fullWidth
                  startIcon={<HowToRegIcon />}
                  onClick={() => router.push('/user/signup')}
                >
                  Create User Account
                </CustomButton>
                <CustomButton
                  variant="secondary"
                  fullWidth
                  startIcon={<LoginIcon />}
                  onClick={() => router.push('/user/login')}
                >
                  Login as User
                </CustomButton>
              </Stack>
            </Box>
          </Box>

     
          <Box>
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.dark}
              textAlign="center"
              sx={{ mb: { xs: 6, md: 8 } }}
            >
              Why Choose Our Platform
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                justifyContent: 'center',
              }}
            >
              {WCOP.map((feature, idx) => {
                const FeatureIcon = ICONS[feature.iconKey];
                return (
                  <Box
                    key={idx}
                    sx={{
                      bgcolor: 'white',
                      borderRadius: 2,
                      width: { xs: '100%', sm: '45%', md: '30%' },
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      p: 3,
                    }}
                  >
                    {FeatureIcon && (
                      <FeatureIcon sx={{ fontSize: 40, color: colors.primary, mb: 1 }} />
                    )}
                    <Typography variant="h5" fontWeight="600" sx={{ mb: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

        
          <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.dark}
              textAlign="center"
              sx={{ mb: { xs: 6, md: 8 } }}
            >
              Who Can Benefit
            </Typography>
            <Box sx={{ bgcolor: 'white', borderRadius: 2, p: 4 }}>
              {/* Laboratory Administrators */}
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <AdminPanelSettingsIcon
                  sx={{ color: colors.primary, fontSize: 36, mr: 1 }}
                />
                <Typography
                  variant="h4"
                  component="span"
                  fontWeight="600"
                  color={colors.primary}
                >
                  For Laboratory Administrators
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                  Take control of your laboratory operations with our comprehensive management
                  system. Easily manage services, track requests, and communicate with users.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 4,
                }}
              >
                {LAB_SERVICES.map((item, idx) => {
                  const LabIcon = ICONS[item.iconKey];
                  return (
                    <Box key={idx} sx={{ display: 'flex', gap: 2 }}>
                      {LabIcon && (
                        <LabIcon sx={{ color: colors.primary, fontSize: 30, pt: 0.5 }} />
                      )}
                      <Box>
                        <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Divider sx={{ my: 6, borderColor: 'rgba(0,0,0,0.08)' }} />

              
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <PersonIcon sx={{ color: colors.primary, fontSize: 36, mr: 1 }} />
                <Typography
                  variant="h4"
                  component="span"
                  fontWeight="600"
                  color={colors.primary}
                >
                  For Service Users
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                  Access laboratory services with ease. Submit requests, track progress, and receive
                  results all in one place.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 4,
                }}
              >
                {USER_SERVICES.map((item, idx) => {
                  const UserIcon = ICONS[item.iconKey];
                  return (
                    <Box key={idx} sx={{ display: 'flex', gap: 2 }}>
                      {UserIcon && (
                        <UserIcon sx={{ color: colors.primary, fontSize: 30, pt: 0.5 }} />
                      )}
                      <Box>
                        <Typography variant="h6" fontWeight="600" sx={{ mb: 1 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Container>

        
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.dark}
              textAlign="center"
              sx={{ mb: { xs: 6, md: 8 } }}
            >
              How It Works
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {STEPS.map((step, idx) => (
                <Box key={idx} sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Box
                    sx={{
                      bgcolor: step.color,
                      color: 'white',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
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
  );
}

export async function getStaticProps() {
  const colors = {
    primary: '#20A0D8',
    secondary: '#80D0F4',
    lightBlue: '#BFE7F9',
    white: '#FFFFFF',
    dark: '#262626',
  };

  const STEPS = [
    {
      step: '01',
      title: 'Register',
      description:
        'Create an account as a laboratory administrator or service user. Set up your profile with relevant information and preferences to get started.',
      color: colors.primary,
    },
    {
      step: '02',
      title: 'Connect',
      description:
        "Labs publish services, users discover and connect with laboratories. Browse through available services or set up your laboratory's service catalog.",
      color: colors.primary,
    },
    {
      step: '03',
      title: 'Collaborate',
      description:
        'Submit requests, process samples, and communicate efficiently. Our platform facilitates seamless interaction between labs and users throughout the process.',
      color: colors.secondary,
    },
    {
      step: '04',
      title: 'Complete',
      description:
        'Deliver results securely and maintain comprehensive records. Access your history of services and results anytime you need them for reference or reporting.',
      color: colors.dark,
    },
  ];

  const WCOP = [
    { iconKey: 'Security', title: 'Secure Data Management', description: 'Your laboratory data is protected with enterprise-grade security protocols and encryption standards.' },
    { iconKey: 'Speed', title: 'Efficient Workflows', description: 'Streamline operations with automated processes and intuitive interfaces designed to reduce manual work.' },
    { iconKey: 'Analytics', title: 'Comprehensive Analytics', description: 'Gain insights with detailed reports and customizable dashboards that help you make data-driven decisions.' },
    { iconKey: 'SettingsSuggest', title: 'Customizable Solutions', description: 'Tailor the platform to your specific laboratory needs with flexible configuration options.' },
    { iconKey: 'Assessment', title: 'Quality Control', description: 'Implement robust quality control measures with built-in validation checks and audit trails.' },
    { iconKey: 'People', title: 'Seamless Collaboration', description: 'Enable effective communication between laboratory staff, administrators, and service users.' },
  ];

  const LAB_SERVICES = [
    { iconKey: 'SettingsSuggest', title: 'Centralized Service Management', description: 'Create, update, and manage all your laboratory services in one place with detailed specifications and pricing.' },
    { iconKey: 'TrackChanges', title: 'User Request Tracking', description: 'Monitor and process user requests efficiently with automated workflows and status updates.' },
    { iconKey: 'Analytics', title: 'Automated Reporting', description: 'Generate comprehensive reports on laboratory performance, service utilization, and financial metrics.' },
    { iconKey: 'People', title: 'Staff Management', description: 'Assign tasks, manage schedules, and monitor staff performance to optimize laboratory operations.' },
  ];

  const USER_SERVICES = [
    { iconKey: 'Search', title: 'Easy Service Discovery', description: 'Find and compare laboratory services based on specifications, pricing, and user reviews.' },
    { iconKey: 'Send', title: 'Streamlined Submission', description: 'Submit service requests with a few clicks using intuitive forms and clear instructions.' },
    { iconKey: 'TrackChanges', title: 'Real-time Status Tracking', description: 'Monitor the progress of your requests with real-time updates and notifications.' },
    { iconKey: 'Lock', title: 'Secure Results Delivery', description: 'Receive your laboratory results through encrypted channels that protect your data.' },
  ];

  return {
    props: {
      colors,
      STEPS,
      WCOP,
      LAB_SERVICES,
      USER_SERVICES,
    },
  };
}
