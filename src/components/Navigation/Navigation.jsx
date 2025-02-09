import {
  Box,
  Container,
  IconButton,
  Stack,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import InputSearch from '../common/InputSearch';

import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

// eslint-disable-next-line react/prop-types
export default function Navigation({ handleDrawerOpen, open, setMode }) {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      // @ts-ignore

      open={open}
    >
      <Container maxWidth={'xl'}>
        <Toolbar sx={{ px: 5 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <InputSearch />
          <Box component={'div'} flexGrow={1} />
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            {theme.palette.mode === 'light'.toLowerCase() ? (
              <IconButton
                onClick={() => {
                  setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                  );
                  localStorage.setItem(
                    'mode',
                    theme.palette.mode === 'dark' ? 'light' : 'dark'
                  );
                }}
                color="inherit"
                aria-label="delete"
                size="medium"
              >
                <LightModeSharpIcon fontSize="inherit" />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                  );
                  localStorage.setItem(
                    'mode',
                    theme.palette.mode === 'dark' ? 'light' : 'dark'
                  );
                }}
                color="inherit"
                aria-label="delete"
                size="medium"
              >
                <ModeNightIcon fontSize="inherit" />
              </IconButton>
            )}
            <IconButton color="inherit" aria-label="delete" size="medium">
              <NotificationsIcon fontSize="inherit" />
            </IconButton>
            <IconButton color="inherit" aria-label="delete" size="medium">
              <SettingsIcon fontSize="inherit" />
            </IconButton>
            <IconButton color="inherit" aria-label="delete" size="medium">
              <AccountCircleIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
