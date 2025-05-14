import React from 'react';
import { Box, Typography } from '@mui/material';
import { LocationOn, Email, Phone } from '@mui/icons-material';

const LabCard = ({ lab, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        background: '#FAF7F3',
        borderRadius: 2,
        p: 3,
        cursor: 'pointer',
      
      }}
    >
 
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="#213555">
          {lab.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOn color="action" sx={{ mr: 0.5 }} />
          <Typography variant="body2"  >
            {lab.city}
          </Typography>
        </Box>
      </Box>

      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <LocationOn   sx={{ mr: 1 }} />
        <Typography variant="body1"  >
          {lab.address}
        </Typography>
      </Box>

  
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mt: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Email   sx={{ mr: 1 }} />
          <Typography variant="body1"  >
            {lab.email}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Phone   sx={{ mr: 1 }} />
          <Typography variant="body1"  >
            {lab.phone}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LabCard;
