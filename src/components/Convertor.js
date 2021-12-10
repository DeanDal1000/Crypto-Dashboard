import React, { useState } from 'react';
import '../styles/Convertor.css';
import Exchangerate from './Exchangerate';
import axios from 'axios';

const Convertor = () => {
  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA', 'GBP'];
  const [primaryCurrency, setPrimaryCurrency] = useState('BTC');
  const [secondaryCurrency, setSecondayCurrency] = useState('BTC');
  const [amount, setAmount] = useState(1);

  const convert = () => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        from_currency: primaryCurrency,
        function: 'CURRENCY_EXCHANGE_RATE',
        to_currency: 'USD',
      },
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_CONVERT_API_KEY,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="convertor-container">
      <h1 className="convert-title">Currency Convertor</h1>
      <div className="table-input">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency </td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  className="currency-option"
                  name="currency-option-1"
                  id=""
                  value={primaryCurrency}
                  onChange={(e) => setPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index} value="">
                      {currency}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency </td>
              <td>
                <input type="number" name="currency-amount-2" value={''} />
              </td>
              <td>
                <select
                  className="currency-option"
                  name="currency-option-2"
                  id=""
                  value={secondaryCurrency}
                  onChange={(e) => setPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index} value="">
                      {currency}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="convert-button" onClick={convert}>
          Convert
        </button>
      </div>
      <Exchangerate />
    </div>
  );
};

export default Convertor;
