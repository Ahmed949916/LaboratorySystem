import { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";

const CustomInput = ({
  label,
  type,
  placeholder,
  fullWidth = false,
  error,
  bgColor,
  textColor,
  helperText,
  inputVal,
  onInputChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(inputVal || "");
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (inputVal !== undefined) {
      setInputValue(inputVal);
    }
  }, [inputVal]);

  const handleChange = (e) => {
    let value = e.target.value;

    if (type === "tel") {
      value = value.replace(/\D/g, ""); // Only digits

      if (value.length > 11) {
        value = value.slice(0, 11);
      }

      if (value.length < 11) {
        setValidationError("Phone number must be exactly 11 digits");
      } else if (!/^0\d{10}$/.test(value)) {
        setValidationError("Phone number must start with 0 and be 11 digits long");
      } else {
        setValidationError("");
      }
    } else {
      setValidationError("");
    }

    setInputValue(value);
    onInputChange?.(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        width: fullWidth ? "100%" : "auto",
      }}
    >
      {label && (
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "black",
          }}
        >
          {label}
        </Typography>
      )}
      <TextField
        fullWidth={fullWidth}
        variant="outlined"
        size="small"
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={handleChange}
        inputProps={{
          maxLength: type === "tel" ? 11 : undefined,
        }}
        error={Boolean(validationError)}
        helperText={validationError || helperText}
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: bgColor || "white",
            color: textColor || "black",
            borderRadius: "10px",
            "& fieldset": {
              borderColor: validationError ? "#f44336" : "#006241",
            },
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ddd",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: validationError ? "#f44336" : "#4DA1A9",
          },
          "& .MuiOutlinedInput-input::placeholder": {
            color: bgColor === "#1E1E1E" ? "#fff" : "#444",
          },
          "& .MuiFormHelperText-root.Mui-error": {
            color: "#f44336",
          },
          "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f44336",
          },
          ...props.sx,
        }}
      />
    </Box>
  );
};

export default CustomInput;
