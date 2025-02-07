import { useState, useRef, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, ClickAwayListener, Divider, Grid, Paper, Popper, Typography, useMediaQuery } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';

// assets
import { IconBell } from '@tabler/icons-react';

// ==============================|| NOTIFICATION ||============================== //

const NotificationSection = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          [theme.breakpoints.down('md')]: {
            mr: 2
          }
        }}
      >
        <ButtonBase sx={{ borderRadius: '12px' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&[aria-controls="menu-list-grow"],&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            color="inherit"
          >
            <IconBell stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? 5 : 0, 20]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions position={matchesXs ? 'top' : 'top-right'} in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 205px)', overflowX: 'hidden' }}>
                        <Grid container direction="column" spacing={2}>
                          <Grid item xs={12} sx={{my:1.5}}>
                            <Box sx={{ px: 2, pt: 0.25, alignItems: 'center' }} display="flex" justifyContent="space-between">
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'center', // Center horizontally
                                  alignItems: 'center', // Center vertically
                                  borderRadius: '2px',
                                  padding: '2px',
                                  color: theme.palette.secondary.light,
                                  backgroundColor: theme.palette.secondary.dark
                                }}
                              >
                                <IconBell stroke={1.5} size="1.3rem" />
                              </Box>

                              <Typography sx={{ pr: '10px' }} variant="h4" color="secondary">
                                9361638515
                              </Typography>
                            </Box>
                            <Divider sx={{ my: 1.5 }} />
                            <Box sx={{ px: 2, pt: 0.25, alignItems: 'center' }} display="flex" justifyContent="space-between">
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'center', // Center horizontally
                                  alignItems: 'center', // Center vertically
                                  borderRadius: '2px',
                                  padding: '2px',
                                  color: theme.palette.secondary.light,
                                  backgroundColor: theme.palette.secondary.dark
                                }}
                              >
                                <IconBell stroke={1.5} size="1.3rem" />
                              </Box>

                              <Typography sx={{ pl: '10px' }} variant="h2" color="secondary">
                                9361638515
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </PerfectScrollbar>
                    </Grid>
                  </Grid>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default NotificationSection;
