import { Typography,Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
const labs=[{
  id: 1,
  name:"lab 1",
  location:"location 1",
  status:"active",
  },
  {
    id: 2,
    name:"lab 2",
    location:"location 2",
    status:"active",
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