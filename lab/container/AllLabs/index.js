import React from 'react';
import { 
  Typography, 
  Box, 
  TextField
} from '@mui/material';
import { useRouter } from 'next/navigation';
import LabCard from "../../components/LabCard"
 
import PageHead from '../../components/PageHead';

const labs = [
  {
    id: 1,
    name: "IRTAQA LAB",
    address: "123 Main St, Lahore, Pakistan",
    phone: "123-456-7890",
    email: "irtaqalab@gmai.com",
    city: "Lahore",
  
  },
  {
    id: 2,
    name: "XYZ Lab",
    address: "456 Elm St, Karachi, Pakistan",
    phone: "987-654-3210",
    email: "xyz@gmail.com",
    city: "Karachi",
 
  },
];

const AllLabs = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredLabs = labs.filter(lab => 
    lab.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    lab.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLabClick = (labId) => {
    router.push(`/user/${labId}`);
  };

  return (
     
    <Box >
      <PageHead text="All Labs" bg="#20A0D8">
         <Typography variant="subtitle2" color='#fff'>
          Find and connect with medical laboratories in your area
        </Typography>
        </PageHead>

        <Box sx={{ my: 4, px: 2 }}>
  <TextField
    fullWidth
    variant="outlined"
    placeholder="Search labs by name or city..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    sx={{
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#20A0D8',
        },
      },
    }}
  />
</Box>


      {filteredLabs.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 5 }}>
          <Typography variant="h6" color="text.secondary">
            No labs found matching your search criteria
          </Typography>
        </Box>
      ) : (

         <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"column",lg:"row"},gap:2,px:2,}}>
          {filteredLabs.map((lab) => (
              <LabCard lab={lab} onClick={() => handleLabClick(lab.id)} />
          ))}
         </Box>
      )}
 
    </Box>

  );
};

export default AllLabs;