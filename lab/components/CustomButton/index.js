 
import { Button as MuiButton } from '@mui/material';
import { ReactNode } from 'react';

const CustomButton = ({ 
  children, 
  variant = 'primary',
  startIcon,
  endIcon,
  fontWeight = "500",
  padding = "8px 24px",
  fullWidth,
  isLoading = false,
  ...props 
}) => {
  const getStyles = () => {
    const baseStyles = {
      borderRadius: "10px",
      textTransform: 'none',
      padding: padding,
      fontWeight: fontWeight,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      minWidth: 'fit-content',
      width: fullWidth ? '100%' : 'auto',
    };

    const variants = {
      primary: {
        bgcolor: '#006241',
        color: 'white',
        border: 'none',
        "&:hover": {
          bgcolor: "rgb(1, 129, 86)"
        }
      },
      secondary: {
        bgcolor: '#121212',
        color: 'white',
        "&:hover": {
          bgcolor: "#333"
        }
      },
      tertiary: {
        color: "black",
        border: "none",
        "&:hover": {
          bgcolor: "#f0f0f0",
        },
      },
    };

    return {
      ...baseStyles,
      ...variants[variant],
    };
  };

  return (
    <MuiButton
      {...props}
      disabled={isLoading || props.disabled}
      variant={variant === 'primary' ? 'contained' : 'outlined'}
      sx={{
        ...getStyles(),
        ...props.sx,
      }}
    >
      {startIcon}
      {children}
      {endIcon}
    </MuiButton>
  );
};

export default CustomButton;
