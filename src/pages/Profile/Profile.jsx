import {
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  Stack,
  TextField,
} from '@mui/material';

export default function Profile() {
  return (
    <Box
      component={'section'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <Stack component={'form'} width={'80%'} gap={3}>
        <Stack
          direction={'row'}
          gap={3}
          flexWrap={{ xs: 'wrap', md: 'nowrap' }}
        >
          <TextField
            fullWidth
            id="filled-basic"
            label="First Name"
            name="firstName"
            variant="filled"
          />

          <TextField
            fullWidth
            id="filled-basic"
            label="Last Name"
            name="lastName"
            variant="filled"
          />
        </Stack>
        <TextField
          fullWidth
          id="filled-basic"
          label="Email"
          name="email"
          variant="filled"
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Age"
          name="age"
          variant="filled"
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Address One"
          name="addressOne"
          variant="filled"
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Address Two"
          name="addressTwo"
          variant="filled"
        />

        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Role
          </InputLabel>
          <NativeSelect
            defaultValue={'User'}
            inputProps={{
              name: 'role',
              id: 'uncontrolled-native',
            }}
          >
            <option value={'User'}>User</option>
            <option value={'Admin'}>Admin</option>
            <option value={'Manager'}>Manager</option>
          </NativeSelect>
        </FormControl>
        <Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ ml: 'auto', display: 'block' }}
          >
            Create New User
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
