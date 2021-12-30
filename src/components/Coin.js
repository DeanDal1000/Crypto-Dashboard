import { PriceChange } from '@mui/icons-material';
import React from 'react';
import '../styles/Coin.css';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';

const Coin = ({
  name,
  image,
  price,
  symbol,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    // <div className="coin-container">
    //   <div className="coin-row">
    //     <div className="coin">
    //       <img src={image} alt="" />
    //       <h1>{name}</h1>
    //       <p className="coin-symbol">{symbol}</p>
    //     </div>
    //     <div className="coin-data">
    //       <p className="coin-price">${price}</p>
    //       <p className="coin-volume">${volume.toLocaleString()}</p>
    //       {priceChange < 0 ? (
    //         <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
    //       ) : (
    //         <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
    //       )}
    //       <p className="coin-marketcap">
    //         Mkt Cap: ${marketcap.toLocaleString()}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <img src={image} alt="img" height={50} width={50} />
            </TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="right">{symbol}</TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right">${volume.toLocaleString()}</TableCell>

            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default Coin;
