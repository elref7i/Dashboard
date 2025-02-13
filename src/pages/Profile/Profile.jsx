import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  Snackbar,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Profile() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regx = /^.{8,}$/;
  const phoneRegx = /^(02)?01[0125][0-9]{8}/;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };

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
      <Stack
        onSubmit={handleSubmit(onSubmit)}
        component={'form'}
        width={'80%'}
        gap={3}
      >
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
            {...register('firstName', {
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName && 'Required'}
          />

          <TextField
            fullWidth
            id="filled-basic"
            label="Last Name"
            name="lastName"
            variant="filled"
            {...register('lastName', {
              required: true,
              maxLength: 15,
              minLength: 3,
            })}
            error={errors.lastName}
            helperText={errors.lastName && 'required'}
          />
        </Stack>
        <TextField
          fullWidth
          id="filled-basic"
          label="Email"
          name="email"
          {...register('email', { required: true, pattern: emailRegex })}
          variant="filled"
          error={errors.email}
          helperText={errors.email && 'Required'}
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Phone"
          name="phone"
          {...register('phone', { required: true, pattern: phoneRegx })}
          variant="filled"
          error={errors.phone}
          helperText={errors.phone && 'Required'}
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Age"
          name="age"
          variant="filled"
          type="number"
          {...register('age', { min: 18, max: 99 })}
          error={errors.age}
          helperText={errors.age && 'required'}
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Address One"
          name="addressOne"
          type="number"
          {...register('addressOne', { pattern: regx })}
          variant="filled"
          error={errors.addressOne}
          helperText={errors.addressOne && 'required'}
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Address Two"
          name="addressTwo"
          type="number"
          {...register('addressTwo', { pattern: regx })}
          variant="filled"
          error={errors.addressTwo}
          helperText={errors.addressTwo && 'required'}
        />

        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Role
          </InputLabel>
          <NativeSelect
            {...register('role')}
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
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="I love snacks"
          >
            <Alert severity="success">This is a success Alert.</Alert>
          </Snackbar>
        </Box>
      </Stack>
    </Box>
  );
}
