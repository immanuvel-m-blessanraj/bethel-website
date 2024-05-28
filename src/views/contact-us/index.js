// material-ui
// import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube, IconMail, IconPhoneCall } from '@tabler/icons-react';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //
const ContactUsPage = () => {
  // const theme = useTheme();
  return (
    <Box>
      <MainCard title="Church Address">
        <Typography variant="h4">Bethel Church Ff God In India,</Typography>
        <Typography sx={{ paddingTop: '5px' }} variant="h4">
          3/46, Aayathurai, Perur (post),
        </Typography>
        <Typography sx={{ paddingTop: '5px' }} variant="h4">
          Srivaikundam (Taulk), Thoothukudi - 628620,
        </Typography>
      </MainCard>
      <MainCard sx={{ marginTop: '20px' }} title="Contact Details">
        <Box sx={{ alignItems: 'center' }} display="flex">
          <Box
            sx={{
              display: 'flex',
              marginRight: '5px',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              borderRadius: '2px'
            }}
          >
            <IconBrandWhatsapp stroke={1} size="2.4rem" />
          </Box>

          <Typography sx={{ pr: '10px' }} variant="h4">
            9361638515
          </Typography>
        </Box>
        <Box sx={{ alignItems: 'center' }} display="flex">
          <Box
            sx={{
              display: 'flex',
              marginRight: '5px',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              borderRadius: '2px'
            }}
          >
            <IconPhoneCall stroke={1} size="2.2rem" />
          </Box>

          <Typography sx={{ pr: '10px' }} variant="h4">
            9361638515
          </Typography>
        </Box>
        <Box sx={{ alignItems: 'center' }} display="flex">
          <Box
            sx={{
              display: 'flex',
              marginRight: '5px',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              borderRadius: '2px'
            }}
          >
            <IconMail stroke={1} size="2.2rem" />
          </Box>

          <Typography sx={{ pr: '10px' }} variant="h4">
            immanuvel123@gmail.com
          </Typography>
        </Box>
      </MainCard>
      <MainCard sx={{ marginTop: '20px' }} title="Keep In Touch">
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
            <IconBrandFacebook stroke={1} size="2.2rem" />
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
            <IconBrandYoutube stroke={1} size="2.2rem" />
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
            <IconBrandWhatsapp stroke={1} size="2.2rem" />
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
            <IconBrandInstagram stroke={1} size="2.2rem" />
          </Box>
        </Box>
      </MainCard>
    </Box>
  );
};

export default ContactUsPage;
