import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import LabCard from '../../../components/LabCard';
import PageHead from '../../../components/PageHead';

const AllLabs = () => {
  const router = useRouter();
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLabs() {
        const res = await fetch('/api/user/allLabs');
        const data = await res.json();
        setLabs(data.admins);
        console.log("ALL LABS")
        setLoading(false)
    }

    fetchLabs();
  }, []);

  const handleLabClick = (labId) => {
    router.push(`/user/${labId}`);
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#F5EFE7" }}>
      <PageHead text="All Labs" bg="#20A0D8">
        <Typography variant="subtitle2" color="#fff">
          Find and connect with medical laboratories in your area
        </Typography>
      </PageHead>

      {loading ? (
        <Typography align="center" sx={{ py: 5 }}>
          Loading labs...
        </Typography>
      ) : labs.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 5 }}>
          <Typography variant="h6" color="text.secondary">
            No labs found
          </Typography>
        </Box>
      ) : (
        <Box sx={{ px: 2, py: 4 }}>
          <Grid container spacing={3}>
            {labs.map((lab) => (
              <Grid item xs={12} key={lab._id}>
                <LabCard
                  lab={lab}
                  onClick={() => handleLabClick(lab._id)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default AllLabs;
