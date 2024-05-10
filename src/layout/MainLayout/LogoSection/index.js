import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import MuiTypography from '@mui/material/Typography';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { MENU_OPEN } from 'store/actions';
import { Box } from '@mui/system';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    
      <Box sx={{ display: 'flex',justifyContent:"center"}}>
      <Logo/>
        {/* <MuiTypography variant="h1">
        Bethel
      </MuiTypography> */}
      </Box>
    </ButtonBase>
  );
};

export default LogoSection;
