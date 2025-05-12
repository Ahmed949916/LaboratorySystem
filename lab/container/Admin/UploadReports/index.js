"use client";

import React, { useRef, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Add, CloudUpload, HdrPlus, PlusOne } from "@mui/icons-material";

import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import CustomSelect from "../../../components/CustomSelect";
import PageHead from "../../../components/PageHead";
import PdfUploader from "../../../components/PdfUploader";

const UploadReports = () => {
  const router = useRouter();
  const phone = useRef(null);
  const [newRelation, setNewRelation] = useState({ label: "", name: "" });
  const [report, setReport] = useState({
    testName: "",
    relationship: "self",
    isOther: false,
    otherRelationship: "",
    file: null,
  });
 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [relationships, setRelationships] = useState([]);
  const [creatingRelation, setCreatingRelation] = useState(false);
  const [userData, setUserData] = useState(false);
  const [uploading, setUploading] = useState(false);

 
  const handleCreateRelation = async () => {
    if (!newRelation.label || !newRelation.name) {
      setError("Please fill both relationship and name.");
      return;
    }
    if (!phone.current?.value) {
      setError("Please fetch user data first.");
      return;
    }

    try {
      setCreatingRelation(true);
      await axios.post("/api/admin/relations", {
        phone: phone.current.value,
        label: newRelation.label,
        name: newRelation.name,
      });

      
      await fetchRelationships();

       
      setReport((prev) => ({
        ...prev,
        relationship: newRelation.label,
        isOther: false,
        otherRelationship: "",
     
      }));
  
      setNewRelation({ label: "", name: "" });
    } catch (err) {
      console.error(err);
     
    } finally {
      setCreatingRelation(false);
    }
  };

   
  const handleReportChange = (field, value) => {
    setReport((prev) => ({ ...prev, [field]: value }));
  };

  
  const handleRelationshipChange = (e) => {
    const selected = e.target.value;
    if (selected === "Other") {
      setReport((prev) => ({
        ...prev,
        isOther: true,
        otherRelationship: "",
        relationship: "",
      }));
    } else {
      setReport((prev) => ({
        ...prev,
        isOther: false,
        otherRelationship: "",
        relationship: selected,
      }));
    }
  };

 
 
  
  const fetchRelationships = async () => {
    const phoneNumber = phone.current?.value;
    
    if (!phoneNumber) {
      setError("Please enter a phone number.");
     setUploading(false)
      return;
    }
   setCreatingRelation(true)
    try {
      const { data } = await axios.get(
        `/api/admin/relations?phone=${phoneNumber}`
      );
      if(data.error){
        setError(data.error);
        setUserData(false);
        setCreatingRelation(false)
        return;
      }
      
      setRelationships(data?.relations);
      setUserData(data.user._id);
 
      setCreatingRelation(false)
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error fetching relationships.");
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
setUploading(true)

    try {
          if (!report.file) {
      setError("Please select a file for the test report.");
      setUploading(false)
      return;
          }
      if(!report.testName){
        setError("Please enter a test name.");
        setUploading(false)
        return;
      }
    
    if (report.isOther){
  setError("Please select a relationship.");
 setUploading(false)
  return;
    }
      const formData = new FormData();
      formData.append("phone", phone.current.value);

      const finalRel =  report.relationship;

      formData.append("testName", report.testName);
      formData.append("label", finalRel);
      formData.append("file", report.file);
      formData.append("user_id", userData);
      const {data}=await axios.post("/api/admin/uploadReport", formData);
    
 
      setSuccess("Report uploaded successfully!");
    
      setReport({
        testName: "",
        relationship: "self",
        isOther: false,
        otherRelationship: "",
     
        file: null,
      });
       setUploading(false)
    } catch (err) {
      console.error(err);
      setUploading(false)
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  const handleBack = () => router.push("/admin/");

  return (
    <>
      <PageHead text="Upload Reports" onBack={handleBack} />

      <Box
        sx={{
          background: "#F5EFE7",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          py: 6,
        }}
      >
       
        <Box
          sx={{
            background: "#FAF7F3",
            width: "90%",
            maxWidth: 600,
            borderRadius: 3,
            mb: 3,
            display: "flex",
            gap: 2,
            flexDirection: "column",
            p: { xs: 3, sm: 4 },
          }}
        >
          <CustomInput
            label="User Phone Number"
            type="tel"
            name="phone"
            placeholder="Enter User Phone Number"
            ref={phone}                      
          />
             {error&&!userData&&<Typography sx={{textAlign:"center",fontWeight:"600",fontSize:"12px",color:"red"}}>{"Error:"+" "+error}</Typography>}
          <CustomButton loading={creatingRelation} variant="tertiary" onClick={fetchRelationships}>
            Fetch User Data
          </CustomButton>
        </Box>

        {userData && (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "90%",
              maxWidth: 600,
              bgcolor: "#FAF7F3",
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              p: { xs: 3, sm: 4 },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Test Report
            </Typography>

        
            <CustomInput
              label="Test Name"
              placeholder="e.g., CBC, LFT, Ultrasound"
              inputVal={report.testName}
              onInputChange={(val) =>
                handleReportChange("testName", val)
              }
            />

            
            <CustomSelect
              label="Relationship"
              options={[
                ...relationships.map((r) => ({
                  label: r.label,
                  value: r.label,
                })),
                { label: "Self", value: "self" },
                { label: "Add New Relation", value: "Other" },
              ]}
              value={report.isOther ? "Other" : report.relationship}
              onChange={handleRelationshipChange}
            />

           
            {report.isOther && (
              <>
                <Box sx={{ display: "flex", gap: 2,alignItems:"flex-end" }}>
                  <CustomInput
                    label="Enter New Relationship"
                    placeholder="e.g., Uncle, Aunt, Friend"
                    inputVal={newRelation.label}
                    onInputChange={(val) =>
                      setNewRelation((p) => ({ ...p, label: val }))
                    }
                  />
                  <CustomInput
                    label="Enter Name"
                    placeholder="e.g., Ahmed"
                   
                    inputVal={newRelation.name}
                    onInputChange={(val) =>
                      setNewRelation((p) => ({ ...p, name: val }))
                    }
                  />
                  <Box sx={{}}>

                   <CustomButton
                  variant="tertiary"
                  loading={creatingRelation}
                  
                  onClick={handleCreateRelation}
                  >
                 <Add/>
                </CustomButton>
                  </Box>
                </Box>
               
              </>
            )}

            
            <PdfUploader report={report} setReport={setReport} />


        
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 3,
                mt:4
              }}
            >
              <CustomButton
                sx={{ width: "50%" }}
                onClick={handleBack}
                variant="secondary"
              >
                Back
              </CustomButton>
              <CustomButton
              onClick={handleSubmit}
                endIcon={<CloudUpload />}
                sx={{ width: "50%" }}
                variant="tertiary"
                type="submit"
                loading={uploading}

              >
                Upload
              </CustomButton>
            </Box>
             {error&&<Typography sx={{textAlign:"center",fontWeight:"600",fontSize:"12px",color:"red"}}>{"Error:"+" "+error}</Typography>}
             {success && (
  <Typography sx={{ textAlign: "center", fontWeight: 600, fontSize: "12px", color: "green" }}>
    {success}
  </Typography>
)}

          </Box>
            
        )}
        
     </Box>
    </>
  );
};

export default UploadReports;
