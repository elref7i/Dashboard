import { Box, Button } from '@mui/material';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import { DownloadOutlined } from '@mui/icons-material';

export default function Dashboard() {
  return (
    <Box>
      <Box sx={{ textAlign: 'end', mb: 5 }}>
        <Button variant="contained" sx={{ textTransform: 'capitalize' }}>
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}
