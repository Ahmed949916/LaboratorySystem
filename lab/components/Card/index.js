import {   Typography,Box, Icon } from '@mui/material'
import React from 'react'
import CustomButton from '../CustomButton'
 
const Card = ({service,index,icon,buttonVariant="tertiary"}) => {
  return (
    <Box
    key={index}
    sx={{
      borderRadius: 3,
      background:"#FAF7F3",
      p: 3,
      display: "flex",
      flexDirection: "column",
      gap: 1,
      alignItems: "flex-start",
    }}
    >
      {service.icon && (
        <Box sx={{ background: "#F5EFE7", borderRadius: 2, p: 1 }}>
          <Icon component={service.icon} sx={{ color: "#213555" }} />
        </Box>
      )}
    <Typography variant="h6" sx={{ color: "#213555",fontWeight:"600" }}>
    {service.name}
    </Typography>
{service.price &&
(

  <Typography variant="body2" color="text.secondary">Price : {service.price} </Typography>
)
}


    {service.description &&(
    <Typography variant="body2" color="text.secondary">
      {service.description}
    </Typography>)}

    
     { service.buttonText&&(
      <Box mt={1}>
        <CustomButton variant={buttonVariant} onClick={service.onClick}>
       {service.buttonText}
      </CustomButton>
    </Box>
     )
     } 
  </Box>
  )
}

export default Card