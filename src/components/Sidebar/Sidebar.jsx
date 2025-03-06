import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Group as GroupIcon,
  Contacts as ContactsIcon,
  Person as PersonIcon,
  CalendarToday as CalendarTodayIcon,
  HelpOutline as HelpOutlineIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';
import ImageAdmin from '../../assets/photo_2024-12-03_19-37-17.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}));
const ArrayOne = [
  { text: 'Manage Team', icon: <GroupIcon />, path: '/' },
  {
    text: 'Contacts Information',
    icon: <ContactsIcon />,
    path: '/information',
  },
];
const ArrayTwo = [
  { text: 'Profile Form', icon: <PersonIcon />, path: '/profile' },
  { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
  { text: 'FAQ Page', icon: <HelpOutlineIcon />, path: '/faq' },
];
const ArrayThree = [
  { text: 'Bar Chart', icon: <BarChartIcon />, path: '/bar' },
  { text: 'Pie Chart', icon: <PieChartIcon />, path: '/pie' },
  { text: 'Line Chart', icon: <TimelineIcon />, path: '/line' },
];
// eslint-disable-next-line react/prop-types
export default function Sidebar({ handleDrawerClose, open }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Box textAlign={'center'} marginInline={open ? 2 : 0} marginBlock={2}>
        <Avatar
          alt="Ahmed Refai"
          src={ImageAdmin}
          sx={{
            width: open ? 70 : 40,
            height: open ? 70 : 40,
            mx: 'auto',
            my: 2,
            transition: 'width .25s , height .25s',
          }}
        />
        <Typography
          variant="h2"
          fontWeight={'bold'}
          fontSize={open ? 20 : 0}
          color="primary"
          sx={{ transition: 'fontSize .25s' }}
        >
          Ahmed Refai
        </Typography>

        <Typography
          variant="h3"
          fontSize={open ? 15 : 0}
          sx={{ transition: 'fontSize .25s' }}
          color="secondary"
        >
          e1.refai
        </Typography>
      </Box>
      <Divider />
      <List>
        {ArrayOne.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                px: 2.5,
                borderRadius: '5px',
                justifyContent: open ? 'initial' : 'center',
                bgcolor:
                  pathname === item.path
                    ? theme.palette.mode === 'dark'
                      ? grey[800]
                      : grey[200]
                    : 'transparent',
              }}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: 'auto',
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {ArrayTwo.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    pathname === item.path
                      ? theme.palette.mode === 'dark'
                        ? grey[800]
                        : grey[200]
                      : 'transparent',
                  borderRadius: '5px',
                },
                open
                  ? {
                      justifyContent: 'initial',
                    }
                  : {
                      justifyContent: 'center',
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: 'auto',
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {ArrayThree.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    pathname === item.path
                      ? theme.palette.mode === 'dark'
                        ? grey[800]
                        : grey[200]
                      : 'transparent',
                  borderRadius: '5px',
                },
                open
                  ? {
                      justifyContent: 'initial',
                    }
                  : {
                      justifyContent: 'center',
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: 'auto',
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
