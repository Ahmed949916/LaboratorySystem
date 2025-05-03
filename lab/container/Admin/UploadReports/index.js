"use client";

import React, { useRef, useState } from "react";
import axios from "axios";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";

import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import CustomSelect from "../../../components/CustomSelect";
import PageHead from "../../../components/PageHead";
import PdfUploader from "../../../components/PdfUploader";
import { ArrowForward, CloudUpload } from "@mui/icons-material";

const UploadReports = () => {
  const router = useRouter();
 
  const [userData, setUserData] = useState(null);
  const phone=useRef(null)

  const [reports, setReports] = useState([
    {
      testName: "",
      relationship: "Self",
      isOther: false,
      otherRelationship: "",
      file: null,
    },
  ]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const defaultRelationships = ["Self", "Father", "Mother", "Spouse", "Child"];

  const handleAddAnother = () => {
    setReports((prev) => [
      ...prev,
      {
        testName: "",
        relationship: "Self",
        isOther: false,
        otherRelationship: "",
        file: null,
      },
    ]);
  };

  const handleRemoveReport = (index) => {
    if (reports.length > 1) {
      setReports((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleReportChange = (index, field, value) => {
    setReports((prev) =>
      prev.map((report, i) =>
        i === index ? { ...report, [field]: value } : report
      )
    );
  };

  const handleRelationshipChange = (index, event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Other") {
      setReports((prev) =>
        prev.map((report, i) =>
          i === index
            ? { ...report, relationship: "", isOther: true, otherRelationship: "" }
            : report
        )
      );
    } else {
      setReports((prev) =>
        prev.map((report, i) =>
          i === index
            ? { ...report, relationship: selectedValue, isOther: false, otherRelationship: "" }
            : report
        )
      );
    }
  };

  const handleFileChange = (index, e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setReports((prev) =>
      prev.map((report, i) =>
        i === index ? { ...report, file } : report
      )
    );
  };

  const handleBack = () => {
    router.push("/admin/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (reports.some((r) => !r.file)) {
      setError("Please select a file for all test reports.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("phone", phone);

      reports.forEach((report, i) => {
        const finalRelationship = report.isOther ? report.otherRelationship : report.relationship;
        formData.append(`reports[${i}][testName]`, report.testName);
        formData.append(`reports[${i}][relationship]`, finalRelationship);

        if (report.file) {
          formData.append(`reports[${i}][file]`, report.file);
        }
      });

      // await axios.post(
      //   `${process.env.NEXT_PUBLIC_API_URL}/admin/reports-bulk`,
      //   formData,
      //   {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   }
      // );

      setSuccess("All reports uploaded successfully!");
      setPhone("");
      setReports([
        {
          testName: "",
          relationship: "Self",
          isOther: false,
          otherRelationship: "",
          file: null,
        },
      ]);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "An error occurred");
    }
  };
  function fetchUserData(){
    console.log(phone)
    if (!phone) {
      return;}
      console.log(phone.current?.value)
    //api call to fetch user data(relationships)
    setUserData(true)
  }

  return (
    <>
      <PageHead text="Upload Reports" onBack={()=>{router.push("/admin")}}/>
     
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
          width:"90%",
          maxWidth: 600,
          borderRadius: 3,
          mb: 3,
          display: "flex",
          gap:2,
                    flexDirection: "column",
          p: { xs: 3, sm: 4 },
        }}
      >
      <CustomInput
            label="User Phone Number"
            type={"tel"}
            name="phone"
            ref={phone}
            placeholder="Enter User Phone Number "
            // value={phone}
           
          />


           <CustomButton variant="tertiary"   onClick={ fetchUserData}>
           Fetch User Data
          </CustomButton>
          </Box>

       {userData&&(
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
   gap: 3.5,
   p: { xs: 3, sm: 4 },
 }}
>



 <Divider sx={{  borderColor: "#213555" }} />

 {reports.map((report, idx) => (
   <Box
     key={idx}
     sx={{

       p: 2,
       display: "flex",
       flexDirection: "column",
       gap: 2,
       position: "relative",
     }}
   >
     <Typography variant="h6" sx={{ fontWeight: 600, color: "#00000" }}>
       Test Report #{idx + 1}
     </Typography>

     <CustomInput
       label="Test Name"
     
       placeholder="e.g., CBC, LFT, Ultrasound"
       value={report.testName}
       onChange={(e) => handleReportChange(idx, "testName", e.target.value)}
     />

     <CustomSelect
       label="Relationship"
       options={[
         ...defaultRelationships.map((rel) => ({ label: rel, value: rel })),
         { label: "Add New Relation", value: "Other" },
       ]}
       value={report.isOther ? "Other" : report.relationship}
       onChange={(e) => handleRelationshipChange(idx, e)}
     />

     {report.isOther && (
       <CustomInput
         type="string"
         label="Enter Relationship"
         placeholder="e.g., Uncle, Aunt, Friend"
         value={report.otherRelationship}
         onChange={(e) => handleReportChange(idx, "otherRelationship", e.target.value)}
       />
     )}

     {reports.length > 1 && (
       <IconButton
         onClick={() => handleRemoveReport(idx)}
         sx={{ position: "absolute", top: 8, right: 8, color: "rgba(250, 101, 101, 0.93)" }}
       >
         <DeleteIcon />
       </IconButton>
     )}

     <PdfUploader />
     <Divider sx={{ mt:"50px",borderColor: "#213555" }} />
   </Box>
 ))}

 <CustomButton variant="tertiary" onClick={handleAddAnother}>
  Add Another Report +
 </CustomButton>
 <Box sx={{ display: "flex", justifyContent: "space-between" ,gap:3
 }}>

 <CustomButton sx={{width:"50%"}} onClick={handleBack} variant="secondary">
   Back
 </CustomButton>
 <CustomButton endIcon={<CloudUpload/>}sx={{width:"50%"}} variant="tertiary" type="submit">
   Upload
 </CustomButton>
 </Box>
</Box>
       )}
       
      </Box>
    </>
  );
};

export default UploadReports;
