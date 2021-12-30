import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Livetracker = () => {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log('error'));
  }, []);

  return (
    <Container className={classes.container}>
      <div className="coin-search">
        <h1>Live Tracker</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" />
        </form>
      </div>
    </Container>
  );
};

export default Livetracker;
