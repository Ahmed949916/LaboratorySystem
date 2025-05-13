import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import CustomButton from '@/components/CustomButton';
import PageHead from '@/components/PageHead';
import AddService from './AddService';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
 
const ServicesOffered = () => {
  const [services, setServices] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading,setLoading]=useState(true)
   

  const handleAddClick = () => setDrawerOpen(true);

const handleRemove = async (id) => {
  console.log("id",id)
  try {
    const url=`/api/admin/services?serviceId=${id}`
  const response = await fetch( url, {
  method: "DELETE",  
});
    const data = await response.json();
    if (response.ok) {
     getServices()
    } else {
      console.error("Failed to delete service:", data.error);
    }
  } catch (err) {
    console.error("Error deleting service:", err);
  }
};
    async function getServices() {
      try {
       setLoading(true)
        const response = await fetch("/api/admin/services", {
          method: "GET",
        });
        const data = await response.json();
        console.log("Services fetched:", data);
         setLoading(false)
        setServices(data.reports || []);  
        
      } catch (error) {
         setLoading(false)
        console.error("Failed to fetch services:", error);
      }
    }

  useEffect(() => {
    getServices();
  }, []);

  async function handleUpdateService(service) {
    try {
      const response = await fetch("/api/admin/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ service }),
      });

      const data = await response.json();
      console.log("Service updated:", data);

      if (response.ok) return service;
      else throw new Error(data.error || "Service update failed");
    } catch (error) {
      console.error("Failed to update service:", error);
      return null;
    }
  }

  const handleAddService = async (newService) => {
    const added = await handleUpdateService(newService);
    if (added) {
      getServices()
    }
  };


const router=useRouter()

  return (
    <Box sx={{pb:7}}>
      <PageHead text="Services Offered" onBack={()=>{router.push("/admin")}}>
        <Typography color="white">
          Manage Services Offered To Your Customers
        </Typography>
      </PageHead>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Typography variant="h5" color='#213555' fontWeight={600}>
          Total Services Offered: {services.length}
        </Typography>
        <CustomButton variant="tertiary" onClick={handleAddClick}>
          Add A Service
        </CustomButton>
      </Box>

{loading ? (
  
   <Box
        sx={{ height: '70vh' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress sx={{color:"#000"}}/>
      </Box>
):(




      <Box sx={{  display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg:"1fr 1fr 1fr"
              },
              gap: 3, p: 2 }}>
        {services.map((service) => (
          <Box
            key={service._id}
            sx={{
            
              p: 2,
minHeight:"130px",
display:"flex",
 
justifyContent:"center",
flexDirection:"column",
              borderRadius: 1,
              backgroundColor: '#213555',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography color="white" variant="h5">
                {service.testName}
              </Typography>
              <CustomButton
                variant="user"
                sx={{  cursor:"pointer"}}
                onClick={() => handleRemove(service._id)}
              >
                Remove
              </CustomButton>
            </Box>
            <Typography color="white">Price: Rs{service.price}</Typography>
            <Typography color="white">
              Description: {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
)}
      <AddService
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onAdd={handleAddService}
      />
    </Box>
  );
};

export default ServicesOffered;
