import { Button as MuiButton, CircularProgress } from '@mui/material';

const CustomButton = ({ 
  children, 
  variant = 'primary',
  startIcon,
  endIcon,
  fontWeight = "500",
  padding = "8px 24px",
  fullWidth,
  loading = false,
  onClick,
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
      justifyContent: 'center',
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
          bgcolor: "rgb(1, 129, 86)",
        }
      },
      secondary: {
        bgcolor: '#121212',
        color: 'white',
        border: 'none',
        "&:hover": {
          bgcolor: "#333",
        }
      },
      tertiary: {
        color: "#F5EFE7",
        bgcolor: "#213555",
        border: "none",
        "&:hover": {
          bgcolor: "#3A5A80",
        },
      },
      user: {
        color: "#fff",
        bgcolor: "#20A0D8",
        border: "none",
        "&:hover": {
          bgcolor: "#20A0FF",
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
      onClick={onClick}
      disabled={loading || props.disabled}
      variant={variant === 'primary' ? 'contained' : 'outlined'}
      sx={{
        ...getStyles(),
        ...props.sx,
        fontWeight: "600",
      }}
    >
      {loading ? (
        <CircularProgress size={20} sx={{ color: "#fff" }} />
      ) : (
        <>
          {startIcon}
          {children}
          {endIcon}
        </>
      )}
    </MuiButton>
  );
};

export default CustomButton;
