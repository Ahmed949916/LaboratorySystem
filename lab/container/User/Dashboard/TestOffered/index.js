import { Box, CircularProgress, Typography } from '@mui/material'
import PageHead from '../../../../components/PageHead'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CustomButton from '@/components/CustomButton'
import { useAuth } from '@/contexts/AuthContext'

const TestOffered = () => {
    const router = useRouter()
    const [test, setTest] = useState([]);
    const [loading,setLoading]=useState(true)
    const {currentLab}=useAuth()


        async function getServices() {
          try {
           setLoading(true)
          const response = await fetch(`/api/user/services?labId=${currentLab}`, {
  method: "GET",  
});

            const data = await response.json();
             
             setLoading(false)
            setTest(data.reports || []);  
            
          } catch (error) {
             setLoading(false)
            console.error("Failed to fetch services:", error);
          }
        }
    
      useEffect(() => {
    if(currentLab){
      getServices();

    }
    
      }, [currentLab]);
    
  return (
   <Box sx={{pb:6}}>
    <PageHead bg="#20A0D8" onBack={()=>{router.push("/user")}} text={"Test Offered"} />
             <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Typography variant="body1" fontWeight={600}>
          Total Services Offered: {test.length}
        </Typography>
         
      </Box>
{loading ?(
  
   <Box
        sx={{ height: '70vh' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress sx={{color:"#000"}}/>
      </Box>
):(
      <Box sx={{ display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg:"1fr 1fr 1fr"
              },
              gap: 3, p: 2 }}>
        {test.map((service) => (
          <Box
            key={service.id}
            sx={{
              p: 2,
              borderRadius: 1,
              display:"flex",
              minHeight:"130px",
              backgroundColor: '#20A0D8',
              flexDirection:"column",
              
              justifyContent:"center"
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography color="white" variant="h5">
                {service.testName}
              </Typography>
              
            </Box>
            <Typography color="white">Price: {service.price}</Typography>
            <Typography color="white">
              Description: {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
)}
   </Box>
  )
}

export default TestOffered