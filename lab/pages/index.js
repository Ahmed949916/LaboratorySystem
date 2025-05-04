import {  Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">
        <HomeIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
       Make a home page which informs about our app and lets the user and labs reguster and login
      </Typography>
      
    </div>
  );
}
