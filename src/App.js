import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Dashboard from './components/Dashboard';
import Rightbar from './components/Rightbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Convertor from './components/Convertor';
import Livetracker from './components/Livetracker';

const useStyles = makeStyles((theme) => ({
  rightbar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function App() {
  const classes = useStyles();
  console.log(process.env.REACT_APP_NEWS_API_KEY);
  return (
    <>
      <Router>
        <Grid container>
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/convert" element={<Convertor />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/tracker" element={<Livetracker />} />
            </Routes>
          </Grid>
          <Grid item sm={3} className={classes.right}>
            <Rightbar />
          </Grid>
        </Grid>
      </Router>
    </>
  );
}

export default App;
