"use client";

import React, { useState } from "react";
import axios from "axios";
import { Box, Typography, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";

import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import CustomSelect from "../../../components/CustomSelect";
import PageHead from "../../../components/PageHead";
import PdfUploader from "../../../components/PdfUploader";

const UploadReports = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");

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

  return (
    <>
      <PageHead text="Upload Reports" />

      <Box
        sx={{
          background: "#F8FAFC",
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
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "90%",
            maxWidth: 600,
            bgcolor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            border: "1px solid #cccccc",
            display: "flex",
            flexDirection: "column",
            gap: 3.5,
            p: { xs: 3, sm: 4 },
          }}
        >
          <Typography variant="h5" sx={{ color: "#006241", fontWeight: "600" }}>
            Upload Test Reports for a User
          </Typography>

          <CustomInput
            label="User Phone Number"
            name="phone"
            placeholder="03xxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {reports.map((report, idx) => (
            <Box
              key={idx}
              sx={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(127, 255, 202, 0.1)",
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                position: "relative",
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#006241" }}>
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
            </Box>
          ))}

          <CustomButton variant="tertiary" onClick={handleAddAnother}>
            + Add Another
          </CustomButton>

          <CustomButton variant="primary" type="submit">
            Upload
          </CustomButton>

          <CustomButton onClick={handleBack} variant="secondary">
            Back
          </CustomButton>
        </Box>
      </Box>
    </>
  );
};

export default UploadReports;
