import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import { createTheme, styled, ThemeProvider } from '@mui/material';
import { getDesignTokens } from './theme';
import { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
export default function App() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navigation
          setMode={setMode}
          handleDrawerOpen={handleDrawerOpen}
          open={open}
        />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
