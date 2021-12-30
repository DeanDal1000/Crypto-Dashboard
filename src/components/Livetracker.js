import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, makeStyles } from '@material-ui/core';
import Coin from './Coin';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Livetracker = () => {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
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

  const handleChnage = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className={classes.container}>
      <div className="coin-app">
        <div className="coin-search">
          <h1>Live Tracker</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              onChange={handleChnage}
              className="coin-input"
            />
          </form>
        </div>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Livetracker;
