// material-ui
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SingleLineImageList from './banner';

const HomePage = () => (
  <Box>
    <MainCard title="Who We Are">
      <Typography variant="body2">
        We minister with individuals, families and communities in their personal and spiritual well-being. We help each member of the church
        to be disciples of Christ thereby we are enabling them to fulfill the will of God in their lives.
      </Typography>
      <Typography sx={{ pt: '20px' }} variant="body2">
        We build churches and also we teach and train pastors to pioneer churches. Through our ministry, we have started 25 churches and
        raised 50 pastors and 60 lay leaders to fulfil The Great Commission in their lives.
      </Typography>
    </MainCard>
    <MainCard sx={{ mt: '10px' }} title="Bethel Church">
      <SingleLineImageList />
    </MainCard>
  </Box>
);

export default HomePage;
