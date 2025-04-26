import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const PdfUploader = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      setError("");
    } else {
      setPdfFile(null);
      setError("Please upload a valid PDF file.");
    }
  };

  const handleRemoveFile = () => {
    setPdfFile(null);
    setError("");
  };

  return (
    <Box sx={{ marginTop: "20px", marginX: "8px", width: "100%" }}>
      {!pdfFile ? (
        <Button
          variant="contained"
          component="label"
          sx={{
            backgroundColor: "#006241",
            color: "white",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "14px",
            width: "100%",
            "&:hover": {
              backgroundColor: "#4DA1A9",
            },
          }}
        >
          Upload PDF
          <input type="file" accept="application/pdf" hidden onChange={handleFileChange} />
        </Button>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "black" }}>
            <strong>Selected File:</strong> {pdfFile.name}
          </Typography>
          <Button
            variant="outlined"
            onClick={handleRemoveFile}
            sx={{
              borderColor: "transparent",
              color: "#f44336",
              textTransform: "none",
              fontSize: "34px",
              borderRadius: "100px",
              padding: "0px",
              height: "30px",
              width: "30px",
              "&:hover": {
                color: "#f44336",
              },
            }}
          >
            -
          </Button>
        </Box>
      )}
      {error && (
        <Typography sx={{ color: "#f44336", marginTop: "10px", fontSize: "14px" }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default PdfUploader;
