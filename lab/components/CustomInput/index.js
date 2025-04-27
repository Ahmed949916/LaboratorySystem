import { useState, useEffect } from "react";
 
import { Box, TextField, Typography, IconButton, InputAdornment } from "@mui/material";
 
import PreviewIcon from "./PreviewIcon"
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
  ref,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(inputVal || "");
  const [validationError, setValidationError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  
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
            color: "#213555",
            
          }}
        >
          {label}
        </Typography>
      )}
   <TextField
    inputRef={ref} 
    
  fullWidth={fullWidth}
  variant="outlined"
  size="small"
  placeholder={placeholder}
  type={type === "password" ? (showPassword ? "text" : "password") : type}
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
      borderRadius: "8px",
      "& fieldset": {
        borderColor: validationError ? "#f44336" : "none",
      },
      "&:hover fieldset": {
        borderColor: validationError ? "#f44336" : "none",
      },
      "&.Mui-focused fieldset": {
        borderColor: validationError ? "#f44336" : "#213555",
      },
      "&.Mui-error fieldset": {
        borderColor: "#f44336",
      },
    },
    "& .MuiOutlinedInput-input::placeholder": {
      color: bgColor === "#1E1E1E" ? "#fff" : "#444",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#f44336",
    },
    ...(props?.sx || {}),
  }}
  InputProps={
    type === "password"
      ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePassword} edge="end">
                <PreviewIcon/>
              </IconButton>
            </InputAdornment>
          ),
        }
      : {}
  }
/>

    </Box>
  );
};

export default CustomInput;
