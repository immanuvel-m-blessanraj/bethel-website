import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';

// material-ui
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// project imports
import navigation from 'menu-items';
import { SET_MENU } from 'store/actions';
import { drawerWidth } from 'store/constant';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Customization from '../Customization';
import Header from './Header';
import Sidebar from './Sidebar';

// assets
import { IconChevronRight } from '@tabler/icons-react';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'theme' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px'
  }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* header */}
        <AppBar
          enableColorOnDark
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            bgcolor: theme.palette.background.default,
            transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
          }}
        >
          <Toolbar>
            <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
          </Toolbar>
        </AppBar>

        {/* drawer */}
        <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

        {/* main content */}
        <Main theme={theme} open={leftDrawerOpened}>
          {/* breadcrumb */}
          <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
          <Outlet />
        </Main>
        <Customization />
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 70,
          bgcolor: theme.palette.secondary.light,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          position: 'relative',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Box sx={{ justifyContent: 'center', alignItems: 'center' }} zIndex="6000">
          <Typography variant="h4" align="center">
            Bethel Church of God In India,
          </Typography>
          <Typography sx={{ paddingTop: '5px' }} align="center" variant="h4">
            3/46, Aayathurai, Thoothukudi - 628620.
          </Typography>
          {/* <Typography sx={{ paddingTop: '5px' }} align="center" variant="h4">
            Srivaikundam (Taulk), Thoothukudi - 628620,
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
