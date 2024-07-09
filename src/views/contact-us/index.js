// material-ui
import { useTheme } from '@emotion/react';
import { Avatar, Grid, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhoneCall
} from '@tabler/icons-react';
// material-ui
// import { useTheme } from '@mui/material/styles';

// project imports
import logo from 'assets/images/pastorFamily.jpeg';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //
const ContactUsPage = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box>
      <MainCard title="Contact US">
        <Box bgcolor={theme.palette.secondary.light} borderRadius={'20px'} overflow={'hidden'}>
          <Grid container>
            <Grid xs={12} lg={7} item>
              <Box height={{ xs: '320px', md: '100%' }}>
                <img
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill', maxHeight: '520px' }}
                  src={logo}
                  alt="Berry"
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Box p={4} justifyContent={'center'} display={isMobileView ? 'grid' : null}>
                <Box display="flex">
                  <Avatar
                    sx={{
                      background: theme.palette.secondary[100],
                      color: theme.palette.secondary.dark,
                      marginRight: '10px',
                      padding: '5px'
                    }}
                    color="inherit"
                  >
                    <IconPhoneCall stroke={1} size="1.8rem" />
                  </Avatar>
                  <Box>
                    <Typography variant="h5">Phone:</Typography>
                    <Typography variant="h4" sx={{ paddingTop: '3px' }}>
                      9361638515
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" sx={{ marginTop: '20px' }}>
                  <Avatar
                    sx={{
                      background: theme.palette.secondary[100],
                      color: theme.palette.secondary.dark,
                      marginRight: '10px',
                      padding: '5px'
                    }}
                    color="inherit"
                  >
                    <IconBrandWhatsapp stroke={1} size="1.8rem" />
                  </Avatar>
                  <Box>
                    <Typography variant="h5">Whatsapp:</Typography>
                    <Typography variant="h4" sx={{ paddingTop: '3px' }}>
                      9361638515
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" sx={{ marginTop: '20px' }}>
                  <Avatar
                    sx={{
                      background: theme.palette.secondary[100],
                      color: theme.palette.secondary.dark,
                      marginRight: '10px',
                      padding: '5px'
                    }}
                    color="inherit"
                  >
                    <IconBrandFacebook stroke={1} size="1.8rem" />
                  </Avatar>
                  <Box>
                    <Typography variant="h5">Facebook:</Typography>
                    <Typography variant="h4" sx={{ paddingTop: '3px' }}>
                      imman@123
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" sx={{ marginTop: '20px' }}>
                  <Avatar
                    sx={{
                      background: theme.palette.secondary[100],
                      color: theme.palette.secondary.dark,
                      marginRight: '10px',
                      padding: '5px'
                    }}
                    color="inherit"
                  >
                    <IconBrandInstagram stroke={1} size="1.8rem" />
                  </Avatar>
                  <Box>
                    <Typography variant="h5">Instagram:</Typography>
                    <Typography variant="h4" sx={{ paddingTop: '3px' }}>
                      imman@123
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" sx={{ marginTop: '20px' }}>
                  <Avatar
                    sx={{
                      background: theme.palette.secondary[100],
                      color: theme.palette.secondary.dark,
                      marginRight: '10px',
                      padding: '5px'
                    }}
                    color="inherit"
                  >
                    <IconBrandYoutube stroke={1} size="1.8rem" />
                  </Avatar>
                  <Box>
                    <Typography variant="h5">Youtube:</Typography>
                    <Typography variant="h4" sx={{ paddingTop: '3px' }}>
                      Bethels house
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" sx={{ marginTop: '20px' }}>
                  <Avatar
                    sx={{
                      background: theme.palette.secondary[100],
                      color: theme.palette.secondary.dark,
                      marginRight: '10px',
                      padding: '5px'
                    }}
                    color="inherit"
                  >
                    <IconMail stroke={1} size="1.8rem" />
                  </Avatar>
                  <Box>
                    <Typography variant="h5">Mail:</Typography>
                    <Typography variant="h4" sx={{ paddingTop: '3px' }}>
                      imman@12
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" sx={{ marginTop: '20px' }}>
                  <Avatar
                    sx={{
                      background: theme.palette.secondary[100],
                      color: theme.palette.secondary.dark,
                      marginRight: '10px',
                      padding: '5px'
                    }}
                    color="inherit"
                  >
                    <IconMapPin stroke={1} size="1.8rem" />
                  </Avatar>
                  <Box>
                    <Typography variant="h5">Address:</Typography>
                    <Typography variant="h4"sx={{ paddingTop: '3px' }}>
                      Bethel Church of God In India,
                    </Typography>
                    <Typography variant="h4">
                      3/46, Aayathurai, Thoothukudi - 628620.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </MainCard>

      {/* <MainCard sx={{ marginTop: '20px' }} title="Keep In Touch">
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              display: 'flex',
              marginRight: '5px',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              borderRadius: '2px'
            }}
          >
            <IconBrandFacebook stroke={1} size="1.8rem" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              marginRight: '5px',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              borderRadius: '2px'
            }}
          >
            <IconBrandYoutube stroke={1} size="1.8rem" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              marginRight: '5px',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              borderRadius: '2px'
            }}
          >
            <IconBrandWhatsapp stroke={1} size="1.8rem" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              marginRight: '5px',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              borderRadius: '2px'
            }}
          >
            <IconBrandInstagram stroke={1} size="1.8rem" />
          </Box>
        </Box>
      </MainCard> */}
    </Box>
  );
};

export default ContactUsPage;
