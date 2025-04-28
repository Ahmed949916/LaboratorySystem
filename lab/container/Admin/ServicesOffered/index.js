import PageHead from '@/components/PageHead';
import { Box, Typography } from '@mui/material'
import React from 'react'
// const servicesOfffered=[{
//   id:1,
//   name:'Blood Test',
//   price:1000,
//   description:'Blood test for various diseases',
 
// },
// {
//   id:2,
//   name:'Urine Test',
//   price:500,
//   description:'Urine test for various diseases',
 
// },
// {
//   id:3,
//   name:'X-Ray',
//   price:2000,
//   description:'X-Ray for various body parts',
 
// }]
const ServicesOffered = ({ services }) => {
  return (
    <Box>
      <PageHead text="Services Offered" />

      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", p: "20px" }}>
        {services.map((service) => (
          <Box
            key={service.id}
            sx={{
              border: "1px solid black",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <Typography variant="h5">{service.name}</Typography>
            <Typography variant="body1">Price: {service.price}</Typography>
            <Typography variant="body1">Description: {service.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesOffered;