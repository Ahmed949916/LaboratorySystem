import React from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";

const CustomSelect = ({
  label,
  helperText,
  fullWidth = false,
  error = false,
  options,
  value,
  onChange,
  sx,
  ...props
}) => {
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

      <FormControl
        fullWidth={fullWidth}
        size="small"
        error={error}
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "white",
            color: "black",
            borderRadius: "10px",
            "& fieldset": {
              borderColor: error ? "#f44336" : "none",
            },
            "&:hover fieldset": {
              borderColor: "#444",
            },
            "&.Mui-focused fieldset": {
              borderColor: "none",
            },
          },
          ...sx,
        }}
      >
        <Select
          value={value}
          onChange={onChange}
          MenuProps={{ disableScrollLock: true }}
          {...props}
        >
          {options.map((o) => (
            <MenuItem key={o.value} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </Select>

        {helperText && (
          <FormHelperText sx={{ marginLeft: "0!important" }}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
