import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Typography } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
// import SearchSection from './SearchSection';
// import ProfileSection from './ProfileSection';

// assets
import { IconBrandWhatsapp, IconMail, IconMenu2 } from '@tabler/icons-react';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

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
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      <Box sx={{ px: 2, pt: 0.25, alignItems: 'center' }} display="flex" justifyContent="space-between">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            borderRadius: '2px',
            padding: '2px',
            // color: theme.palette.secondary.light,
            color: theme.palette.secondary.dark
          }}
        >
          <IconBrandWhatsapp stroke={1} size="2.4rem" />
        </Box>

        <Typography sx={{pl:"2px", pr: '10px' }} variant="h4" color="secondary">
          9361638515
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            borderRadius: '2px',
            padding: '2px',
            // color: theme.palette.secondary.light,
            color: theme.palette.secondary.dark
          }}
        >
          <IconMail stroke={1} size="2.4rem" />
        </Box>

        <Typography sx={{pl:"2px", pr: '10px' }} variant="h4" color={theme.palette.secondary.dark}>
          immanuvel123@gmail.com
        </Typography>
      </Box>

      {/* <NotificationSection /> */}
      {/* <ProfileSection /> */}
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
