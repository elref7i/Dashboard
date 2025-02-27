import { MessageRounded } from '@mui/icons-material';
import { Paper, Stack, Typography } from '@mui/material';

export default function Card() {
  return (
    <Paper
      elevation={4}
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 3,
        px: 1,
      }}
    >
      <Stack>
        <MessageRounded color="primary" sx={{ fontSize: 40, mb: 1 }} />
        <Typography variant="h5">12.361</Typography>
        <Typography variant="h5">Emails Sent</Typography>
      </Stack>
      <Stack>
        <Typography variant="p" fontWeight={'bold'}>
          +14%
        </Typography>
      </Stack>
    </Paper>
  );
}
