import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: '10000',
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  icons: {
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex'),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          CRYPTO
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          <DashboardIcon />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
