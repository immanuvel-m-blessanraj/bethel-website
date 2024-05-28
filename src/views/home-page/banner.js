import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import { Box } from '@mui/system';

const itemData = [
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
  'https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=',
  'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <ScrollView></ScrollView> */}
      <Box
        display="-webkit-box"
        overflow="auto"
        sx={{
          overflowX: 'scroll',
          width: '100%'
        }}
      >
        {itemData.map((map) => {
          return (
            <Box
              component="section"
              key={map}
              className={{ map }}
              sx={{
                width: 500,
                height: 500,
                // bgcolor: 'red',
                marginRight: 5,
     
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80')",
                // display: 'inline-block'
                backgroundRepeat:'no-repeat',
                backgroundPosition:"center",
                backgroundSize:"cover",
              }}
            >
              {/* <img></img> */}
            </Box>
          );
        })}
      </Box>
      {/* <PerfectScrollbar options={{ suppressScrollX: true, suppressScrollY: false }}>
        <Grid>
          {itemData.map((value) => (
            <Grid key={value} item>
              <Box display="flex">
                <Box
                  component="section"
                  sx={{
                    width: 100,
                    height: 300,
                    bgcolor: 'red',
                    paddingRight: 20,
                    paddingBottom: 20
                  }}
                ></Box>
                <Box
                  component="section"
                  sx={{
                    width: 100,
                    height: 300,
                    bgcolor: 'red',
                    paddingRight: 20,
                    paddingBottom: 20
                  }}
                ></Box>
                <Box
                  component="section"
                  sx={{
                    width: 100,
                    height: 300,
                    bgcolor: 'red',
                    paddingRight: 20,
                    paddingBottom: 20
                  }}
                ></Box>
              </Box>
              {/* <img
                  src={value}
                  alt={value}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                /> */}
      {/* </Grid>
          ))}
        </Grid>
      </PerfectScrollbar> */}
    </div>
  );
}
