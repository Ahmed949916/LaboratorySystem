"use client";
import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Divider,
  List,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Alert,
  Paper,
  Button,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PageHead from "@/components/PageHead";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import axios from "axios";
import CustomButton from "@/components/CustomButton";

const formatDate = (dateString) => {
  if (!dateString) return "No date";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Cases = () => {
  const router = useRouter();
  const { label } = router.query;
  const { currentLab, user } = useAuth();
  const userId = user?.id;

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReports() {
       
      setLoading(true);
      setError(null);

        const { data } = await axios.get("/api/user/cases", {
          params: {
            labId: currentLab,
            label: label,
            userId: userId,
          },
        });

        console.log("Reports received:", data);
          setReports(data);
        setLoading(false);
      
    }

    fetchReports();
  }, [currentLab, userId, label, router.isReady]);

  const handlePdfClick = (pdfBase64) => {
    if (!pdfBase64) {
      console.error("No PDF data available");
      return;
    }
    
    const byteCharacters = atob(pdfBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }

  return (
    <Box sx={{   }}>
      <PageHead bg="#20A0D8" onBack={()=>{router.push("/user/reports")}} text={`${label ? label.charAt(0).toUpperCase() + label.slice(1) : ""} Reports`} />

      

   

      {loading ? (
      <Box
               sx={{ height: '70vh' }}
               display="flex"
               justifyContent="center"
               alignItems="center"
             >
               <CircularProgress  />
             </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : reports.length === 0 ? (
        <Alert severity="info">No reports found.</Alert>
      ) : (
        <Box  sx={{p:4, mb: 4 }}>
       
          <Typography variant="h4"   > {`Total reports: ${reports.length}`}</Typography>
        
          <CardContent>
            <List>
              {reports.map((report, index) => (
                <Paper key={report._id || index}  sx={{ mb: 2, p: 2,  }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="h6">
                      {report.testName || report.name || `Report ${index + 1}`}
                    </Typography>

                    <CustomButton
                    onClick={() => handlePdfClick(report.pdfBase64)}
                    disabled={!report.pdfBase64}
                    >
                    View PDF
                    </CustomButton>
                  </Box>

              

                  <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                    <Box>
                      <Typography variant="body2"  >Date</Typography>
                      <Typography variant="body1">{formatDate(report.createdAt)}</Typography>
                    </Box>

                    {report.caseId && (
                      <Box>
                        <Typography variant="body2"  >Case ID</Typography>
                        <Typography variant="body1">{report.caseId}</Typography>
                      </Box>
                    )}

                    {report.status && (
                      <Box>
                        <Typography variant="body2"  >Status</Typography>
                        <Typography variant="body1">{report.status}</Typography>
                      </Box>
                    )}

                    {report.labId && (
                      <Box>
                        <Typography variant="body2" color="text.secondary">Lab ID</Typography>
                        <Typography variant="body1">{report.labId}</Typography>
                      </Box>
                    )}
                  </Box>

                  {report.description && (
                    <Box mt={2}>
                      <Typography variant="body2" color="text.secondary">Description</Typography>
                      <Typography variant="body1">{report.description}</Typography>
                    </Box>
                  )}
                </Paper>
              ))}
            </List>
          </CardContent>
        </Box>
      )}
    </Box>
  );
};

export default Cases;
