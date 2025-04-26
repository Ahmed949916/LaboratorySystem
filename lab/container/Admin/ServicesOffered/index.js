import { Box, Typography } from '@mui/material'
import React from 'react'
const servicesOfffered=[{
  id:1,
  name:'Blood Test',
  price:1000,
  description:'Blood test for various diseases',
 
},
{
  id:2,
  name:'Urine Test',
  price:500,
  description:'Urine test for various diseases',
 
},
{
  id:3,
  name:'X-Ray',
  price:2000,
  description:'X-Ray for various body parts',
 
}]
const ServcesOffered = () => {
  return (
  
  <Box sx={{p:"20px"}}>

    <Typography variant='h3'>ServcesOffered</Typography>

    <Box sx={{display:"flex",flexDirection:"column",gap:"20px"}}>

    {servicesOfffered.map((service)=>(
      <Box key={service.id} sx={{border:"1px solid black",padding:"20px",borderRadius:"10px", cursor:"pointer"}}>
        <Typography variant='h5'>{service.name}</Typography>
        <Typography variant='body1'>Price: {service.price}</Typography>
        <Typography variant='body1'>Description: {service.description}</Typography>
      </Box>
    ))}
    </Box>
  </Box>

  );
}

export default ServcesOffered