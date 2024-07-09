import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Typography, useMediaQuery } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
// import SearchSection from './SearchSection';
// import ProfileSection from './ProfileSection';

// assets
import { IconMail, IconMenu2, IconPhoneCall } from '@tabler/icons-react';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      {/* header search */}
      {/* <SearchSection /> */}
      <Typography sx={{ pl: '40px' }} variant="h2">
        BETHEL CHURCH OF GOD
      </Typography>
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      {isMobileView ? null : (
        <Box sx={{ pt: 0.25, alignItems: 'center', display: 'flex' }} justifyContent="space-between">
          <Box
            sx={{
              // display: 'flex',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              borderRadius: '2px',
              padding: '4px',
              // color: theme.palette.secondary.light,
              color: theme.palette.secondary.dark
            }}
          >
            <IconPhoneCall stroke={1} size="1.7rem" />
          </Box>

          <Typography sx={{ pl: '2px', pr: '10px' }} variant="h5" color="secondary">
            9361638515
          </Typography>
        </Box>
      )}
      {isMobileView ? null : (
        <Box sx={{ px: 2, pt: 0.25, alignItems: 'center', display: 'flex' }} justifyContent="space-between">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              borderRadius: '2px',
              padding: '4px',
              // color: theme.palette.secondary.light,
              color: theme.palette.secondary.dark
            }}
          >
            <IconMail stroke={1} size="1.9rem" />
          </Box>

          <Typography sx={{ pl: '2px', pr: '10px' }} variant="h5" color={theme.palette.secondary.dark}>
            immanuvel123@gmail.com
          </Typography>
        </Box>
      )}
      {/* <NotificationSection /> */}
      {/* <ProfileSection /> */}
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
