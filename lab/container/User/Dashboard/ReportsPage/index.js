"use client";

import React, { useState, useEffect } from "react";
import { Box, CircularProgress, List, ListItemButton, ListItemText } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PageHead from "../../../../components/PageHead";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";

const ReportsPage = () => {
    

  const router = useRouter();

  const { user, isUser, loading } = useAuth();

  const [relations, setRelations] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

useEffect(() => {
  const fetchRelationships = async () => {
    try {
      const { data } = await axios.get(`/api/admin/relations?phone=${user?.phone}`);
      const fetchedRelations = data.relations || [];
console.log("Fetched relations:", fetchedRelations);
      const selfEntry = {
        userId:user.id,
        name: user.name,
        label: "self",
      };

      
      setRelations([selfEntry, ...fetchedRelations]);
      console.log("Updated relations:", [selfEntry, ...fetchedRelations]);
    } catch (err) {
      console.error("Failed to fetch relations:", err);
    }
  };

  if (user?.phone) {
    fetchRelationships();
  }
}, [user]);

 
  
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <PageHead text="Reports" bg="#20A0D8" onBack={() => router.push("/user/")} />

           {loading ? (
                <Box
                     sx={{ height: '70vh' }}
                     display="flex"
                     justifyContent="center"
                     alignItems="center"
                   >
                     <CircularProgress  />
                   </Box>
              ) : (

   
                <Box sx={{ flex: 1, overflow: "auto", padding: "8px" }}>


        <List sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
          {relations.map((rel, index) => (
            
            <ListItemButton
              key={index}
              sx={{
                borderLeft: "4px solid #20A0D8",
                mb: 1,
                bgcolor: "#fff",
                color: "#213555",
              }}
              onClick={() => router.push("/user/reports/"+rel.label)}
            >
                                <ListItemText
                      primary={rel.name?.charAt(0).toUpperCase() + rel.name?.slice(1)}
                      secondary={rel.label?.charAt(0).toUpperCase() + rel.label?.slice(1)}
                    />

              <ChevronRightIcon />
            </ListItemButton>
          ))}
        </List>
      </Box>
         )}
    </Box>
  );
};

export default ReportsPage;
