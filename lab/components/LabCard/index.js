import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid
} from '@mui/material';
import {
  LocationOn,
  Email,
  Phone
} from '@mui/icons-material';

const LabCard = ({ lab, onClick }) => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardActionArea onClick={onClick} sx={{ background: "#FAF7F3" }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5" fontWeight="bold" color="#213555">
              {lab.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn color="action" />
              <Typography variant="body2" color="text.secondary">
                {lab.city}
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn color="action" sx={{ mr: 1 }} />
                <Typography variant="body1" color="text.secondary">
                  {lab.address}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email color="action" sx={{ mr: 1 }} />
                <Typography variant="body1" color="text.secondary">
                  {lab.email}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone color="action" sx={{ mr: 1 }} />
                <Typography variant="body1" color="text.secondary">
                  {lab.phone}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LabCard;
