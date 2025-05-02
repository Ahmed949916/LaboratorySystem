import { Typography,Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

 
const labs=[{
  id:1,
  name:"IRTAQA LAB",
  address:"123 Main St, City, Country",
  phone:"123-456-7890",
  email:"irtaqalab@gmai.com",
  city:"Lahore",
},
  {
    id: 2,
  name:"XYZ Lab",
  address:"456 Elm St, City, Country",
  phone:"987-654-3210",
  email:"xyz@gmail.com",
  city:"Karachi",
    },
  ]
const AllLabs = () => {
  const router =useRouter()
  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"20px",p:"20px"}}>

      <Typography sx={{}}variant='h3'>All Labs</Typography> 

      {labs.map((lab)=>(
        <Box onClick={()=>{router.push("/user/"+lab.id)}} key={lab.id} sx={{border:"1px solid black",padding:"20px",borderRadius:"10px", cursor:"pointer"}}>
          <Typography variant='h5'>{lab.name}</Typography>
          <Typography variant='body1'>Location: {lab.location}</Typography>
          <Typography variant='body1'>Status: {lab.status}</Typography>
        </Box>
      ))}

    </Box>
  )
}

export default AllLabs