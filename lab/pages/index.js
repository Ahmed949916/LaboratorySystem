import { Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Welcome to MUI + Next.js!</Typography>
      <Button variant="contained" color="primary" style={{ marginTop: 16 }}>
        Click Me
      </Button>
    </div>
  );
}
