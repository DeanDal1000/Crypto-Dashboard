import { Container, makeStyles, Typography } from '@material-ui/core';
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Navbar.css';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    color: '#fff',
    zIndex: '10000',
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: 'black',
      textDecoration: 'none',
      border: '1px solid #ece7e7',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
      cursor: 'pointer',
    },
  },
  text: {
    fontWeight: 500,
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      textDecoration: 'none',
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} id="nav-container">
      <Navbar />
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={classes.item} id="items">
          <Home className={classes.icon} />
          <Typography className={classes.text}>Dashboard</Typography>
        </div>
      </Link>
      <Link to="/convert" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={classes.item}>
          <CompareArrowsIcon className={classes.icon} />
          <Typography className={classes.text}>Crypto Convertor</Typography>
        </div>
      </Link>
      <Link to="/feed" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={classes.item}>
          <List className={classes.icon} />
          <Typography className={classes.text}>News</Typography>
        </div>
      </Link>
      <Link to="/tracker" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={classes.item}>
          <AnalyticsIcon className={classes.icon} />
          <Typography className={classes.text}>Tracker</Typography>
        </div>
      </Link>

      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
