import { Stack } from '@mui/material';
import Card from '../../components/Card/Card';

export default function Row1() {
  return (
    <Stack
      direction={'row'}
      gap={3}
      flexWrap={'wrap'}
      justifyContent={{ xs: 'center', sm: 'space-between' }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </Stack>
  );
}
